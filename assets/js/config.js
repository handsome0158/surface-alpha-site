/* =========================================================
   SURFACE ALPHA 사이트 설정 파일
   - 회사 정보와 견적문의 전송 방식을 여기서 수정합니다.
   - 빈 문자열('')인 항목은 홈페이지에 표시되지 않습니다.
   ========================================================= */
window.SA_CONFIG = {
  company: {
    nameKo: '서피스알파',
    nameEn: 'SURFACE ALPHA',
    address: '서울특별시 강남구 개포로28길 32, 대연빌딩 201호',
    phone: '02-579-0158',
    mobile: '010-7114-0158',

    // ▼ 확인 후 입력하세요. 비워 두면 표시되지 않습니다.
    email: '',              // 예: 'contact@surfacealpha.co.kr'
    ceo: '',                // 대표자명
    bizNumber: '',          // 사업자등록번호 예: '000-00-00000'
    // 개인정보 보유 기간 (문의 양식 동의 문구에 표시)
    retention: '문의 처리 완료 후 1년'
  },

  /* 관련 브랜드 (푸터에 작게 표시)
     - 서피스알파와 별도로 운영되는 브랜드임을 명시합니다.
     - 표시하지 않으려면 show: false 로 바꾸세요. */
  relatedBrands: {
    show: true,
    note: '아래 브랜드는 서피스알파와 별도로 운영되는 관련 전문 브랜드입니다.',
    items: [
      { name: 'Carand Film', desc: '고급 주방 및 인테리어 표면보호', url: '' },
      { name: "Car's Top", desc: '자동차 외장관리 및 PPF', url: '' }
    ]
  },

  /* 견적문의 전송 방식
     1) endpoint 에 폼 수신 서비스 주소를 넣으면 → 사진 첨부 포함 실제 온라인 접수
        (예: Formspree 'https://formspree.io/f/xxxxxxx' — README 참고)
     2) endpoint 가 비어 있고 company.email 이 있으면 → 방문자 메일 앱으로 내용 작성 (사진은 직접 첨부)
     3) 둘 다 비어 있으면 → 온라인 접수 대신 '문의 내용 복사' + 전화 안내
     ※ 실제 전송이 확인되기 전에는 '접수 완료'로 표시하지 않습니다. */
  /* Supabase 연결 (견적문의 저장 + 현장 사진 업로드)
     - publishableKey 는 브라우저에 공개되도록 만들어진 키입니다. (secret 키는 절대 넣지 마세요)
     - 먼저 supabase/schema.sql 을 Supabase SQL Editor 에서 한 번 실행해야 합니다.
     - url 을 비우면 Supabase 연결을 끕니다. */
  supabase: {
    url: 'https://cmbiujsrhyyzykuauwei.supabase.co',
    publishableKey: 'sb_publishable_v3r5O0lohyJs33HW0ccuaw_ySj8u2t-',
    table: 'inquiries',
    bucket: 'inquiry-photos'
  },

  form: {
    endpoint: '',           // Supabase 를 쓰면 비워 두세요
    maxFiles: 5,
    maxTotalMB: 10
  }
};
