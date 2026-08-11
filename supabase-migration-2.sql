-- CLOSETDAY migration 2 — 기분(mood) / 퍼스널컬러(personal_color) 태그 추가
-- 이미 supabase-schema.sql을 실행하신 프로젝트에서, SQL Editor에 이 내용을 추가로 실행하세요.
-- (컬럼이 이미 있으면 건너뛰도록 idempotent하게 작성했어요.)

alter table public.closet_items
  add column if not exists mood text[] not null default '{}';

alter table public.closet_items
  add column if not exists personal_color text;

alter table public.closet_items
  drop constraint if exists closet_items_personal_color_check;

alter table public.closet_items
  add constraint closet_items_personal_color_check
  check (personal_color is null or personal_color in ('봄 웜톤', '여름 쿨톤', '가을 웜톤', '겨울 쿨톤'));
