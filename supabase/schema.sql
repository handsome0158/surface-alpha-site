-- =========================================================
-- SURFACE ALPHA 견적문의 — Supabase 설정
-- 사용법: Supabase 대시보드 → SQL Editor → New query → 이 파일 전체를 붙여넣고 Run
-- 여러 번 실행해도 안전합니다.
--
-- 보안 원칙
--  · 홈페이지 방문자(공개 키)는 문의를 '저장'만 할 수 있고, 다른 사람의 문의를 '조회·수정·삭제'할 수 없습니다.
--  · 문의 내용과 사진은 Supabase 대시보드(Table Editor, Storage)에서만 확인합니다.
-- =========================================================

-- 1) 견적문의 테이블
create table if not exists public.inquiries (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  company       text not null check (char_length(company) between 1 and 200),
  contact_name  text not null check (char_length(contact_name) between 1 and 100),
  phone         text not null check (char_length(phone) between 5 and 40),
  email         text not null check (char_length(email) between 3 and 200 and email like '%@%'),
  material      text not null check (char_length(material) between 1 and 100),
  location      text check (char_length(location) <= 200),
  scale         text check (char_length(scale) <= 200),
  message       text not null check (char_length(message) between 1 and 5000),
  photo_paths   text[] not null default '{}' check (cardinality(photo_paths) <= 5),
  consent       boolean not null check (consent = true),
  page_url      text check (char_length(page_url) <= 300),
  user_agent    text check (char_length(user_agent) <= 300),
  -- 관리용 (방문자는 바꿀 수 없음)
  status        text not null default 'new' check (status in ('new', 'in_progress', 'quoted', 'closed')),
  admin_memo    text
);

comment on table public.inquiries is 'SURFACE ALPHA 홈페이지 기업 견적문의';
create index if not exists inquiries_created_at_idx on public.inquiries (created_at desc);

-- 2) 행 단위 보안(RLS): 공개 키로는 INSERT 만 허용
alter table public.inquiries enable row level security;

revoke all on public.inquiries from anon, authenticated;
grant insert (company, contact_name, phone, email, material, location, scale,
              message, photo_paths, consent, page_url, user_agent)
  on public.inquiries to anon, authenticated;

drop policy if exists "website visitors can submit inquiries" on public.inquiries;
create policy "website visitors can submit inquiries"
  on public.inquiries for insert
  to anon, authenticated
  with check (status = 'new' and admin_memo is null);
-- SELECT / UPDATE / DELETE 정책은 만들지 않습니다 → 공개 키로는 조회·수정·삭제 불가

-- 3) 현장 사진 저장소 (비공개, 이미지 파일만, 파일당 10MB 이하)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('inquiry-photos', 'inquiry-photos', false, 10485760,
        array['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif', 'image/gif'])
on conflict (id) do update
  set public = false,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

-- 공개 키로는 'inquiries/' 폴더에 업로드만 가능 (조회·덮어쓰기·삭제 불가)
drop policy if exists "website visitors can upload inquiry photos" on storage.objects;
create policy "website visitors can upload inquiry photos"
  on storage.objects for insert
  to anon, authenticated
  with check (
    bucket_id = 'inquiry-photos'
    and (storage.foldername(name))[1] = 'inquiries'
  );
