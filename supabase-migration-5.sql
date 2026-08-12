-- CLOSETDAY migration 5 — 커뮤니티 코디 공유 (핀터레스트형 둘러보기)
-- SQL Editor → New query 에 전체 붙여넣고 Run 하세요.

create table if not exists public.shared_outfits (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  title text not null,
  description text,
  season text,
  tpo text,
  mood text,
  image_path text not null,
  like_count int not null default 0,
  created_at timestamptz not null default now()
);

alter table public.shared_outfits enable row level security;

-- 공개 피드: 누구나 조회 가능, 등록/수정/삭제는 본인 것만
drop policy if exists "shared_outfits_select_all" on public.shared_outfits;
create policy "shared_outfits_select_all" on public.shared_outfits
  for select using (true);
drop policy if exists "shared_outfits_insert_own" on public.shared_outfits;
create policy "shared_outfits_insert_own" on public.shared_outfits
  for insert with check (auth.uid() = owner_id);
drop policy if exists "shared_outfits_update_own" on public.shared_outfits;
create policy "shared_outfits_update_own" on public.shared_outfits
  for update using (auth.uid() = owner_id);
drop policy if exists "shared_outfits_delete_own" on public.shared_outfits;
create policy "shared_outfits_delete_own" on public.shared_outfits
  for delete using (auth.uid() = owner_id);

-- 좋아요 (한 사람이 한 코디에 한 번만)
create table if not exists public.outfit_likes (
  outfit_id uuid not null references public.shared_outfits(id) on delete cascade,
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (outfit_id, owner_id)
);

alter table public.outfit_likes enable row level security;

drop policy if exists "outfit_likes_select_all" on public.outfit_likes;
create policy "outfit_likes_select_all" on public.outfit_likes
  for select using (true);
drop policy if exists "outfit_likes_insert_own" on public.outfit_likes;
create policy "outfit_likes_insert_own" on public.outfit_likes
  for insert with check (auth.uid() = owner_id);
drop policy if exists "outfit_likes_delete_own" on public.outfit_likes;
create policy "outfit_likes_delete_own" on public.outfit_likes
  for delete using (auth.uid() = owner_id);

-- 좋아요 수를 shared_outfits.like_count 에 자동 반영
create or replace function public.sync_outfit_like_count()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if (tg_op = 'INSERT') then
    update public.shared_outfits set like_count = like_count + 1 where id = new.outfit_id;
  elsif (tg_op = 'DELETE') then
    update public.shared_outfits set like_count = greatest(like_count - 1, 0) where id = old.outfit_id;
  end if;
  return null;
end;
$$;

drop trigger if exists trg_outfit_likes_sync on public.outfit_likes;
create trigger trg_outfit_likes_sync
  after insert or delete on public.outfit_likes
  for each row execute function public.sync_outfit_like_count();

-- 코디 사진 저장용 공개 버킷
insert into storage.buckets (id, name, public)
  values ('outfit-images', 'outfit-images', true)
  on conflict (id) do nothing;

drop policy if exists "outfit_images_public_select" on storage.objects;
create policy "outfit_images_public_select" on storage.objects
  for select using (bucket_id = 'outfit-images');
drop policy if exists "outfit_images_owner_insert" on storage.objects;
create policy "outfit_images_owner_insert" on storage.objects
  for insert with check (bucket_id = 'outfit-images' and auth.uid()::text = (storage.foldername(name))[1]);
drop policy if exists "outfit_images_owner_delete" on storage.objects;
create policy "outfit_images_owner_delete" on storage.objects
  for delete using (bucket_id = 'outfit-images' and auth.uid()::text = (storage.foldername(name))[1]);
