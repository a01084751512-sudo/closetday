-- CLOSETDAY Supabase schema
-- Supabase 대시보드 → SQL Editor → New query 에 전체 붙여넣고 Run 하세요.

-- ===== Tables =====
create table if not exists public.closet_items (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  category text not null check (category in ('상의','하의','아우터','신발','액세서리')),
  seasons text[] not null default '{}',
  tpo text[] not null default '{}',
  mood text[] not null default '{}',
  personal_color text check (personal_color is null or personal_color in ('봄 웜톤','여름 쿨톤','가을 웜톤','겨울 쿨톤')),
  image_path text,
  created_at timestamptz not null default now()
);

create table if not exists public.market_items (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  title text not null,
  category text not null check (category in ('상의','하의','아우터','신발','기타')),
  deal_type text not null check (deal_type in ('판매','교환','나눔')),
  price integer not null default 0,
  condition text not null,
  location text not null,
  description text,
  urgent boolean not null default false,
  image_path text,
  created_at timestamptz not null default now()
);

-- ===== Row Level Security =====
alter table public.closet_items enable row level security;
alter table public.market_items enable row level security;

-- 내 옷장: 본인 것만 보고 쓰고 지울 수 있음 (완전 비공개)
create policy "closet_select_own" on public.closet_items
  for select using (auth.uid() = owner_id);
create policy "closet_insert_own" on public.closet_items
  for insert with check (auth.uid() = owner_id);
create policy "closet_delete_own" on public.closet_items
  for delete using (auth.uid() = owner_id);

-- 동네 옷장: 누구나 조회 가능(공개 게시판), 등록/삭제는 본인 글만
create policy "market_select_all" on public.market_items
  for select using (true);
create policy "market_insert_own" on public.market_items
  for insert with check (auth.uid() = owner_id);
create policy "market_delete_own" on public.market_items
  for delete using (auth.uid() = owner_id);

-- ===== Storage buckets =====
insert into storage.buckets (id, name, public)
  values ('closet-images', 'closet-images', false)
  on conflict (id) do nothing;
insert into storage.buckets (id, name, public)
  values ('market-images', 'market-images', true)
  on conflict (id) do nothing;

-- closet-images: 비공개, 업로드 경로가 {본인 uid}/파일명 인 것만 접근 허용
create policy "closet_images_owner_select" on storage.objects
  for select using (bucket_id = 'closet-images' and auth.uid()::text = (storage.foldername(name))[1]);
create policy "closet_images_owner_insert" on storage.objects
  for insert with check (bucket_id = 'closet-images' and auth.uid()::text = (storage.foldername(name))[1]);
create policy "closet_images_owner_delete" on storage.objects
  for delete using (bucket_id = 'closet-images' and auth.uid()::text = (storage.foldername(name))[1]);

-- market-images: 공개 조회, 업로드/삭제는 본인 경로만
create policy "market_images_public_select" on storage.objects
  for select using (bucket_id = 'market-images');
create policy "market_images_owner_insert" on storage.objects
  for insert with check (bucket_id = 'market-images' and auth.uid()::text = (storage.foldername(name))[1]);
create policy "market_images_owner_delete" on storage.objects
  for delete using (bucket_id = 'market-images' and auth.uid()::text = (storage.foldername(name))[1]);
