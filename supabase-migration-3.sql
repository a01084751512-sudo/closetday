-- CLOSETDAY migration 3 — 마이페이지(프로필) 테이블
-- SQL Editor → New query 에 전체 붙여넣고 Run 하세요.

create table if not exists public.profiles (
  owner_id uuid primary key references auth.users(id) on delete cascade,
  height int,
  weight int,
  age int,
  gender text check (gender is null or gender in ('여성', '남성')),
  body_type text check (body_type is null or body_type in ('모래시계형', '직사각형', '역삼각형', '삼각형', '둥근형')),
  personal_color text check (personal_color is null or personal_color in ('봄 웜톤', '여름 쿨톤', '가을 웜톤', '겨울 쿨톤')),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- 본인 프로필만 보고 쓰고 수정할 수 있음
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = owner_id);
create policy "profiles_insert_own" on public.profiles
  for insert with check (auth.uid() = owner_id);
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = owner_id);
