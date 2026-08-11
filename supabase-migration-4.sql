-- CLOSETDAY migration 4 — 스타일 레퍼런스(코디 영상 공유) 게시판
-- SQL Editor → New query 에 전체 붙여넣고 Run 하세요.

create table if not exists public.style_references (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  video_url text not null,
  platform text not null default '링크',
  title text not null,
  creator_name text,
  tags text[] not null default '{}',
  created_at timestamptz not null default now()
);

alter table public.style_references enable row level security;

-- 누구나 조회 가능(공개 레퍼런스 보드), 등록/삭제는 본인 글만
create policy "style_references_select_all" on public.style_references
  for select using (true);
create policy "style_references_insert_own" on public.style_references
  for insert with check (auth.uid() = owner_id);
create policy "style_references_delete_own" on public.style_references
  for delete using (auth.uid() = owner_id);
