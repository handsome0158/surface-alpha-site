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
    title: '과천 게임회사 사옥 승강기 표면보호',
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
    category: 'Stainless Steel Protection',
    title: '대형 백화점 고급 주방 공간 표면보호',
    summary: '대형 백화점 내 고급 주방 공간의 스테인리스 표면보호, 약 3일간 현장 작업',
    material: '스테인리스, 주방 설비',
    siteType: '대형 백화점 (상업시설)',
    scale: '약 3일간 현장 작업',
    challenge: '고급 주방 공간은 스테인리스 소재의 외관 자체가 공간의 품질을 보여줍니다. 보호필름 시공 후에도 마감 품질이 드러나도록 정밀한 작업이 필요했습니다.',
    solution: '고급 소재의 외관과 마감 품질을 고려해 주방 설비와 스테인리스 표면에 보호필름을 정밀 시공했습니다.',
    process: [
      '주방 설비별 시공 범위 확인',
      '스테인리스 표면 세정 및 상태 점검',
      '설비 형태에 맞춘 재단과 부착',
      '마감 상태 확인 후 인계'
    ],
    result: '약 3일간의 현장 작업으로 고급 주방 공간의 스테인리스 표면보호 시공을 마쳤습니다.',
    client: '',
    photos: [],
    beforeAfter: { before: '', after: '' }
  },
  {
    id: 'project-3',
    category: 'Interior & Furniture Protection',
    title: '스테인리스 제작·인테리어 협력 시공',
    summary: '스테인리스 제작업체 및 인테리어 업체와 협력한 주방 상판·고급 소재 보호필름 시공',
    material: '주방 상판, 스테인리스, 고급 마감 소재',
    siteType: '제작 공정 및 인테리어 현장',
    scale: '반복 협력 시공',
    challenge: '제작과 인테리어 공정 사이에서 상판과 고급 소재가 손상되지 않도록 보호해야 하며, 업체마다 다른 소재와 일정에 맞춰야 했습니다.',
    solution: '스테인리스 제작업체, 인테리어 업체와 협력해 주방 상판과 고급 소재에 보호필름을 시공했습니다.',
    process: [
      '협력 업체와 소재·공정 일정 확인',
      '소재별 적합한 보호필름 선택',
      '상판 및 마감 소재 시공',
      '반복 시공을 통한 소재별 작업 기준 정리'
    ],
    result: '반복적인 협력 시공을 통해 소재별 작업 노하우를 축적했습니다.',
    client: '',
    photos: [],
    beforeAfter: { before: '', after: '' }
  },
  {
    id: 'project-4',
    category: 'Re-application',
    title: '기존 보호필름 제거 및 재시공',
    summary: '들뜸 등 기존 보호필름의 시공 품질 문제를 제거 후 재시공으로 해결',
    material: '기존 보호필름이 시공된 마감재',
    siteType: '기존 시공 현장',
    scale: '제거 및 재시공',
    challenge: '기존 보호필름에 들뜸이 생기고 시공 품질에 문제가 있어 보호 기능과 외관이 모두 떨어진 상태였습니다.',
    solution: '기존 필름을 제거하고 표면 상태를 확인한 뒤, 소재에 적합한 보호필름으로 재시공했습니다.',
    process: [
      '기존 필름 제거',
      '표면 상태 확인 및 세정',
      '적합한 보호필름 선정 후 재시공',
      '마감 작업 및 품질 확인'
    ],
    result: '들뜸 문제를 해결하고 완성도 높은 마감으로 재시공을 마쳤습니다.',
    client: '',
    photos: [],
    beforeAfter: { before: '', after: '' }
  }
];
