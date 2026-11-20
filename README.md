# SURFACE ALPHA 공식 홈페이지

HTML, CSS, JavaScript로만 만든 정적 홈페이지입니다. Node.js 같은 설치 없이 동작합니다.

## 1. 실행 방법
- `index.html`을 더블클릭하면 브라우저에서 바로 열립니다.
- VS Code에서 작업할 때는 확장 프로그램 **Live Server**를 설치하고, `index.html`에서 마우스 오른쪽 버튼 → **Open with Live Server**를 누르면 수정할 때마다 화면이 자동으로 새로고침됩니다.

## 2. 폴더 구조
```
surface-alpha-site/
├─ index.html                 메인 페이지 (모든 섹션)
├─ robots.txt, sitemap.xml    검색엔진용 파일 (도메인 연결 후 주소 수정)
└─ assets/
   ├─ css/style.css           디자인
   ├─ js/config.js            ★ 회사 정보, 문의 전송 방식 설정
   ├─ js/projects.js          ★ 시공 실적 내용과 사진 경로
   ├─ js/main.js              동작 (메뉴, 프로젝트 팝업, 문의 양식)
   └─ images/
      ├─ brand/               로고, 파비콘, 대표 이미지
      └─ projects/project-1~4 프로젝트별 실제 시공 사진
```

## 3. 자주 하는 수정
### 회사 정보 (대표자명, 사업자등록번호, 이메일)
`assets/js/config.js`의 `email`, `ceo`, `bizNumber`를 채우면 됩니다. 비워 둔 항목은 홈페이지에 나오지 않습니다.

### 시공 사진 넣기
1. 사진을 `assets/images/projects/project-1/` 같은 폴더에 복사합니다.
2. `assets/js/projects.js`에서 해당 프로젝트의 `photos`에 아래처럼 추가합니다.
   ```js
   photos: [
     { src: 'assets/images/projects/project-1/01.jpg', caption: '시공 후 승강기 내부' }
   ],
   beforeAfter: {
     before: 'assets/images/projects/project-1/before.jpg',
     after:  'assets/images/projects/project-1/after.jpg'
   }
   ```
3. 첫 번째 사진이 목록의 대표 사진이 됩니다. 전후 사진을 둘 다 넣으면 상세 팝업에 비교 슬라이더가 나타납니다.

**사진 용량 줄이기:** 가로 1600px, JPG 또는 WebP, 한 장에 300KB 안팎을 권장합니다. 무료 웹 도구 [Squoosh](https://squoosh.app)로 변환할 수 있습니다.
**주의:** 실제 시공 사진만 넣어 주세요. 고객사명, 로고, 계약금액은 고객사의 공개 승인을 받은 경우에만 `client` 항목에 입력합니다.

### 메인 대표 사진 바꾸기
지금 첫 화면 배경은 사진이 아닌 '브러시드 스틸' 질감의 그래픽입니다. 대표 현장 사진을 쓰려면 `assets/images/brand/hero.jpg`로 저장한 뒤, `style.css`의 `.hero-bg` 주석 안내대로 한 줄을 추가하세요.

## 4. 견적문의 — Supabase 연결 (현재 설정)
견적문의는 Supabase에 저장되고, 현장 사진은 Supabase Storage에 업로드됩니다. 서버나 Node.js 없이 동작합니다.

### 처음 한 번만 할 일
1. [Supabase 대시보드](https://supabase.com/dashboard) → 프로젝트 → 왼쪽 메뉴 **SQL Editor** → **New query**
2. `supabase/schema.sql` 파일 내용을 전체 복사해 붙여넣고 **Run**
3. `index.html`을 열고 견적문의를 한 번 보내 테스트 → **Table Editor → inquiries**에 문의가 들어왔는지 확인

### 문의 확인하는 곳
- 문의 내용: **Table Editor → inquiries** (`status` 칸을 new → in_progress → quoted → closed로 바꿔 관리)
- 현장 사진: **Storage → inquiry-photos → inquiries/연-월/** 폴더 (`photo_paths` 칸의 경로와 같음)

### 보안
- `config.js`의 `sb_publishable_...` 키는 웹사이트에 공개되도록 만들어진 키라 노출되어도 괜찮습니다.
- `schema.sql`이 방문자는 **문의 저장과 사진 업로드만** 하고, 다른 사람의 문의나 사진은 볼 수 없게 막습니다.
- **secret 키(`sb_secret_...`)나 service_role 키는 절대 홈페이지 파일에 넣지 마세요.**

### 새 문의 알림 받기 (선택)
Supabase는 기본적으로 알림을 보내지 않습니다. 새 문의를 바로 알고 싶다면 **Database → Webhooks**로 Slack이나 메일 서비스에 연결할 수 있습니다.

## 4-1. 다른 전송 방식 (Supabase를 쓰지 않을 때)
`config.js`의 `supabase.url`을 비우면 아래 방식으로 바뀝니다.
| 방식 | 설정 | 서버 필요 | 사진 첨부 | 접수 표시 |
|---|---|---|---|---|
| ① 현재 상태 (설정 없음) | 없음 | 없음 | 방문자가 문자·메일로 직접 첨부 | '문의 내용 복사' + 전화 안내. **접수 완료로 표시하지 않음** |
| ② 메일 앱 연결 | `config.js`의 `email` 입력 | 없음 | 방문자가 메일 창에 직접 첨부 | 메일 창을 연 뒤 "메일을 보내야 접수 완료"라고 안내 |
| ③ 폼 수신 서비스 (권장) | `config.js`의 `form.endpoint` 입력 | 외부 서비스 가입 | **자동 첨부됨** | 실제 전송이 성공했을 때만 "접수되었습니다" 표시 |

③을 쓰려면 Formspree(formspree.io), Getform, Web3Forms 같은 폼 수신 서비스에 가입해 폼을 만들고, 발급된 주소(예: `https://formspree.io/f/abcdwxyz`)를 `endpoint`에 넣으면 됩니다. 사진 첨부는 대부분 유료 요금제에서만 지원되니 가입 전에 확인하세요.

## 5. 온라인 배포와 도메인 연결
아래 서비스 중 하나에 폴더를 그대로 올리면 됩니다. 모두 소규모 사이트는 무료로 시작할 수 있습니다.
- **Netlify** (netlify.com): 사이트 화면에 폴더를 끌어다 놓으면 바로 배포됩니다. 가장 쉽습니다.
- **Cloudflare Pages**, **GitHub Pages**, **Vercel**도 같은 방식으로 쓸 수 있습니다.

도메인을 연결한 뒤에는 다음 세 가지를 수정하세요.
1. `index.html` 상단의 `canonical`, `og:url` 주석을 풀고 실제 주소 입력
2. `sitemap.xml`, `robots.txt`의 `your-domain.co.kr`을 실제 도메인으로 변경
3. 네이버 서치어드바이저와 구글 서치콘솔에 사이트 등록 후 `sitemap.xml` 제출

## 6. 공개 전 확인할 것
- [ ] 대표자명, 사업자등록번호, 이메일 입력 (`config.js`)
- [ ] 개인정보 보유 기간 문구 확인 (`config.js`의 `retention`)
- [ ] 프로젝트 문구가 실제 사실과 맞는지 확인 (`projects.js`)
- [ ] 실제 시공 사진 추가
- [ ] 견적문의 전송 방식 결정 (위 4번)
- [ ] SNS 공유용 대표 이미지(1200×630 JPG) 준비 후 `og:image` 설정
