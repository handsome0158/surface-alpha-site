/* =========================================================
   시공 경험(프로젝트) 데이터
   - 실제 시공 사진만 사용하세요. 사진이 없으면 '사진 준비중'으로 표시됩니다.
   - 사진 넣는 방법:
     1) assets/images/projects/project-1/ 폴더에 사진 파일 복사 (예: 01.jpg)
     2) 아래 photos 배열에 { src: 'assets/images/projects/project-1/01.jpg', caption: '설명' } 추가
     3) 시공 전후 사진이 있으면 beforeAfter 의 before / after 에 경로 입력
   - 권장: 가로 1600px, JPG 또는 WebP, 한 장당 300KB 내외 (README 참고)
   - 고객사명·로고·계약금액은 공개 승인을 받은 경우에만 입력하세요.
   ========================================================= */
window.SA_PROJECTS = [
  {
    id: 'project-1',
    category: 'Elevator Surface Protection',
    title: '경기 기업 사옥 승강기 표면보호',
    summary: '최초 1대 샘플 시공 후 품질 만족으로 10대 추가 시공',
    highlight: '한 대의 시공 품질이, 열 대의 추가 시공으로 이어졌습니다.',
    material: '스테인리스 승강기 내부 마감재',
    siteType: '경기도 과천시 기업 사옥',
    scale: '총 11대 (공용 3대 · 직원용 8대)',
    challenge: '이용과 이동이 잦은 사옥 승강기의 스테인리스 내부 마감재를 보호하면서, 여러 대에 걸쳐 균일한 시공 품질을 확보하는 것이 중요했습니다.',
    solution: '최초 1대에 보호필름을 샘플 시공해 품질을 확인받은 뒤, 공용 승강기 2대와 직원용 승강기 8대에 추가 시공했습니다.',
    process: [
      '승강기 1대에 보호필름 샘플 시공',
      '샘플 시공 품질 확인 후 추가 시공 범위 확정',
      '공용 승강기 2대와 직원용 승강기 8대 추가 시공',
      '패널 모서리와 조작부 주변 정밀 마감 및 최종 확인'
    ],
    result: '최초 샘플 승강기 1대를 포함해 총 11대의 스테인리스 내부 마감재 표면보호 시공을 완료했습니다.',
    client: '',          // 공개 승인된 경우에만 입력
    photos: [
      { src: 'assets/images/projects/project-1/11-completed-elevator-interior.jpg', caption: '완성된 승강기 내부' }
    ],
    story: [
      {
        title: '프로젝트 소개',
        description: '경기도 과천시 기업 사옥의 스테인리스 승강기 내부 마감재에 표면보호필름을 시공했습니다. 샘플 시공으로 확인한 품질이 추가 10대 시공으로 이어져 총 11대를 마무리했습니다.',
        photos: [
          { src: 'assets/images/projects/project-1/01-overview-elevator-bank.jpg', caption: '사옥 승강기 공용부 전경' },
          { src: 'assets/images/projects/project-1/02-overview-elevator-corridor.jpg', caption: '승강기 주변 내부 전경' }
        ]
      },
      {
        title: '최초 샘플 시공',
        description: '먼저 승강기 1대에 필름을 적용해 표면 상태와 마감 품질을 확인했습니다.',
        photos: [
          { src: 'assets/images/projects/project-1/03-sample-film-application.jpg', caption: '샘플 승강기 패널 필름 시공' },
          { src: 'assets/images/projects/project-1/04-sample-panel-application.jpg', caption: '패널 면에 필름을 정밀 부착' }
        ]
      },
      {
        title: '추가 10대 시공',
        description: '샘플 시공 품질에 대한 만족을 바탕으로 공용 승강기 2대와 직원용 승강기 8대에 추가 시공을 진행했습니다.',
        photos: [
          { src: 'assets/images/projects/project-1/05-additional-work-panel.jpg', caption: '추가 호기 패널 시공' },
          { src: 'assets/images/projects/project-1/06-additional-work-elevator.jpg', caption: '승강기 내부 필름 부착 작업' }
        ]
      },
      {
        title: '정밀 마감 작업',
        description: '조작부와 패널 가장자리 등 세밀한 부분까지 표면을 정리하고 마감 상태를 점검했습니다.',
        photos: [
          { src: 'assets/images/projects/project-1/07-edge-surface-preparation.jpg', caption: '패널 모서리와 표면 정리' },
          { src: 'assets/images/projects/project-1/08-precision-control-panel.jpg', caption: '조작부 주변 정밀 작업' },
          { src: 'assets/images/projects/project-1/09-precision-panel-finish.jpg', caption: '패널 하단 마감 확인' }
        ]
      },
      {
        title: '최종 완성 결과',
        description: '샘플 1대와 추가 10대, 총 11대의 승강기 내부 표면보호 시공을 마무리했습니다.',
        photos: [
          { src: 'assets/images/projects/project-1/10-completed-elevator-bank.jpg', caption: '시공 완료된 승강기 공용부' },
          { src: 'assets/images/projects/project-1/11-completed-elevator-interior.jpg', caption: '시공 완료된 승강기 내부' }
        ]
      }
    ],
    beforeAfter: { before: '', after: '' }
  },
  {
    id: 'project-2',
    category: '승강기 협력 시공 · 표면보호',
    title: '서울 기업 사옥 승강기 표면보호',
    summary: '최초 1대 시공 후 품질을 인정받아 총 4대로 확대 시공한 기업 사옥 프로젝트',
    highlight: '한 대의 시공으로 인정받은 품질, 네 대의 완성으로 증명한 기술력',
    material: '승강기 내부 스테인리스 마감재',
    siteType: '서울특별시 기업 업무시설',
    scale: '공용 승강기 1대 · 직원용 승강기 3대',
    challenge: '승강기 내부 스테인리스 표면과 각 마감 구조에 맞춰 보호필름을 시공하고, 조작 버튼과 복잡한 부위를 세밀하게 마감해야 했습니다.',
    solution: '승강기 협력사와 공용 승강기 1대를 먼저 시공한 후, 품질 확인을 거쳐 직원용 승강기 3대를 추가 시공했습니다.',
    process: [
      '주차장에서 로비로 연결되는 공용 승강기 1대 시공',
      '스테인리스 표면과 구조에 맞춰 보호필름 부착',
      '조작 버튼과 복잡한 부위 정밀 핸드커팅',
      '직원용 승강기 3대 추가 시공 및 마감 확인'
    ],
    result: '승강기 협력사와 함께 총 4대의 승강기 표면보호 시공을 완료했습니다. 정밀한 수작업과 세심한 마감으로 현장 요구에 맞는 결과물을 완성했습니다.',
    client: '',
    naturalImages: true,
    photos: [
      { src: 'assets/images/projects/project-2/hdept-case02-15-completed-elevator-interior.jpg', caption: '시공 완료된 승강기 내부' }
    ],
    story: [
      {
        title: '프로젝트 소개',
        description: '서울특별시 기업 업무시설의 승강기 표면보호 프로젝트입니다. 승강기 협력사와 공용 승강기 1대를 먼저 시공한 뒤 품질 확인을 거쳐 직원용 승강기 3대를 추가해 총 4대를 완성했습니다. 소재의 특성과 현장 구조를 고려한 정밀 시공과 세심한 마감에 집중했습니다.',
        photos: [
          { src: 'assets/images/projects/project-2/hdept-case02-02-elevator-lobby.jpg', caption: '현장 승강기 로비' }
        ]
      },
      {
        title: '최초 공용 승강기 시공',
        description: '주차장에서 로비로 연결되는 공용 승강기 1대를 첫 시공 대상으로 삼아 내부 상태와 작업 범위를 확인했습니다.',
        photos: [
          { src: 'assets/images/projects/project-2/hdept-case02-03-initial-elevator-view.jpg', caption: '최초 시공 승강기 내부 모습' }
        ]
      },
      {
        title: '스테인리스 보호필름 부착',
        description: '승강기 내부 스테인리스 마감재의 형태에 맞춰 보호필름을 부착하고 밀착 작업을 진행했습니다.',
        photos: [
          { src: 'assets/images/projects/project-2/hdept-case02-04-film-application-wide.jpg', caption: '승강기 내부 필름 부착 작업' },
          { src: 'assets/images/projects/project-2/hdept-case02-05-film-application-panel.jpg', caption: '스테인리스 패널에 필름을 부착' },
          { src: 'assets/images/projects/project-2/hdept-case02-06-film-squeegee-detail.jpg', caption: '필름 밀착 작업' }
        ]
      },
      {
        title: '버튼 주변 정밀 핸드커팅',
        description: '승강기 조작 버튼 하나하나의 형태에 맞춰 손으로 필름을 정밀하게 재단했습니다. 버튼과 복잡한 부위의 마감에 집중한 작업입니다.',
        photos: [
          { src: 'assets/images/projects/project-2/hdept-case02-07-hand-cut-button-detail.jpg', caption: '버튼 주변 정밀 핸드커팅' },
          { src: 'assets/images/projects/project-2/hdept-case02-08-hand-cut-button-trim.jpg', caption: '버튼 형상에 맞춘 필름 정리' },
          { src: 'assets/images/projects/project-2/hdept-case02-09-precision-film-peel.jpg', caption: '조작부 가장자리 필름 정밀 재단' }
        ]
      },
      {
        title: '세부 마감 및 품질 확인',
        description: '스테인리스 표면과 패널 모서리, 조작부 주변을 세심하게 마감하고 시공 상태를 확인했습니다.',
        photos: [
          { src: 'assets/images/projects/project-2/hdept-case02-10-surface-finish-check.jpg', caption: '필름 부착면 세부 확인' },
          { src: 'assets/images/projects/project-2/hdept-case02-11-panel-edge-finish.jpg', caption: '패널 표면 마감 작업' },
          { src: 'assets/images/projects/project-2/hdept-case02-12-control-panel-finish.jpg', caption: '승강기 조작부 주변 마감' },
          { src: 'assets/images/projects/project-2/hdept-case02-13-protective-masking-detail.jpg', caption: '복잡한 모서리 부위 세부 작업' }
        ]
      },
      {
        title: '직원용 승강기 추가 시공 및 최종 결과',
        description: '최초 공용 승강기 시공 후 직원용 승강기 3대를 추가로 시공해 총 4대의 표면보호 작업을 마무리했습니다.',
        photos: [
          { src: 'assets/images/projects/project-2/hdept-case02-14-completed-elevator-corridor.jpg', caption: '시공 완료된 승강기 로비' },
          { src: 'assets/images/projects/project-2/hdept-case02-15-completed-elevator-interior.jpg', caption: '시공 완료된 승강기 내부' },
          { src: 'assets/images/projects/project-2/hdept-case02-16-completed-lobby.jpg', caption: '시공 완료된 승강기 출입부' }
        ]
      }
    ],
    beforeAfter: { before: '', after: '' }
  },
  {
    id: 'project-3',
    category: '신규 교체 승강기 표면보호',
    title: '서울 기업 업무시설 승강기 표면보호',
    summary: '새롭게 교체한 승강기의 유지관리와 표면 손상 예방을 위해 진행한 정밀 보호필름 시공 프로젝트',
    highlight: '새롭게 교체한 승강기, 그 가치를 오래도록 보호하다.',
    material: '신규 교체 승강기 내부 스테인리스 마감재',
    siteType: '서울특별시 기업 업무시설',
    scale: '승강기 총 3대',
    challenge: '승강기를 새롭게 교체한 뒤 내부 스테인리스 마감재의 유지관리와 장기적인 표면 손상 예방이 필요한 상황이었습니다. 기업 시설에 요구되는 시공 품질과 완성도를 확보하는 것도 중요한 과제였습니다.',
    solution: '현장 담당자와 여러 차례 사전 미팅을 진행해 요구사항을 확인한 후, 교체된 승강기 내부 스테인리스 마감재에 보호필름을 정밀하게 시공했습니다.',
    process: [
      '현장 담당자와 미팅을 통해 유지관리 요구사항 확인',
      '신규 교체 승강기 내부 구조와 시공 범위 확인',
      '스테인리스 마감재에 보호필름 부착',
      '버튼 주변과 모서리의 세부 마감 및 상태 점검'
    ],
    result: '총 3대의 승강기 표면보호 시공을 완료했으며, 높은 완성도로 고객사로부터 만족스러운 평가를 받았습니다.',
    client: '',
    naturalImages: true,
    photos: [
      { src: 'assets/images/projects/project-3/sgroup-case03-09-completed-interior-cover.jpg', caption: '완성된 승강기 내부' }
    ],
    story: [
      {
        title: '프로젝트 소개',
        description: '서울특별시 기업 업무시설의 신규 교체 승강기 표면보호 프로젝트입니다. 현장 담당자와 여러 차례 미팅을 진행해 유지관리와 표면 손상 예방에 대한 요구사항을 확인했습니다.',
        photos: [
          { src: 'assets/images/projects/project-3/sgroup-case03-02-elevator-lobby.jpg', caption: '승강기 로비 전경' }
        ]
      },
      {
        title: '신규 교체 승강기 및 내부 확인',
        description: '새롭게 교체된 승강기 내부 구조와 스테인리스 마감재 상태를 살펴보고 표면보호가 필요한 작업 범위를 확인했습니다.',
        photos: [
          { src: 'assets/images/projects/project-3/sgroup-case03-03-replaced-elevator-interior.jpg', caption: '신규 교체 승강기 내부 전경' },
          { src: 'assets/images/projects/project-3/sgroup-case03-08-elevator-interior-context.jpg', caption: '승강기 내부 마감재 모습' }
        ]
      },
      {
        title: '스테인리스 보호필름 부착',
        description: '현장 구조와 마감재에 맞춰 보호필름을 부착하고 패널 면을 따라 밀착 작업을 진행했습니다.',
        photos: [
          { src: 'assets/images/projects/project-3/sgroup-case03-04-panel-area-detail.jpg', caption: '패널 부위 세부 작업' },
          { src: 'assets/images/projects/project-3/sgroup-case03-05-film-application-wide.jpg', caption: '승강기 내부 필름 부착 작업' },
          { src: 'assets/images/projects/project-3/sgroup-case03-06-film-application-squeegee.jpg', caption: '필름 밀착 작업' }
        ]
      },
      {
        title: '버튼 주변과 모서리 정밀 마감',
        description: '승강기 버튼 주변과 복잡한 모서리 부위를 세밀하게 다듬어 마감 완성도를 높였습니다.',
        photos: [
          { src: 'assets/images/projects/project-3/sgroup-case03-07-film-application-panel.jpg', caption: '패널 필름 세부 부착' },
          { src: 'assets/images/projects/project-3/sgroup-case03-11-panel-edge-work.jpg', caption: '패널 모서리 작업' },
          { src: 'assets/images/projects/project-3/sgroup-case03-12-button-panel-detail.jpg', caption: '승강기 버튼 주변 마감' }
        ]
      },
      {
        title: '세부 마감 및 품질 확인',
        description: '스테인리스 표면과 조작부 주변을 정리하고 시공 상태를 점검했습니다.',
        photos: [
          { src: 'assets/images/projects/project-3/sgroup-case03-10-surface-finishing.jpg', caption: '스테인리스 패널 표면 마감' },
          { src: 'assets/images/projects/project-3/sgroup-case03-14-control-panel-finish.jpg', caption: '조작부 주변 세부 확인' }
        ]
      },
      {
        title: '최종 완성 결과',
        description: '총 3대의 승강기 내부 스테인리스 마감재에 보호필름 시공을 완료했습니다. 완성도 높은 마감으로 고객사로부터 만족스러운 평가를 받았습니다.',
        photos: [
          { src: 'assets/images/projects/project-3/sgroup-case03-09-completed-interior-cover.jpg', caption: '시공 완료된 승강기 내부' },
          { src: 'assets/images/projects/project-3/sgroup-case03-13-completed-elevator-interior.jpg', caption: '완성된 승강기 내부 전경' },
          { src: 'assets/images/projects/project-3/sgroup-case03-15-completed-elevator-car.jpg', caption: '승강기 내부 최종 모습' }
        ]
      }
    ],
    beforeAfter: { before: '', after: '' }
  },
  {
    id: 'project-4',
    category: '공동주택 공용시설 보호필름 시공',
    title: '경기 공동주택 승강기 표면보호',
    summary: '승강기 교체 이후 깨끗한 시설 환경 유지를 위해 아파트 및 공용시설 승강기 총 11대 시공',
    highlight: '주민들이 함께 사용하는 공간, 새 승강기의 깨끗함을 오래도록.',
    material: '교체된 승강기 내부 마감재',
    siteType: '경기도 공동주택 시설',
    scale: '아파트 승강기 10대 · 공용시설 승강기 1대',
    challenge: '승강기 교체 이후 깨끗하게 정비된 내부 마감재를 유지하고, 일상적인 사용 과정에서 발생할 수 있는 스크래치와 오염을 예방하고자 했습니다.',
    solution: '공동주택 승강기의 사용 환경과 내부 마감재 특성을 고려해 표면보호필름을 시공하고 세부 부위를 꼼꼼하게 마감했습니다.',
    process: [
      '교체된 승강기 내부 마감재와 작업 범위 확인',
      '시공 부위 정리 및 보호필름 부착 준비',
      '승강기 내부 패널에 보호필름 부착',
      '버튼 주변과 모서리 세부 마감',
      '아파트 승강기 10대와 공용시설 승강기 1대 시공'
    ],
    result: '아파트 승강기 10대와 공용시설 승강기 1대, 총 11대의 시공을 완료했습니다. 여러 세대가 함께 사용하는 공간의 특성을 고려해 균일한 시공 품질과 세심한 마감에 집중했습니다.',
    client: '',
    naturalImages: true,
    photos: [
      { src: 'assets/images/projects/project-4/dongtan-case04-02-elevator-interior-wide.jpg', caption: '시공 완료된 승강기 내부' }
    ],
    story: [
      {
        title: '단지 및 현장 전경',
        description: '경기도 공동주택의 승강기 표면보호 프로젝트입니다. 입주민들이 함께 사용하는 승강기와 공용시설의 깨끗한 환경 유지를 위해 시공을 진행했습니다.',
        photos: []
      },
      {
        title: '승강기 교체 후 내부 모습',
        description: '새롭게 교체된 승강기 내부 마감재를 확인하고, 일상적인 사용에 따른 스크래치와 오염을 예방하기 위한 표면보호 작업을 준비했습니다.',
        photos: [
          { src: 'assets/images/projects/project-4/dongtan-case04-02-elevator-interior-wide.jpg', caption: '교체된 승강기 내부 전경' },
          { src: 'assets/images/projects/project-4/dongtan-case04-03-interior-finish.jpg', caption: '승강기 내부 마감재 모습' }
        ]
      },
      {
        title: '보호필름 부착 준비 및 패널 작업',
        description: '승강기 내부 패널의 형태와 마감 부위에 맞춰 보호필름을 부착하는 작업을 진행했습니다.',
        photos: [
          { src: 'assets/images/projects/project-4/dongtan-case04-04-film-application-detail.jpg', caption: '조작부 주변 필름 작업' },
          { src: 'assets/images/projects/project-4/dongtan-case04-05-panel-edge-work.jpg', caption: '패널과 손잡이 주변 세부 작업' }
        ]
      },
      {
        title: '승강기 내부 보호필름 부착',
        description: '내부 패널과 출입부 주변에 보호필름을 부착하고 표면에 맞춰 밀착 작업을 진행했습니다.',
        photos: [
          { src: 'assets/images/projects/project-4/dongtan-case04-06-elevator-panel-application.jpg', caption: '승강기 패널 필름 작업' },
          { src: 'assets/images/projects/project-4/dongtan-case04-07-interior-film-process.jpg', caption: '승강기 내부 필름 부착 과정' }
        ]
      },
      {
        title: '버튼 주변과 모서리 세부 마감',
        description: '조작부와 주변 패널의 세부 부위를 확인하며 꼼꼼하게 마감했습니다.',
        photos: [
          { src: 'assets/images/projects/project-4/dongtan-case04-08-button-area-work.jpg', caption: '버튼 주변 세부 시공' }
        ]
      },
      {
        title: '완성된 승강기 내부',
        description: '승강기 내부 패널의 보호필름 시공을 마무리하고 세부 마감 상태를 확인했습니다.',
        photos: [
          { src: 'assets/images/projects/project-4/dongtan-case04-09-completed-elevator-interior.jpg', caption: '완성된 승강기 내부' },
          { src: 'assets/images/projects/project-4/dongtan-case04-10-completed-panel-view.jpg', caption: '승강기 내부 패널 마감' }
        ]
      },
      {
        title: '공용시설을 포함한 총 11대 시공',
        description: '아파트 승강기 10대와 공용시설 승강기 1대, 총 11대의 시공을 완료했습니다. 여러 세대가 함께 사용하는 공간의 특성을 고려해 균일한 시공 품질과 세심한 마감에 집중했습니다.',
        photos: [
          { src: 'assets/images/projects/project-4/dongtan-case04-11-finished-interior-panel.jpg', caption: '승강기 내부 마감 상세' },
          { src: 'assets/images/projects/project-4/dongtan-case04-12-common-facility-view.jpg', caption: '입주민 공동 이용시설 전경' }
        ]
      }
    ],
    beforeAfter: { before: '', after: '' }
  },
  {
    id: 'project-5',
    category: 'POONGMOON HIGH SCHOOL — ELEVATOR SURFACE PROTECTION',
    title: '강남 풍문고등학교',
    summary: '교육시설 승강기 2대 표면보호 시공',
    highlight: '최초 1대 시공 후 만족을 바탕으로 추가 1대 의뢰',
    material: '승강기 표면보호 필름',
    siteType: '서울 강남구 교육시설',
    scale: '승강기 총 2대',
    projectFacts: [
      ['PROJECT TYPE', 'Educational Facility'],
      ['APPLICATION', 'Elevator Surface Protection'],
      ['SCOPE', '2 Elevators'],
      ['LOCATION', 'Gangnam-gu, Seoul']
    ],
    photos: [
      { src: 'assets/images/projects/project-5/cover-completed-elevator.webp', caption: '시공 완료된 승강기 내부' }
    ],
    overviewTitle: '교육시설 승강기 표면보호',
    overview: '학생과 교직원의 이용이 많은 교육시설의 승강기 표면을 보호하고 쾌적한 시설 환경을 유지하기 위해 진행된 프로젝트입니다.',
    challenge: '학생과 교직원의 이용이 많은 환경에서 승강기 표면을 보호하고 시설을 쾌적하게 유지하는 것이 과제였습니다.',
    solution: '최초 1대의 승강기 보호필름 시공 후 작업 결과에 대한 높은 만족도를 바탕으로 추가 1대의 시공을 의뢰받았습니다.',
    process: [
      '최초 1대 승강기 보호필름 시공',
      '시공 결과에 대한 높은 만족도를 바탕으로 추가 1대 의뢰',
      '정밀한 시공과 완성도 높은 마감'
    ],
    result: '정밀한 시공과 완성도 높은 마감을 통해 총 2대의 승강기 표면보호 프로젝트를 성공적으로 마무리했습니다.',
    overviewPhotos: [
      { src: 'assets/images/projects/project-5/01-school-context.webp', caption: '교육시설 외부 전경' }
    ],
    naturalImages: true,
    compactGallery: true,
    publicationNotes: [
      'CARAND FILM 사업 운영 당시 수행한 시공 경험이며, SURFACE ALPHA 브랜드로 신규 계약한 실적은 아닙니다.'
    ],
    story: [
      { description: '', photos: [] },
      {
        title: '현장과 시공 전 상태',
        photos: [
          { src: 'assets/images/projects/project-5/02-elevator-lobby.webp', caption: '시공 대상 승강기 외부 전경' },
          { src: 'assets/images/projects/project-5/03-before-surface.webp', caption: '시공 전 승강기 표면' }
        ]
      },
      {
        title: '보호필름 시공과 정밀 마감',
        photos: [
          { src: 'assets/images/projects/project-5/04-film-application.webp', caption: '승강기 패널 보호필름 부착' },
          { src: 'assets/images/projects/project-5/05-protective-masking.webp', caption: '시공 중 승강기 내부 보호' },
          { src: 'assets/images/projects/project-5/06-protection-detail.webp', caption: '손잡이 주변 보호 작업' },
          { src: 'assets/images/projects/project-5/07-panel-application.webp', caption: '패널 표면 필름 시공' },
          { src: 'assets/images/projects/project-5/08-control-panel-detail.webp', caption: '조작부 주변 정밀 작업' },
          { src: 'assets/images/projects/project-5/09-panel-surface-detail.webp', caption: '승강기 패널 표면 상세' },
          { src: 'assets/images/projects/project-5/10-panel-edge-detail.webp', caption: '패널 접합부 마감 상세' },
          { src: 'assets/images/projects/project-5/11-film-application-detail.webp', caption: '보호필름 부착 중 표면 상태' }
        ]
      },
      {
        title: '시공 완료',
        photos: [
          { src: 'assets/images/projects/project-5/12-completed-elevator.webp', caption: '시공 완료된 승강기 내부' }
        ]
      }
    ],
    beforeAfter: { before: '', after: '' }
  },
  {
    id: 'project-6',
    category: 'KOREA UNIVERSITY ALUMNI HALL — ELEVATOR SURFACE PROTECTION',
    title: '고려대학교 교우회관',
    summary: '교육 및 기관시설 승강기 1대 표면보호 시공',
    highlight: '까다로운 공사 절차와 제한된 일정에 맞춘 정밀 시공',
    material: '승강기 표면보호 필름',
    siteType: '서울 성북구 교육 및 기관시설',
    scale: '승강기 1대',
    projectFacts: [
      ['PROJECT TYPE', 'Educational & Institutional Facility'],
      ['APPLICATION', 'Elevator Surface Protection'],
      ['SCOPE', '1 Elevator'],
      ['LOCATION', 'Seongbuk-gu, Seoul']
    ],
    photos: [
      { src: 'assets/images/projects/project-6/cover-elevator-finish.webp', caption: '완성된 승강기 내부와 조작부' }
    ],
    overviewTitle: '교육 및 기관시설 승강기 표면보호',
    overview: '고려대학교 교우회관 승강기의 쾌적한 이용 환경과 시설물의 장기적인 가치 보존을 위해 진행된 표면보호 프로젝트입니다.',
    challenge: '시설물의 관리와 보존을 중요하게 생각한 후원자의 요청으로 전문 시공업체를 찾는 과정에서 의뢰받았습니다.',
    solution: '까다로운 공사 절차와 제한된 시공 일정에 맞춰 체계적으로 현장에 대응하고 정밀 시공을 진행했습니다.',
    process: [
      '시설물 관리와 보존을 고려한 시공 요청 대응',
      '공사 절차와 제한된 시공 일정에 맞춘 현장 대응',
      '승강기 표면보호 필름 정밀 시공',
      '완성도 높은 마감 확인'
    ],
    result: '까다로운 공사 절차와 제한된 시공 일정에도 체계적인 현장 대응과 정밀한 시공을 통해 높은 만족도로 프로젝트를 마무리했습니다.',
    overviewPhotos: [
      { src: 'assets/images/projects/project-6/01-building-context.webp', caption: '교우회관 건물 외부 전경' },
      { src: 'assets/images/projects/project-6/02-elevator-entry.webp', caption: '승강기 출입구 전경' }
    ],
    naturalImages: true,
    compactGallery: true,
    publicationNotes: [
      '기존 카앤필름 홈페이지에 게시된 실제 시공 사진을 사용한 사례이며, SURFACE ALPHA 브랜드로 신규 계약한 실적은 아닙니다.'
    ],
    story: [
      {
        description: '',
        photos: [
          { src: 'assets/images/projects/project-6/03-elevator-protection-preparation.webp', caption: '승강기 내부 보호 작업' },
          { src: 'assets/images/projects/project-6/04-protected-elevator-entry.webp', caption: '승강기 출입구 보호 작업' },
          { src: 'assets/images/projects/project-6/05-elevator-interior-panels.webp', caption: '승강기 내부 패널과 손잡이 전경' },
          { src: 'assets/images/projects/project-6/06-panel-and-handrail-detail.webp', caption: '내부 패널과 손잡이 주변 마감' },
          { src: 'assets/images/projects/project-6/07-control-panel-finish.webp', caption: '조작부 패널 정밀 마감' },
          { src: 'assets/images/projects/project-6/08-handrail-joint-detail.webp', caption: '손잡이 연결부 마감 상세' },
          { src: 'assets/images/projects/project-6/09-panel-surface-detail.webp', caption: '하단 패널과 손잡이 주변 마감' }
        ]
      },
      {
        title: '시공 완료',
        description: '승강기 내부 표면보호 시공을 마무리했습니다.',
        photos: [
          { src: 'assets/images/projects/project-6/10-completed-interior.webp', caption: '시공 완료된 승강기 내부 전경' }
        ]
      }
    ],
    beforeAfter: { before: '', after: '' }
  }
];
