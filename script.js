const CATEGORY_LABEL = {
  top: '상의',
  bottom: '하의',
  outer: '아우터',
  dress: '원피스',
  shoes: '신발',
  acc: '액세서리',
};

const BODY_TYPE_LABEL = {
  hourglass: '모래시계형',
  rectangle: '직사각형',
  invertedTriangle: '역삼각형',
  triangle: '삼각형',
  round: '둥근형',
};

const SEASON_LABEL = {
  spring: '봄 / 선선함',
  summer: '여름 / 더움',
  fall: '가을 / 쌀쌀함',
  winter: '겨울 / 추움',
};

// 퍼스널 컬러 진단 기준과 팔레트는 웜톤/쿨톤 자가진단 및 4계절 컬러 이론을 참고해 구성
const PERSONAL_COLOR_TYPES = {
  springWarm: {
    label: '봄 웜톤',
    desc: '화사하고 생기 있는 분위기가 어울려요. 카멜, 코랄, 피치, 황금빛 노랑처럼 밝고 따뜻한 컬러가 잘 맞아요.',
    palette: ['#F2B6A0', '#F6C75A', '#E2574C', '#E8A87C', '#FAD9C1'],
    metal: '골드',
  },
  autumnWarm: {
    label: '가을 웜톤',
    desc: '차분하고 깊이감 있는 분위기가 어울려요. 카멜, 와인, 브라운처럼 그윽한 톤이 고급스러운 느낌을 줘요.',
    palette: ['#A86B3C', '#7B2D33', '#5C4632', '#8B5E34', '#C98A4B'],
    metal: '골드',
  },
  summerCool: {
    label: '여름 쿨톤',
    desc: '부드럽고 화사한 분위기가 어울려요. 화이트와 블루를 머금은 파스텔 톤이 자연스럽게 잘 맞아요.',
    palette: ['#F4EFE6', '#C9D6E3', '#D6C9E0', '#E8B4BC', '#A9B8C9'],
    metal: '실버',
  },
  winterCool: {
    label: '겨울 쿨톤',
    desc: '차갑고 시크한 분위기가 어울려요. 선명하고 고대비인 컬러, 블랙과 화이트가 강한 인상을 줘요.',
    palette: ['#1B1B1B', '#0E3B43', '#7B1E3A', '#2C3E50', '#FFFFFF'],
    metal: '실버',
  },
};

// gender: 'female' | 'male' | 'unisex'
// ageGroups: subset of ['teen','twenties','thirties','fortyplus']
// occasions: subset of ['student','office','casual','active','formal']
// seasons: subset of ['spring','summer','fall','winter']
// fitFor: subset of ['hourglass','rectangle','invertedTriangle','triangle','round'] — 참고용 스타일링 팁
const OUTFITS = [
  {
    id: 'f-office-01', gender: 'female', ageGroups: ['twenties', 'thirties'], occasions: ['office'], seasons: ['spring', 'fall'],
    fitFor: ['rectangle', 'invertedTriangle', 'hourglass'], colorMood: 'warm',
    styleTag: '미니멀 오피스', title: '클린 셋업 오피스룩',
    description: '깔끔한 셋업과 베이식 톤으로 신뢰감 있는 인상을 주는 출근룩이에요.',
    items: [
      { category: 'outer', name: '스트레이트 블레이저', color: '#2B2B2B' },
      { category: 'bottom', name: '와이드 슬랙스', color: '#D8C3A5' },
      { category: 'shoes', name: '포인티 로퍼', color: '#5C4632' },
      { category: 'acc', name: '미니 토트백', color: '#7B2D33' },
    ],
    keyword: '여성 미니멀 블레이저 와이드 슬랙스 오피스룩',
  },
  {
    id: 'f-office-02', gender: 'female', ageGroups: ['thirties', 'fortyplus'], occasions: ['office'], seasons: ['winter'],
    fitFor: ['rectangle', 'round', 'hourglass'], colorMood: 'cool',
    styleTag: '클래식 오피스', title: '울 코트 오피스룩',
    description: '울 코트와 니트로 따뜻함과 격식을 동시에 챙긴 겨울 출근룩이에요.',
    items: [
      { category: 'outer', name: '롱 울 코트', color: '#2C3E50' },
      { category: 'top', name: '터틀넥 니트', color: '#EFE9DF' },
      { category: 'bottom', name: '슬림 슬랙스', color: '#1B1B1B' },
      { category: 'shoes', name: '첼시 부츠', color: '#3A2A1E' },
    ],
    keyword: '여성 울코트 터틀넥 슬랙스 겨울 오피스룩',
  },
  {
    id: 'f-office-03', gender: 'female', ageGroups: ['twenties', 'thirties', 'fortyplus'], occasions: ['office'], seasons: ['summer'],
    fitFor: ['triangle', 'round', 'hourglass'], colorMood: 'warm',
    styleTag: '쿨톤 오피스', title: '린넨 셋업 오피스룩',
    description: '시원한 린넨 소재로 더운 날에도 단정함을 유지하는 코디예요.',
    items: [
      { category: 'top', name: '린넨 블라우스', color: '#F4EFE6' },
      { category: 'bottom', name: '린넨 와이드 팬츠', color: '#C9A77C' },
      { category: 'shoes', name: '슬링백 힐', color: '#8B8B8B' },
      { category: 'acc', name: '얇은 골드 목걸이', color: '#C9A227' },
    ],
    keyword: '여성 린넨 블라우스 와이드팬츠 여름 오피스룩',
  },
  {
    id: 'f-student-01', gender: 'female', ageGroups: ['teen', 'twenties'], occasions: ['student'], seasons: ['spring', 'fall'],
    fitFor: ['triangle', 'round', 'hourglass'], colorMood: 'warm',
    styleTag: '캠퍼스 캐주얼', title: '가디건 레이어드 캠퍼스룩',
    description: '가디건과 셔츠를 레이어드해 발랄하면서도 단정한 학교룩이에요.',
    items: [
      { category: 'top', name: '카라 셔츠', color: '#FFFFFF' },
      { category: 'outer', name: '니트 가디건', color: '#9CAA8C' },
      { category: 'bottom', name: '플리츠 스커트', color: '#1B1B1B' },
      { category: 'shoes', name: '메리제인 슈즈', color: '#3A2A1E' },
    ],
    keyword: '여성 가디건 셔츠 플리츠스커트 캠퍼스룩',
  },
  {
    id: 'f-student-02', gender: 'female', ageGroups: ['teen', 'twenties'], occasions: ['student'], seasons: ['winter'],
    fitFor: ['rectangle', 'triangle'], colorMood: 'warm',
    styleTag: '아메카지 캐주얼', title: '오버사이즈 니트 캠퍼스룩',
    description: '포근한 오버사이즈 니트에 데님을 매치한 편안한 등교룩이에요.',
    items: [
      { category: 'top', name: '오버사이즈 니트', color: '#D8C3A5' },
      { category: 'bottom', name: '와이드 데님', color: '#4A6B8A' },
      { category: 'shoes', name: '청키 스니커즈', color: '#FFFFFF' },
      { category: 'acc', name: '버킷햇', color: '#5C4632' },
    ],
    keyword: '여성 오버사이즈 니트 와이드데님 캠퍼스룩',
  },
  {
    id: 'f-casual-01', gender: 'female', ageGroups: ['twenties', 'thirties'], occasions: ['casual'], seasons: ['summer'],
    fitFor: ['rectangle', 'invertedTriangle'], colorMood: 'warm',
    styleTag: '쿨 캐주얼', title: '린넨 셔츠 캐주얼룩',
    description: '가볍고 시원한 린넨 셔츠와 쇼츠로 완성한 산뜻한 데일리룩이에요.',
    items: [
      { category: 'top', name: '오버사이즈 린넨 셔츠', color: '#EFE9DF' },
      { category: 'bottom', name: '와이드 쇼츠', color: '#C9A77C' },
      { category: 'shoes', name: '스트랩 샌들', color: '#5C4632' },
      { category: 'acc', name: '라탄 백', color: '#A9824C' },
    ],
    keyword: '여성 린넨셔츠 와이드쇼츠 여름 캐주얼룩',
  },
  {
    id: 'f-casual-02', gender: 'female', ageGroups: ['thirties', 'fortyplus'], occasions: ['casual'], seasons: ['fall', 'winter'],
    fitFor: ['round', 'rectangle', 'hourglass'], colorMood: 'warm',
    styleTag: '뉴트럴 캐주얼', title: '니트 레이어드 캐주얼룩',
    description: '뉴트럴 톤 니트와 트렌치코트로 차분하면서 세련된 분위기를 내요.',
    items: [
      { category: 'outer', name: '베이지 트렌치코트', color: '#D8C3A5' },
      { category: 'top', name: '크루넥 니트', color: '#8B8B8B' },
      { category: 'bottom', name: '스트레이트 데님', color: '#2C3E50' },
      { category: 'shoes', name: '로퍼', color: '#3A2A1E' },
    ],
    keyword: '여성 트렌치코트 니트 데님 가을 캐주얼룩',
  },
  {
    id: 'f-active-01', gender: 'female', ageGroups: ['teen', 'twenties', 'thirties'], occasions: ['active'], seasons: ['spring', 'fall'],
    fitFor: ['rectangle', 'hourglass', 'triangle'], colorMood: 'cool',
    styleTag: '액티브 스포티', title: '트레이닝 셋업룩',
    description: '움직임이 편한 트레이닝 셋업으로 운동도 멋스럽게 즐길 수 있어요.',
    items: [
      { category: 'top', name: '집업 트레이닝 재킷', color: '#9CAA8C' },
      { category: 'bottom', name: '조거 팬츠', color: '#2B2B2B' },
      { category: 'shoes', name: '러닝 스니커즈', color: '#FFFFFF' },
      { category: 'acc', name: '크로스 스포츠백', color: '#1B1B1B' },
    ],
    keyword: '여성 트레이닝 셋업 조거팬츠 운동룩',
  },
  {
    id: 'f-formal-01', gender: 'female', ageGroups: ['twenties', 'thirties', 'fortyplus'], occasions: ['formal'], seasons: ['spring', 'fall'],
    fitFor: ['hourglass', 'round', 'rectangle'], colorMood: 'warm',
    styleTag: '엘레강스 포멀', title: '원피스 포멀룩',
    description: '차분한 컬러의 원피스 한 장으로 격식 있는 자리에 어울리는 룩이에요.',
    items: [
      { category: 'dress', name: '미디 랩 원피스', color: '#7B2D33' },
      { category: 'shoes', name: '스웨이드 힐', color: '#3A2A1E' },
      { category: 'acc', name: '클러치백', color: '#1B1B1B' },
    ],
    keyword: '여성 랩원피스 포멀룩 행사룩',
  },
  {
    id: 'f-formal-02', gender: 'female', ageGroups: ['thirties', 'fortyplus'], occasions: ['formal'], seasons: ['winter'],
    fitFor: ['rectangle', 'invertedTriangle', 'hourglass'], colorMood: 'warm',
    styleTag: '모던 포멀', title: '벨벳 슈트 포멀룩',
    description: '벨벳 소재 슈트로 고급스러우면서 절제된 분위기를 연출해요.',
    items: [
      { category: 'outer', name: '벨벳 재킷', color: '#3B1F2B' },
      { category: 'bottom', name: '슬림 슬랙스', color: '#1B1B1B' },
      { category: 'shoes', name: '포인티 힐', color: '#1B1B1B' },
      { category: 'acc', name: '진주 이어링', color: '#EFE9DF' },
    ],
    keyword: '여성 벨벳 슈트 포멀룩 겨울 행사룩',
  },

  {
    id: 'm-office-01', gender: 'male', ageGroups: ['twenties', 'thirties'], occasions: ['office'], seasons: ['spring', 'fall'],
    fitFor: ['rectangle', 'triangle', 'hourglass'], colorMood: 'cool',
    styleTag: '모던 오피스', title: '슬랙스 셋업 오피스룩',
    description: '깔끔한 셋업과 단정한 슈즈로 신뢰감을 주는 비즈니스 캐주얼이에요.',
    items: [
      { category: 'outer', name: '울 블렌드 블레이저', color: '#2C3E50' },
      { category: 'top', name: '옥스포드 셔츠', color: '#FFFFFF' },
      { category: 'bottom', name: '테이퍼드 슬랙스', color: '#1B1B1B' },
      { category: 'shoes', name: '더비 슈즈', color: '#5C4632' },
    ],
    keyword: '남성 블레이저 슬랙스 비즈니스캐주얼',
  },
  {
    id: 'm-office-02', gender: 'male', ageGroups: ['thirties', 'fortyplus'], occasions: ['office'], seasons: ['winter'],
    fitFor: ['rectangle', 'round', 'hourglass'], colorMood: 'warm',
    styleTag: '클래식 슈트', title: '울 코트 슈트룩',
    description: '울 코트와 슈트로 격식과 보온을 모두 챙긴 겨울 출근룩이에요.',
    items: [
      { category: 'outer', name: '체스터필드 코트', color: '#3A3A3A' },
      { category: 'top', name: '니트 베스트', color: '#5C4632' },
      { category: 'bottom', name: '슈트 슬랙스', color: '#1B1B1B' },
      { category: 'shoes', name: '옥스포드 슈즈', color: '#2B1B12' },
    ],
    keyword: '남성 체스터필드코트 슈트 겨울 오피스룩',
  },
  {
    id: 'm-office-03', gender: 'male', ageGroups: ['twenties', 'thirties', 'fortyplus'], occasions: ['office'], seasons: ['summer'],
    fitFor: ['triangle', 'round'], colorMood: 'warm',
    styleTag: '쿨 비즈', title: '린넨 셋업 오피스룩',
    description: '린넨 셋업으로 더운 날씨에도 산뜻하고 단정한 인상을 유지해요.',
    items: [
      { category: 'top', name: '린넨 셔츠', color: '#EFE9DF' },
      { category: 'bottom', name: '린넨 슬랙스', color: '#C9A77C' },
      { category: 'shoes', name: '로퍼', color: '#5C4632' },
      { category: 'acc', name: '레더 벨트', color: '#3A2A1E' },
    ],
    keyword: '남성 린넨셔츠 린넨슬랙스 여름 오피스룩',
  },
  {
    id: 'm-student-01', gender: 'male', ageGroups: ['teen', 'twenties'], occasions: ['student'], seasons: ['spring', 'fall'],
    fitFor: ['rectangle', 'triangle'], colorMood: 'warm',
    styleTag: '스트릿 캠퍼스', title: '후드 레이어드 캠퍼스룩',
    description: '후드와 셔츠를 레이어드한 편안하고 트렌디한 학교룩이에요.',
    items: [
      { category: 'top', name: '오버사이즈 후드티', color: '#8B8B8B' },
      { category: 'outer', name: '체크 셔츠', color: '#5C4632' },
      { category: 'bottom', name: '와이드 카고팬츠', color: '#6B6B4D' },
      { category: 'shoes', name: '청키 스니커즈', color: '#FFFFFF' },
    ],
    keyword: '남성 후드티 체크셔츠 카고팬츠 캠퍼스룩',
  },
  {
    id: 'm-student-02', gender: 'male', ageGroups: ['teen', 'twenties'], occasions: ['student'], seasons: ['winter'],
    fitFor: ['rectangle', 'round'], colorMood: 'warm',
    styleTag: '아메카지 캐주얼', title: '패딩 레이어드 캠퍼스룩',
    description: '숏 패딩과 니트로 따뜻하면서 균형 잡힌 핏을 완성한 코디예요.',
    items: [
      { category: 'outer', name: '숏 패딩', color: '#2C3E50' },
      { category: 'top', name: '크루넥 니트', color: '#D8C3A5' },
      { category: 'bottom', name: '스트레이트 데님', color: '#1B1B1B' },
      { category: 'shoes', name: '워커', color: '#3A2A1E' },
    ],
    keyword: '남성 숏패딩 니트 데님 겨울 캠퍼스룩',
  },
  {
    id: 'm-casual-01', gender: 'male', ageGroups: ['twenties', 'thirties'], occasions: ['casual'], seasons: ['summer'],
    fitFor: ['rectangle', 'invertedTriangle'], colorMood: 'warm',
    styleTag: '미니멀 캐주얼', title: '반팔 셋업 캐주얼룩',
    description: '톤온톤 반팔 셋업으로 힘 빼고 멋스러운 여름 데일리룩이에요.',
    items: [
      { category: 'top', name: '피그먼트 반팔티', color: '#8B8B8B' },
      { category: 'bottom', name: '와이드 쇼츠', color: '#6B6B4D' },
      { category: 'shoes', name: '캔버스 스니커즈', color: '#EFE9DF' },
      { category: 'acc', name: '버킷햇', color: '#1B1B1B' },
    ],
    keyword: '남성 반팔티 와이드쇼츠 여름 캐주얼룩',
  },
  {
    id: 'm-casual-02', gender: 'male', ageGroups: ['thirties', 'fortyplus'], occasions: ['casual'], seasons: ['fall', 'winter'],
    fitFor: ['round', 'rectangle'], colorMood: 'warm',
    styleTag: '뉴트럴 캐주얼', title: '오버셔츠 레이어드룩',
    description: '오버셔츠와 니트를 겹쳐 입어 따뜻하고 차분한 분위기를 내요.',
    items: [
      { category: 'outer', name: '울 오버셔츠 재킷', color: '#5C4632' },
      { category: 'top', name: '하프넥 니트', color: '#D8C3A5' },
      { category: 'bottom', name: '코듀로이 팬츠', color: '#6B4F3A' },
      { category: 'shoes', name: '데저트 부츠', color: '#3A2A1E' },
    ],
    keyword: '남성 오버셔츠 니트 코듀로이팬츠 가을 캐주얼룩',
  },
  {
    id: 'm-active-01', gender: 'male', ageGroups: ['teen', 'twenties', 'thirties'], occasions: ['active'], seasons: ['spring', 'fall'],
    fitFor: ['rectangle', 'hourglass', 'triangle'], colorMood: 'cool',
    styleTag: '액티브 스포티', title: '트레이닝 셋업룩',
    description: '기능성 트레이닝 셋업으로 활동성과 스타일을 동시에 챙겨요.',
    items: [
      { category: 'top', name: '집업 트랙 재킷', color: '#2C3E50' },
      { category: 'bottom', name: '트랙 팬츠', color: '#1B1B1B' },
      { category: 'shoes', name: '러닝 스니커즈', color: '#FFFFFF' },
      { category: 'acc', name: '스포츠 백팩', color: '#2B2B2B' },
    ],
    keyword: '남성 트레이닝 셋업 트랙팬츠 운동룩',
  },
  {
    id: 'm-formal-01', gender: 'male', ageGroups: ['twenties', 'thirties', 'fortyplus'], occasions: ['formal'], seasons: ['spring', 'fall', 'winter'],
    fitFor: ['rectangle', 'triangle', 'hourglass'], colorMood: 'cool',
    styleTag: '클래식 포멀', title: '네이비 슈트 포멀룩',
    description: '네이비 슈트와 가죽 슈즈로 격식 있는 자리에 잘 어울리는 룩이에요.',
    items: [
      { category: 'outer', name: '네이비 슈트 재킷', color: '#2C3E50' },
      { category: 'bottom', name: '슈트 슬랙스', color: '#2C3E50' },
      { category: 'shoes', name: '옥스포드 슈즈', color: '#2B1B12' },
      { category: 'acc', name: '실크 타이', color: '#7B2D33' },
    ],
    keyword: '남성 네이비 슈트 포멀룩 행사룩',
  },

  {
    id: 'u-casual-01', gender: 'unisex', ageGroups: ['teen', 'twenties', 'thirties', 'fortyplus'], occasions: ['casual'], seasons: ['spring', 'fall'],
    fitFor: ['rectangle', 'triangle'], colorMood: 'cool',
    styleTag: '데일리 미니멀', title: '맨투맨 데님 데일리룩',
    description: '베이식한 맨투맨과 데님으로 누구나 편하게 소화할 수 있는 코디예요.',
    items: [
      { category: 'top', name: '크루넥 맨투맨', color: '#8B8B8B' },
      { category: 'bottom', name: '스트레이트 데님', color: '#4A6B8A' },
      { category: 'shoes', name: '화이트 스니커즈', color: '#FFFFFF' },
    ],
    keyword: '맨투맨 데님 데일리룩',
  },
  {
    id: 'u-casual-02', gender: 'unisex', ageGroups: ['twenties', 'thirties', 'fortyplus'], occasions: ['casual'], seasons: ['summer'],
    fitFor: ['rectangle', 'invertedTriangle'], colorMood: 'warm',
    styleTag: '쿨 캐주얼', title: '반팔 카고 캐주얼룩',
    description: '가벼운 반팔과 카고팬츠로 시원하게 즐기는 여름 데일리룩이에요.',
    items: [
      { category: 'top', name: '피그먼트 반팔티', color: '#D8C3A5' },
      { category: 'bottom', name: '카고 팬츠', color: '#6B6B4D' },
      { category: 'shoes', name: '캔버스 스니커즈', color: '#EFE9DF' },
    ],
    keyword: '반팔티 카고팬츠 여름 캐주얼룩',
  },
  {
    id: 'u-casual-03', gender: 'unisex', ageGroups: ['teen', 'twenties'], occasions: ['casual'], seasons: ['winter'],
    fitFor: ['round', 'rectangle'], colorMood: 'warm',
    styleTag: '스트릿 캐주얼', title: '플리스 레이어드룩',
    description: '플리스와 후드를 겹쳐 입어 캐주얼하면서 따뜻한 겨울 코디예요.',
    items: [
      { category: 'outer', name: '플리스 재킷', color: '#5C4632' },
      { category: 'top', name: '후드티', color: '#2B2B2B' },
      { category: 'bottom', name: '와이드 데님', color: '#1B1B1B' },
      { category: 'shoes', name: '워커', color: '#3A2A1E' },
    ],
    keyword: '플리스 후드티 와이드데님 겨울 캐주얼룩',
  },
  {
    id: 'u-student-01', gender: 'unisex', ageGroups: ['teen', 'twenties'], occasions: ['student'], seasons: ['spring', 'fall'],
    fitFor: ['rectangle', 'triangle'], colorMood: 'warm',
    styleTag: '캠퍼스 캐주얼', title: '셋업 후드 캠퍼스룩',
    description: '편안한 후드 셋업으로 캠퍼스에서 활동하기 좋은 코디예요.',
    items: [
      { category: 'top', name: '후드 집업', color: '#9CAA8C' },
      { category: 'bottom', name: '조거 팬츠', color: '#9CAA8C' },
      { category: 'shoes', name: '러닝 스니커즈', color: '#FFFFFF' },
    ],
    keyword: '후드집업 조거팬츠 셋업 캠퍼스룩',
  },
  {
    id: 'u-active-01', gender: 'unisex', ageGroups: ['teen', 'twenties', 'thirties', 'fortyplus'], occasions: ['active'], seasons: ['summer'],
    fitFor: ['rectangle', 'hourglass'], colorMood: 'cool',
    styleTag: '액티브 스포티', title: '메쉬 트레이닝룩',
    description: '통풍이 좋은 메쉬 소재로 더운 날 운동에도 쾌적한 코디예요.',
    items: [
      { category: 'top', name: '메쉬 반팔 티셔츠', color: '#EFE9DF' },
      { category: 'bottom', name: '트레이닝 쇼츠', color: '#2B2B2B' },
      { category: 'shoes', name: '러닝 스니커즈', color: '#9CAA8C' },
    ],
    keyword: '메쉬 트레이닝 반팔 쇼츠 운동룩',
  },
  {
    id: 'u-active-02', gender: 'unisex', ageGroups: ['twenties', 'thirties', 'fortyplus'], occasions: ['active'], seasons: ['winter'],
    fitFor: ['round', 'rectangle'], colorMood: 'cool',
    styleTag: '액티브 스포티', title: '윈드브레이커 트레이닝룩',
    description: '바람을 막아주는 윈드브레이커로 추운 날씨 운동에도 좋은 코디예요.',
    items: [
      { category: 'outer', name: '윈드브레이커', color: '#2C3E50' },
      { category: 'bottom', name: '기모 트랙 팬츠', color: '#1B1B1B' },
      { category: 'shoes', name: '트레일 러닝화', color: '#5C4632' },
    ],
    keyword: '윈드브레이커 기모트랙팬츠 겨울 운동룩',
  },
  {
    id: 'u-formal-01', gender: 'unisex', ageGroups: ['twenties', 'thirties', 'fortyplus'], occasions: ['formal'], seasons: ['spring', 'fall'],
    fitFor: ['rectangle', 'invertedTriangle', 'hourglass'], colorMood: 'warm',
    styleTag: '모던 포멀', title: '뉴트럴 셋업 포멀룩',
    description: '톤온톤 뉴트럴 셋업으로 성별에 관계없이 단정한 자리에 어울려요.',
    items: [
      { category: 'outer', name: '뉴트럴 재킷', color: '#D8C3A5' },
      { category: 'bottom', name: '스트레이트 슬랙스', color: '#D8C3A5' },
      { category: 'shoes', name: '로퍼', color: '#3A2A1E' },
    ],
    keyword: '뉴트럴 셋업 슬랙스 포멀룩',
  },
  {
    id: 'u-office-01', gender: 'unisex', ageGroups: ['twenties', 'thirties', 'fortyplus'], occasions: ['office'], seasons: ['fall', 'winter'],
    fitFor: ['triangle', 'round', 'hourglass'], colorMood: 'cool',
    styleTag: '모던 오피스', title: '가디건 셋업 오피스룩',
    description: '니트 가디건과 슬랙스로 부드럽지만 단정한 인상을 주는 출근룩이에요.',
    items: [
      { category: 'outer', name: '니트 가디건', color: '#8B8B8B' },
      { category: 'top', name: '셔츠', color: '#FFFFFF' },
      { category: 'bottom', name: '스트레이트 슬랙스', color: '#1B1B1B' },
      { category: 'shoes', name: '로퍼', color: '#5C4632' },
    ],
    keyword: '가디건 셔츠 슬랙스 오피스룩',
  },

  // 2026 트렌드 코디 — 보그 코리아·무신사·WhoWhatWear 등 트렌드 리포트를 참고해 구성
  {
    id: 't-stripe-01', gender: 'female', ageGroups: ['teen', 'twenties', 'thirties'], occasions: ['casual', 'student'], seasons: ['summer'],
    fitFor: ['rectangle', 'invertedTriangle'], colorMood: 'cool', trend: true,
    trendNote: '2026 S/S 런웨이에서 두드러진, 굵기를 믹스한 스트라이프 무드',
    styleTag: '믹스 스트라이프', title: '믹스 스트라이프 캐주얼룩',
    description: '서로 다른 굵기의 스트라이프를 매치해 리듬감을 살린 2026년 트렌드 코디예요.',
    items: [
      { category: 'top', name: '믹스 스트라이프 셔츠', color: '#2C3E50' },
      { category: 'bottom', name: '와이드 데님', color: '#4A6B8A' },
      { category: 'shoes', name: '화이트 스니커즈', color: '#FFFFFF' },
      { category: 'acc', name: '청키 비즈 목걸이', color: '#E8B4BC' },
    ],
    keyword: '여성 스트라이프 셔츠 와이드데님 2026 트렌드룩',
  },
  {
    id: 't-balloon-01', gender: 'unisex', ageGroups: ['teen', 'twenties', 'thirties'], occasions: ['casual'], seasons: ['summer'],
    fitFor: ['invertedTriangle', 'rectangle'], colorMood: 'warm', trend: true,
    trendNote: '2026년 런웨이와 리얼웨이를 동시에 장악한 벌룬 팬츠 실루엣',
    styleTag: '벌룬 팬츠', title: '벌룬 팬츠 캐주얼룩',
    description: '바람을 머금은 듯 부푼 실루엣의 벌룬 팬츠로 완성한 화제의 트렌드 코디예요.',
    items: [
      { category: 'top', name: '크롭 니트', color: '#EFE9DF' },
      { category: 'bottom', name: '벌룬 팬츠', color: '#C9A77C' },
      { category: 'shoes', name: '청키 스니커즈', color: '#FFFFFF' },
    ],
    keyword: '벌룬팬츠 캐주얼룩 2026 트렌드',
  },
  {
    id: 't-pink-01', gender: 'female', ageGroups: ['twenties', 'thirties'], occasions: ['casual'], seasons: ['summer'],
    fitFor: ['hourglass', 'round', 'triangle'], colorMood: 'warm', trend: true,
    trendNote: "2026 S/S 컬러 트렌드 1위로 꼽힌 소프트 핑크",
    styleTag: '소프트 핑크', title: '파스텔 핑크 무드룩',
    description: '은은한 파스텔 핑크 톤으로 포인트를 준 2026년 컬러 트렌드 코디예요.',
    items: [
      { category: 'top', name: '파스텔 핑크 니트', color: '#E8B4BC' },
      { category: 'bottom', name: '화이트 와이드 팬츠', color: '#F4EFE6' },
      { category: 'shoes', name: '화이트 스니커즈', color: '#FFFFFF' },
      { category: 'acc', name: '골드 이어링', color: '#C9A227' },
    ],
    keyword: '여성 파스텔 핑크 니트 화이트팬츠 2026 트렌드룩',
  },
  {
    id: 't-denim-01', gender: 'male', ageGroups: ['teen', 'twenties', 'thirties'], occasions: ['casual'], seasons: ['summer'],
    fitFor: ['rectangle', 'triangle'], colorMood: 'cool', trend: true,
    trendNote: '70년대 무드를 재해석한 2026년 디스트로이드 데님 트렌드',
    styleTag: '디스트로이드 데님', title: '디스트로이드 데님 캐주얼룩',
    description: '빈티지한 디스트로이드 데님으로 완성한 70년대 무드의 캐주얼룩이에요.',
    items: [
      { category: 'top', name: '화이트 반팔티', color: '#FFFFFF' },
      { category: 'bottom', name: '디스트로이드 데님', color: '#5C7A9A' },
      { category: 'shoes', name: '캔버스 스니커즈', color: '#EFE9DF' },
    ],
    keyword: '남성 디스트로이드 데님 반팔티 2026 트렌드룩',
  },
  {
    id: 't-eggplant-01', gender: 'female', ageGroups: ['twenties', 'thirties', 'fortyplus'], occasions: ['office'], seasons: ['fall'],
    fitFor: ['rectangle', 'invertedTriangle', 'hourglass'], colorMood: 'warm', trend: true,
    trendNote: "2026 가을 대표 컬러로 꼽힌 '가지색(에그플랜트)'을 활용한 오피스룩",
    styleTag: '가지색 무드', title: '가지색 블레이저 오피스룩',
    description: '짙은 가지색 블레이저로 가을 시즌 컬러 트렌드를 담은 오피스룩이에요.',
    items: [
      { category: 'outer', name: '가지색 블레이저', color: '#4B2A45' },
      { category: 'top', name: '화이트 셔츠', color: '#FFFFFF' },
      { category: 'bottom', name: '슬림 슬랙스', color: '#1B1B1B' },
      { category: 'shoes', name: '로퍼', color: '#3A2A1E' },
    ],
    keyword: '여성 가지색 블레이저 오피스룩 2026 트렌드',
  },
  {
    id: 't-shoulder-01', gender: 'unisex', ageGroups: ['twenties', 'thirties', 'fortyplus'], occasions: ['office', 'formal'], seasons: ['fall'],
    fitFor: ['rectangle', 'triangle'], colorMood: 'cool', trend: true,
    trendNote: '잘록한 허리와 과감해진 숄더라인이 돋아나는 2026 가을 1980년대 무드 트렌드',
    styleTag: '80s 숄더라인', title: '숄더패드 블레이저룩',
    description: '강조된 숄더라인의 블레이저로 80년대 무드를 재해석한 트렌드 코디예요.',
    items: [
      { category: 'outer', name: '숄더패드 블레이저', color: '#2C3E50' },
      { category: 'top', name: '터틀넥', color: '#1B1B1B' },
      { category: 'bottom', name: '슬림 슬랙스', color: '#1B1B1B' },
      { category: 'shoes', name: '첼시 부츠', color: '#3A2A1E' },
    ],
    keyword: '숄더패드 블레이저 80년대 무드 2026 트렌드룩',
  },
  {
    id: 't-texture-01', gender: 'female', ageGroups: ['twenties', 'thirties'], occasions: ['casual', 'formal'], seasons: ['fall'],
    fitFor: ['hourglass', 'round'], colorMood: 'warm', trend: true,
    trendNote: '벨벳과 레더를 매치하는 2026 가을 텍스처 레이어링 트렌드',
    styleTag: '텍스처 레이어드', title: '벨벳 레더 레이어드룩',
    description: '벨벳과 레더 소재를 함께 매치해 깊이감을 더한 가을 트렌드 코디예요.',
    items: [
      { category: 'top', name: '벨벳 톱', color: '#5C2A3A' },
      { category: 'bottom', name: '레더 스커트', color: '#1B1B1B' },
      { category: 'shoes', name: '앵클 부츠', color: '#2B1B12' },
      { category: 'acc', name: '스테이트먼트 이어링', color: '#C9A227' },
    ],
    keyword: '여성 벨벳 레더 스커트 2026 가을 트렌드룩',
  },
  {
    id: 't-allblack-01', gender: 'unisex', ageGroups: ['twenties', 'thirties', 'fortyplus'], occasions: ['office', 'formal'], seasons: ['fall', 'winter'],
    fitFor: ['hourglass', 'round', 'rectangle'], colorMood: 'cool', trend: true,
    trendNote: '밀라노 런웨이를 장악한 2026 가을 올블랙 파워룩 트렌드',
    styleTag: '올블랙 파워룩', title: '올블랙 파워 슈트룩',
    description: '강렬한 무채색 올블랙 셋업으로 완성한 파워풀한 트렌드 코디예요.',
    items: [
      { category: 'outer', name: '블랙 슈트 재킷', color: '#1B1B1B' },
      { category: 'top', name: '블랙 셔츠', color: '#1B1B1B' },
      { category: 'bottom', name: '블랙 슬랙스', color: '#1B1B1B' },
      { category: 'shoes', name: '블랙 더비 슈즈', color: '#1B1B1B' },
    ],
    keyword: '올블랙 슈트 파워룩 2026 트렌드',
  },
];

// 모듈형 아이템 풀 — 슬롯별로 조합해 한 사람당 200가지 이상의 코디를 생성하기 위한 데이터
function it(name, category, color, gender, ageGroups, occasions, seasons, colorMood, fitFor, fit) {
  return { name, category, color, gender, ageGroups, occasions, seasons, colorMood, fitFor: fitFor || [], fit: fit || 'regular' };
}
const AG = { teen: ['teen'], y: ['twenties'], ym: ['twenties', 'thirties'], ymo: ['twenties', 'thirties', 'fortyplus'], all: ['teen', 'twenties', 'thirties', 'fortyplus'], mo: ['thirties', 'fortyplus'] };

const TOPS = [
  it('옥스포드 셔츠', 'top', '#FFFFFF', 'female', AG.ym, ['office', 'casual'], ['spring', 'fall'], 'cool', ['rectangle', 'triangle'], 'regular'),
  it('실크 블라우스', 'top', '#F4EFE6', 'female', AG.ymo, ['office', 'formal'], ['spring', 'fall', 'summer'], 'warm', ['hourglass', 'round'], 'fitted'),
  it('크롭 니트', 'top', '#E8B4BC', 'female', AG.teen.concat(AG.y), ['casual', 'student'], ['fall', 'winter'], 'warm', ['hourglass', 'triangle'], 'fitted'),
  it('터틀넥 니트', 'top', '#1B1B1B', 'unisex', AG.ymo, ['office', 'casual'], ['fall', 'winter'], 'cool', ['rectangle', 'round'], 'regular'),
  it('오버사이즈 후드티', 'top', '#8B8B8B', 'unisex', AG.teen.concat(AG.y), ['casual', 'student'], ['spring', 'fall', 'winter'], 'cool', ['rectangle', 'triangle'], 'relaxed'),
  it('피그먼트 반팔티', 'top', '#D8C3A5', 'unisex', AG.all, ['casual', 'active'], ['summer'], 'warm', ['rectangle', 'invertedTriangle'], 'relaxed'),
  it('린넨 셔츠', 'top', '#EFE9DF', 'male', AG.ymo, ['office', 'casual'], ['summer'], 'warm', ['triangle', 'round'], 'regular'),
  it('메쉬 트레이닝 티', 'top', '#EFE9DF', 'unisex', AG.all, ['active'], ['summer'], 'cool', ['rectangle', 'hourglass'], 'fitted'),
  it('니트 가디건', 'top', '#9CAA8C', 'female', AG.ymo, ['office', 'casual'], ['spring', 'fall'], 'warm', ['triangle', 'round', 'hourglass'], 'relaxed'),
  it('베이직 맨투맨', 'top', '#8B8B8B', 'unisex', AG.all, ['casual', 'student'], ['spring', 'fall'], 'cool', ['rectangle', 'triangle'], 'relaxed'),
  it('카라 폴로 셔츠', 'top', '#2C3E50', 'male', AG.ym, ['casual', 'office'], ['spring', 'summer'], 'cool', ['rectangle', 'triangle'], 'regular'),
  it('스트라이프 셔츠', 'top', '#2C3E50', 'female', AG.ym, ['casual', 'student'], ['summer', 'spring'], 'cool', ['rectangle', 'invertedTriangle'], 'regular'),
  it('니트 베스트', 'top', '#5C4632', 'male', AG.mo, ['office', 'casual'], ['fall', 'winter'], 'warm', ['rectangle', 'round'], 'fitted'),
  it('캐미솔 탑', 'top', '#F2D9C4', 'female', AG.ym, ['casual', 'formal'], ['summer'], 'warm', ['hourglass', 'round'], 'fitted'),
];

const OUTERS = [
  it('가죽 재킷', 'outer', '#2B2B2B', 'unisex', AG.ym, ['casual'], ['fall', 'winter', 'spring'], 'cool', ['rectangle', 'invertedTriangle'], 'fitted'),
  it('스트레이트 블레이저', 'outer', '#2B2B2B', 'female', AG.ymo, ['office', 'formal'], ['spring', 'fall'], 'warm', ['rectangle', 'invertedTriangle', 'hourglass'], 'fitted'),
  it('울 블렌드 블레이저', 'outer', '#2C3E50', 'male', AG.ymo, ['office', 'formal'], ['spring', 'fall'], 'cool', ['rectangle', 'triangle', 'hourglass'], 'fitted'),
  it('롱 울 코트', 'outer', '#2C3E50', 'unisex', AG.ymo, ['office', 'formal', 'casual'], ['winter'], 'cool', ['rectangle', 'round', 'hourglass'], 'regular'),
  it('트렌치코트', 'outer', '#D8C3A5', 'female', AG.ymo, ['casual', 'office'], ['spring', 'fall'], 'warm', ['round', 'rectangle', 'hourglass'], 'regular'),
  it('숏 패딩', 'outer', '#2C3E50', 'unisex', AG.teen.concat(AG.ym), ['casual', 'student'], ['winter'], 'warm', ['rectangle', 'round'], 'relaxed'),
  it('롱 패딩', 'outer', '#1B1B1B', 'unisex', AG.ymo, ['casual'], ['winter'], 'cool', ['rectangle', 'round'], 'relaxed'),
  it('니트 가디건', 'outer', '#8B8B8B', 'female', AG.ymo, ['office', 'casual', 'student'], ['spring', 'fall'], 'warm', ['triangle', 'round', 'hourglass'], 'relaxed'),
  it('데님 재킷', 'outer', '#4A6B8A', 'unisex', AG.teen.concat(AG.ym), ['casual', 'student'], ['spring', 'fall'], 'cool', ['rectangle', 'triangle'], 'regular'),
  it('윈드브레이커', 'outer', '#2C3E50', 'unisex', AG.ymo, ['active'], ['spring', 'fall', 'winter'], 'cool', ['rectangle', 'round'], 'relaxed'),
  it('플리스 재킷', 'outer', '#5C4632', 'unisex', AG.teen.concat(AG.y), ['casual', 'active'], ['fall', 'winter'], 'warm', ['round', 'rectangle'], 'relaxed'),
  it('체스터필드 코트', 'outer', '#3A3A3A', 'male', AG.mo, ['office', 'formal'], ['winter'], 'warm', ['rectangle', 'round', 'hourglass'], 'regular'),
];

const BOTTOMS = [
  it('와이드 슬랙스', 'bottom', '#D8C3A5', 'female', AG.ymo, ['office', 'formal'], ['spring', 'fall'], 'warm', ['rectangle', 'invertedTriangle', 'hourglass'], 'relaxed'),
  it('테이퍼드 슬랙스', 'bottom', '#1B1B1B', 'male', AG.ymo, ['office', 'formal'], ['spring', 'fall'], 'cool', ['rectangle', 'triangle', 'hourglass'], 'fitted'),
  it('스트레이트 데님', 'bottom', '#2C3E50', 'unisex', AG.teen.concat(AG.ym), ['casual', 'student'], ['spring', 'fall'], 'cool', ['rectangle', 'triangle'], 'regular'),
  it('와이드 데님', 'bottom', '#4A6B8A', 'unisex', AG.teen.concat(AG.ym), ['casual', 'student'], ['fall', 'winter'], 'warm', ['rectangle', 'triangle'], 'relaxed'),
  it('벌룬 팬츠', 'bottom', '#C9A77C', 'unisex', AG.teen.concat(AG.ym), ['casual'], ['summer', 'spring'], 'warm', ['invertedTriangle', 'rectangle'], 'relaxed'),
  it('와이드 쇼츠', 'bottom', '#6B6B4D', 'unisex', AG.all, ['casual', 'active'], ['summer'], 'warm', ['rectangle', 'invertedTriangle'], 'relaxed'),
  it('카고 팬츠', 'bottom', '#6B6B4D', 'unisex', AG.teen.concat(AG.y), ['casual', 'student'], ['spring', 'fall'], 'warm', ['rectangle', 'triangle'], 'relaxed'),
  it('조거 팬츠', 'bottom', '#1B1B1B', 'unisex', AG.teen.concat(AG.ym), ['active', 'casual'], ['spring', 'fall', 'winter'], 'cool', ['rectangle', 'hourglass', 'triangle'], 'relaxed'),
  it('플리츠 스커트', 'bottom', '#1B1B1B', 'female', AG.teen.concat(AG.y), ['student', 'casual'], ['spring', 'fall'], 'warm', ['triangle', 'round', 'hourglass'], 'regular'),
  it('미디 H라인 스커트', 'bottom', '#1B1B1B', 'female', AG.ymo, ['office', 'formal'], ['spring', 'fall'], 'cool', ['rectangle', 'hourglass'], 'fitted'),
  it('레더 스커트', 'bottom', '#1B1B1B', 'female', AG.ym, ['casual', 'formal'], ['fall', 'winter'], 'warm', ['hourglass', 'round'], 'fitted'),
  it('슈트 슬랙스', 'bottom', '#2C3E50', 'male', AG.ymo, ['formal', 'office'], ['spring', 'fall', 'winter'], 'cool', ['rectangle', 'triangle', 'hourglass'], 'fitted'),
  it('코듀로이 팬츠', 'bottom', '#6B4F3A', 'male', AG.mo, ['casual'], ['fall', 'winter'], 'warm', ['round', 'rectangle'], 'regular'),
  it('트레이닝 쇼츠', 'bottom', '#2B2B2B', 'unisex', AG.teen.concat(AG.ym), ['active'], ['summer'], 'cool', ['rectangle', 'hourglass'], 'fitted'),
];

const SHOES = [
  it('포인티 로퍼', 'shoes', '#5C4632', 'female', AG.ymo, ['office', 'formal', 'casual'], ['spring', 'fall'], 'warm', [], 'regular'),
  it('더비 슈즈', 'shoes', '#5C4632', 'male', AG.ymo, ['office', 'formal'], ['spring', 'fall', 'winter'], 'cool', [], 'regular'),
  it('첼시 부츠', 'shoes', '#3A2A1E', 'unisex', AG.ym, ['casual', 'office'], ['fall', 'winter'], 'cool', [], 'regular'),
  it('화이트 스니커즈', 'shoes', '#FFFFFF', 'unisex', AG.teen.concat(AG.ym), ['casual', 'student', 'active'], ['spring', 'fall', 'summer'], 'cool', [], 'regular'),
  it('청키 스니커즈', 'shoes', '#FFFFFF', 'unisex', AG.teen.concat(AG.y), ['casual', 'student'], ['spring', 'fall', 'winter'], 'warm', [], 'relaxed'),
  it('슬링백 힐', 'shoes', '#8B8B8B', 'female', AG.ym, ['office', 'formal'], ['summer', 'spring'], 'warm', [], 'fitted'),
  it('스웨이드 힐', 'shoes', '#3A2A1E', 'female', AG.ymo, ['formal'], ['fall', 'winter'], 'warm', [], 'fitted'),
  it('워커', 'shoes', '#3A2A1E', 'unisex', AG.teen.concat(AG.ym), ['casual'], ['fall', 'winter'], 'warm', [], 'regular'),
  it('스트랩 샌들', 'shoes', '#5C4632', 'female', AG.ym, ['casual'], ['summer'], 'warm', [], 'regular'),
  it('러닝 스니커즈', 'shoes', '#FFFFFF', 'unisex', AG.all, ['active'], ['spring', 'fall', 'summer'], 'cool', [], 'regular'),
];

const ACC = [
  it('미니 토트백', 'acc', '#7B2D33', 'female', AG.ymo, ['office', 'casual'], ['spring', 'fall', 'summer', 'winter'], 'warm', [], 'regular'),
  it('클러치백', 'acc', '#1B1B1B', 'female', AG.ymo, ['formal'], ['spring', 'fall', 'summer', 'winter'], 'warm', [], 'regular'),
  it('레더 벨트', 'acc', '#3A2A1E', 'male', AG.ymo, ['office', 'casual'], ['spring', 'fall', 'summer', 'winter'], 'warm', [], 'regular'),
  it('실크 타이', 'acc', '#7B2D33', 'male', AG.ymo, ['formal'], ['spring', 'fall', 'summer', 'winter'], 'cool', [], 'regular'),
  it('골드 이어링', 'acc', '#C9A227', 'female', AG.ym, ['office', 'casual', 'formal'], ['spring', 'fall', 'summer', 'winter'], 'warm', [], 'regular'),
  it('버킷햇', 'acc', '#5C4632', 'unisex', AG.teen.concat(AG.y), ['casual', 'student'], ['spring', 'fall', 'summer'], 'warm', [], 'regular'),
  it('크로스 스포츠백', 'acc', '#1B1B1B', 'unisex', AG.teen.concat(AG.ym), ['active'], ['spring', 'fall', 'summer', 'winter'], 'cool', [], 'regular'),
  it('청키 비즈 목걸이', 'acc', '#E8B4BC', 'female', AG.teen.concat(AG.ym), ['casual'], ['summer', 'spring'], 'cool', [], 'regular'),
];

const ITEM_POOLS = { top: TOPS, outer: OUTERS, bottom: BOTTOMS, shoes: SHOES, acc: ACC };

const SHOP_SITES = [
  { name: '네이버 쇼핑', urlTemplate: 'https://search.shopping.naver.com/search/all?query={q}' },
  { name: '무신사', urlTemplate: 'https://www.musinsa.com/search/musinsa/integration?q={q}' },
  { name: '지그재그', urlTemplate: 'https://zigzag.kr/search?keyword={q}' },
  { name: '29CM', urlTemplate: 'https://www.29cm.co.kr/search?q={q}' },
];

function buildShopLinks(keyword) {
  const encoded = encodeURIComponent(keyword);
  return SHOP_SITES.map((site) => ({
    name: site.name,
    url: site.urlTemplate.replace('{q}', encoded),
  }));
}

function matchesGender(outfit, selectedGender) {
  if (selectedGender === 'unisex') return true;
  return outfit.gender === 'unisex' || outfit.gender === selectedGender;
}

function scoreOutfit(outfit, selection) {
  let score = 0;
  if (outfit.ageGroups.includes(selection.age)) score += 3;
  if (outfit.occasions.includes(selection.occasion)) score += 4;
  if (outfit.seasons.includes(selection.season)) score += 4;
  if (selection.bodyType && selection.bodyType !== 'none' && outfit.fitFor.includes(selection.bodyType)) score += 3;
  if (selection.personalColorGroup && outfit.colorMood === selection.personalColorGroup) score += 2;
  score += Math.random() * 1.5;
  return score;
}

function scoreItem(item, selection) {
  let score = 0;
  if (item.ageGroups.includes(selection.age)) score += 3;
  if (item.occasions.includes(selection.occasion)) score += 4;
  if (item.seasons.includes(selection.season)) score += 4;
  if (selection.bodyType && selection.bodyType !== 'none' && item.fitFor.includes(selection.bodyType)) score += 3;
  if (selection.personalColorGroup && item.colorMood === selection.personalColorGroup) score += 2;
  const fitPref = fitPreferenceFrom(selection.height, selection.weight);
  if (fitPref && item.fit === fitPref) score += 2;
  score += Math.random() * 1.5;
  return score;
}

function poolFor(selection, category) {
  return ITEM_POOLS[category].filter((it2) => matchesGender(it2, selection.gender));
}

function rankPool(selection, category) {
  return poolFor(selection, category)
    .map((item) => ({ item, score: scoreItem(item, selection) }))
    .sort((a, b) => b.score - a.score);
}

function countPossibleCombos(selection) {
  const tops = poolFor(selection, 'top').length;
  const bottoms = poolFor(selection, 'bottom').length;
  const shoes = poolFor(selection, 'shoes').length;
  const outers = poolFor(selection, 'outer').length + 1;
  const accs = poolFor(selection, 'acc').length + 1;
  return tops * bottoms * shoes * outers * accs;
}

const STYLE_TAG_BY_OCCASION = {
  student: '캠퍼스 캐주얼', office: '모던 오피스', casual: '데일리 캐주얼', active: '액티브 스포티', formal: '모던 포멀',
};
const OCCASION_LABEL = {
  student: '학교', office: '오피스', casual: '데일리', active: '액티브', formal: '포멀',
};

function buildComboOutfit(selection, topPick, bottomPick, shoesPick, outerPick, accPick) {
  const items = [];
  if (outerPick) items.push({ category: 'outer', name: outerPick.name, color: outerPick.color });
  items.push({ category: 'top', name: topPick.name, color: topPick.color });
  items.push({ category: 'bottom', name: bottomPick.name, color: bottomPick.color });
  items.push({ category: 'shoes', name: shoesPick.name, color: shoesPick.color });
  if (accPick) items.push({ category: 'acc', name: accPick.name, color: accPick.color });

  const fitForUnion = Array.from(new Set([topPick, bottomPick, outerPick].filter(Boolean).flatMap((p) => p.fitFor)));
  const mainColorMood = topPick.colorMood;
  const occLabel = OCCASION_LABEL[selection.occasion] || '데일리';
  const keyword = `${items.map((i) => i.name).join(' ')} ${occLabel}룩`;

  return {
    id: `combo-${topPick.name}-${bottomPick.name}-${Math.random().toString(36).slice(2, 7)}`,
    gender: selection.gender,
    styleTag: STYLE_TAG_BY_OCCASION[selection.occasion] || '데일리 무드',
    title: `${topPick.name} & ${bottomPick.name} 코디`,
    description: `${occLabel} 일정에 어울리도록 새롭게 조합해본 나만의 코디예요.`,
    items,
    fitFor: fitForUnion,
    colorMood: mainColorMood,
    keyword,
    trend: false,
  };
}

function generateComboOutfits(selection, n) {
  const topRanked = rankPool(selection, 'top');
  const bottomRanked = rankPool(selection, 'bottom');
  const shoesRanked = rankPool(selection, 'shoes');
  const outerRanked = rankPool(selection, 'outer');
  const accRanked = rankPool(selection, 'acc');
  if (!topRanked.length || !bottomRanked.length || !shoesRanked.length) return [];

  const pickFrom = (ranked, poolSize) => {
    const top = ranked.slice(0, Math.max(poolSize, 1));
    return top[Math.floor(Math.random() * top.length)].item;
  };

  const results = [];
  for (let i = 0; i < n; i += 1) {
    const topPick = pickFrom(topRanked, 5);
    const bottomPick = pickFrom(bottomRanked, 5);
    const shoesPick = pickFrom(shoesRanked, 4);
    const outerPick = outerRanked.length && Math.random() < 0.6 ? pickFrom(outerRanked, 4) : null;
    const accPick = accRanked.length && Math.random() < 0.7 ? pickFrom(accRanked, 4) : null;
    const combo = buildComboOutfit(selection, topPick, bottomPick, shoesPick, outerPick, accPick);
    combo.score =
      scoreItem(topPick, selection) + scoreItem(bottomPick, selection) + scoreItem(shoesPick, selection) +
      (outerPick ? scoreItem(outerPick, selection) : 0) + (accPick ? scoreItem(accPick, selection) : 0);
    results.push(combo);
  }
  return results;
}

function getRecommendations(selection, count = 3) {
  const curated = OUTFITS.filter((o) => matchesGender(o, selection.gender))
    .map((outfit) => ({ outfit, score: scoreOutfit(outfit, selection) }));
  const combos = generateComboOutfits(selection, 8).map((outfit) => ({ outfit, score: outfit.score }));
  const merged = curated.concat(combos);
  merged.sort((a, b) => b.score - a.score);
  return merged.slice(0, count).map((s) => s.outfit);
}

function heightTip(height) {
  if (!height) return '';
  if (height < 158) return `${height}cm라면 하이웨이스트 하의나 크롭 아우터로 다리 라인을 길게 살려보는 것도 좋아요.`;
  if (height >= 175) return `${height}cm라면 롱 코트나 와이드 팬츠처럼 볼륨감 있는 아이템도 멋지게 소화하실 수 있어요.`;
  return '';
}

function bmiValue(height, weight) {
  if (!height || !weight) return null;
  return weight / (height / 100) ** 2;
}

function weightTip(height, weight) {
  const bmi = bmiValue(height, weight);
  if (bmi === null) return '';
  if (bmi < 19) return '여유있는 오버사이즈 핏도 부담 없이 소화하실 수 있어요.';
  if (bmi >= 25) return '허리 라인을 살려주는 벨트나 랩 디자인으로 포인트를 주는 것도 좋아요.';
  return '';
}

function fitPreferenceFrom(height, weight) {
  const bmi = bmiValue(height, weight);
  if (bmi === null) return null;
  if (bmi < 19) return 'relaxed';
  if (bmi >= 25) return 'fitted';
  return null;
}

function buildPersonalTip(selection) {
  const parts = [];
  const comboCount = countPossibleCombos(selection);
  if (comboCount > 0) {
    parts.push(`지금 조건으로 만들 수 있는 코디 조합은 ${comboCount.toLocaleString('ko-KR')}가지가 넘어요.`);
  }
  if (selection.bodyType && selection.bodyType !== 'none') {
    parts.push(`${BODY_TYPE_LABEL[selection.bodyType]} 체형에 잘 어울리는 코디를 우선 보여드려요.`);
  }
  if (selection.personalColorType) {
    parts.push(`${PERSONAL_COLOR_TYPES[selection.personalColorType].label} 컬러 무드와 어울리는 코디도 함께 고려했어요.`);
  }
  const hTip = heightTip(selection.height);
  if (hTip) parts.push(hTip);
  const wTip = weightTip(selection.height, selection.weight);
  if (wTip) parts.push(wTip);
  return parts.join(' ');
}

let diagnosedPersonalColor = null;

const colorQuizForm = document.getElementById('colorquiz-form');
colorQuizForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(colorQuizForm);
  const answers = ['quiz-vein', 'quiz-metal', 'quiz-white', 'quiz-color'].map((name) => data.get(name));
  const warmCount = answers.filter((a) => a === 'warm').length;
  const group = warmCount >= 2 ? 'warm' : 'cool';
  const mood = data.get('quiz-mood');
  const type = group === 'warm' ? (mood === 'soft' ? 'springWarm' : 'autumnWarm') : mood === 'soft' ? 'summerCool' : 'winterCool';

  diagnosedPersonalColor = { group, type };
  renderColorQuizResult(type);
});

function renderColorQuizResult(type) {
  const info = PERSONAL_COLOR_TYPES[type];
  const resultEl = document.getElementById('colorquiz-result');
  const swatches = info.palette.map((c) => `<span class="palette-swatch" style="background:${c}"></span>`).join('');
  resultEl.innerHTML = `
    <p class="eyebrow">My type</p>
    <h3>${info.label}</h3>
    <p>${info.desc}</p>
    <div class="palette-row">${swatches}</div>
    <p class="metal-tip">✓ ${info.metal} 액세서리가 잘 어울려요. 코디 추천에도 이 컬러 무드를 반영했어요.</p>
  `;
  resultEl.hidden = false;
  resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function getItem(outfit, category) {
  return outfit.items.find((it) => it.category === category) || null;
}

function getItemColor(outfit, category) {
  const item = getItem(outfit, category);
  return item ? item.color : null;
}

// 아이템 이름으로 실루엣 형태를 추론 — 가죽재킷/코트/패딩/후드 등 옷 종류별로 다른 핏을 보여주기 위함
function inferShapeType(item) {
  if (!item) return 'regular';
  const n = item.name;
  if (item.category === 'shoes') {
    if (/부츠|워커/.test(n)) return 'boot';
    if (/힐|펌프스/.test(n)) return 'heel';
    if (/로퍼|더비|옥스포드/.test(n)) return 'loafer';
    if (/샌들/.test(n)) return 'sandal';
    return 'sneaker';
  }
  if (item.category === 'bottom') {
    if (/플리츠.*스커트/.test(n)) return 'skirtPleated';
    if (/스커트/.test(n)) return 'skirtA';
    if (/쇼츠/.test(n)) return 'shorts';
    if (/와이드|벌룬|배럴/.test(n)) return 'widePants';
    if (/카고/.test(n)) return 'cargoPants';
    if (/조거|트랙/.test(n)) return 'joggers';
    if (/스키니|슬림|테이퍼드/.test(n)) return 'skinnyPants';
    return 'straightPants';
  }
  if (item.category === 'dress') return 'dress';
  if (/가죽/.test(n)) return 'leatherJacket';
  if (/패딩/.test(n)) return 'puffer';
  if (/코트/.test(n)) return 'coat';
  if (/후드/.test(n)) return 'hoodie';
  if (/가디건/.test(n)) return 'cardigan';
  if (/블레이저|재킷|자켓/.test(n)) return 'blazer';
  return 'regular';
}

let avatarInstanceCounter = 0;

function shadeColor(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16);
  let r = (num >> 16) + Math.round(255 * percent);
  let g = ((num >> 8) & 0xff) + Math.round(255 * percent);
  let b = (num & 0xff) + Math.round(255 * percent);
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function fabricGradient(id, color) {
  return `<linearGradient id="${id}" x1="10%" y1="0%" x2="90%" y2="100%">
    <stop offset="0%" stop-color="${shadeColor(color, 0.26)}" />
    <stop offset="55%" stop-color="${color}" />
    <stop offset="100%" stop-color="${shadeColor(color, -0.16)}" />
  </linearGradient>`;
}

function upperShapeMarkup(shapeType, fillUrl) {
  const base = `M47,64 Q40,100 46,128 Q48,142 55,150 Q80,158 105,150 Q112,142 114,128 Q120,100 113,64 Q80,54 47,64 Z`;
  const stroke = `stroke="#1B1B1B" stroke-width="1.5" stroke-linejoin="round"`;
  if (shapeType === 'leatherJacket') {
    return `<path d="M48,62 Q42,96 47,124 Q49,138 55,148 Q80,154 105,148 Q111,138 113,124 Q118,96 112,62 Q80,50 48,62 Z" fill="${fillUrl}" ${stroke} />
      <line x1="80" y1="64" x2="80" y2="150" stroke="#1B1B1B" stroke-width="1.4" opacity="0.55" />
      <rect x="70" y="58" width="20" height="9" rx="2" fill="${fillUrl}" stroke="#1B1B1B" stroke-width="1" />`;
  }
  if (shapeType === 'blazer') {
    return `<path d="M48,64 Q41,98 47,127 Q49,141 56,150 Q80,156 104,150 Q111,141 113,127 Q119,98 112,64 Q80,52 48,64 Z" fill="${fillUrl}" ${stroke} />
      <path d="M64,64 L75,104 L68,108 Z" fill="#1B1B1B" opacity="0.35" />
      <path d="M96,64 L85,104 L92,108 Z" fill="#1B1B1B" opacity="0.35" />`;
  }
  if (shapeType === 'puffer') {
    return `<path d="M38,66 Q29,112 37,152 Q80,166 123,152 Q131,112 122,66 Q80,49 38,66 Z" fill="${fillUrl}" ${stroke} />
      <path d="M41,90 Q80,99 119,90" fill="none" stroke="#1B1B1B" stroke-width="1" opacity="0.4" />
      <path d="M39,114 Q80,124 121,114" fill="none" stroke="#1B1B1B" stroke-width="1" opacity="0.4" />
      <path d="M39,138 Q80,148 121,138" fill="none" stroke="#1B1B1B" stroke-width="1" opacity="0.4" />`;
  }
  if (shapeType === 'coat') {
    return `<path d="M46,64 Q38,118 44,150 Q80,160 116,150 Q122,118 114,64 Q80,53 46,64 Z" fill="${fillUrl}" ${stroke} />
      <path d="M62,64 L72,96 L66,99 Z" fill="#1B1B1B" opacity="0.3" />
      <path d="M98,64 L88,96 L94,99 Z" fill="#1B1B1B" opacity="0.3" />`;
  }
  if (shapeType === 'hoodie') {
    return `<path d="M44,64 Q37,106 44,132 Q46,144 54,150 Q80,158 106,150 Q114,144 116,132 Q123,106 116,64 Q80,55 44,64 Z" fill="${fillUrl}" ${stroke} />
      <path d="M61,58 Q80,38 99,58 Q99,70 90,72 Q80,61 70,72 Q61,70 61,58 Z" fill="${fillUrl}" stroke="#1B1B1B" stroke-width="1.2" />`;
  }
  if (shapeType === 'cardigan') {
    return `<path d="M45,64 Q38,104 44,130 Q46,144 53,150 Q80,157 107,150 Q114,144 116,130 Q122,104 115,64 Q80,55 45,64 Z" fill="${fillUrl}" ${stroke} />
      <line x1="80" y1="60" x2="80" y2="150" stroke="#1B1B1B" stroke-width="1.2" stroke-dasharray="2,3" opacity="0.6" />`;
  }
  return `<path d="${base}" fill="${fillUrl}" ${stroke} />`;
}

function legShapeMarkup(shapeType, fillUrl, skinUrl) {
  const stroke = `stroke="#1B1B1B" stroke-width="1.3" stroke-linejoin="round"`;
  if (shapeType === 'skirtA' || shapeType === 'skirtPleated') {
    const hemDetail =
      shapeType === 'skirtPleated'
        ? `<line x1="68" y1="152" x2="64" y2="206" stroke="#1B1B1B" stroke-width="0.8" opacity="0.35" />
           <line x1="80" y1="154" x2="80" y2="208" stroke="#1B1B1B" stroke-width="0.8" opacity="0.35" />
           <line x1="92" y1="152" x2="96" y2="206" stroke="#1B1B1B" stroke-width="0.8" opacity="0.35" />`
        : '';
    return `<path d="M56,150 Q48,180 58,210 Q80,220 102,210 Q112,180 104,150 Z" fill="${fillUrl}" ${stroke} />
      ${hemDetail}
      <path d="M64,210 Q62,248 66,278 L74,278 Q72,244 73,212 Z" fill="${skinUrl}" stroke="#1B1B1B" stroke-width="1" />
      <path d="M96,210 Q98,248 94,278 L86,278 Q88,244 87,212 Z" fill="${skinUrl}" stroke="#1B1B1B" stroke-width="1" />`;
  }
  if (shapeType === 'shorts') {
    return `<path d="M56,150 Q50,170 56,190 L74,190 Q72,170 76,152 Z" fill="${fillUrl}" ${stroke} />
      <path d="M104,150 Q110,170 104,190 L86,190 Q88,170 84,152 Z" fill="${fillUrl}" ${stroke} />
      <path d="M58,190 Q54,238 60,278 L70,278 Q68,234 70,192 Z" fill="${skinUrl}" stroke="#1B1B1B" stroke-width="1" />
      <path d="M102,190 Q106,238 100,278 L90,278 Q92,234 90,192 Z" fill="${skinUrl}" stroke="#1B1B1B" stroke-width="1" />`;
  }
  if (shapeType === 'widePants' || shapeType === 'cargoPants') {
    return `<path d="M55,150 Q45,200 50,250 Q50,266 56,278 L78,278 Q72,222 76,152 Z" fill="${fillUrl}" ${stroke} />
      <path d="M105,150 Q115,200 110,250 Q110,266 104,278 L82,278 Q88,222 84,152 Z" fill="${fillUrl}" ${stroke} />`;
  }
  if (shapeType === 'skinnyPants') {
    return `<path d="M58,150 Q53,200 58,250 Q59,266 62,278 L70,278 Q68,222 72,152 Z" fill="${fillUrl}" ${stroke} />
      <path d="M102,150 Q107,200 102,250 Q101,266 98,278 L90,278 Q92,222 88,152 Z" fill="${fillUrl}" ${stroke} />`;
  }
  if (shapeType === 'joggers') {
    return `<path d="M56,150 Q49,200 56,250 Q56,262 60,270 L72,270 Q70,260 70,250 Q70,200 76,152 Z" fill="${fillUrl}" ${stroke} />
      <path d="M104,150 Q111,200 104,250 Q104,262 100,270 L88,270 Q90,260 90,250 Q90,200 84,152 Z" fill="${fillUrl}" ${stroke} />
      <rect x="58" y="268" width="14" height="8" rx="3" fill="${fillUrl}" stroke="#1B1B1B" stroke-width="1" />
      <rect x="88" y="268" width="14" height="8" rx="3" fill="${fillUrl}" stroke="#1B1B1B" stroke-width="1" />`;
  }
  return `<path d="M56,150 Q49,200 56,250 Q58,266 64,278 L74,278 Q70,222 76,152 Z" fill="${fillUrl}" ${stroke} />
    <path d="M104,150 Q111,200 104,250 Q102,266 96,278 L86,278 Q90,222 84,152 Z" fill="${fillUrl}" ${stroke} />`;
}

function shoeShapeMarkup(shapeType, fillUrl) {
  if (shapeType === 'boot') {
    return `<rect x="58" y="266" width="16" height="20" rx="4" fill="${fillUrl}" stroke="#1B1B1B" stroke-width="1.3" />
      <rect x="86" y="266" width="16" height="20" rx="4" fill="${fillUrl}" stroke="#1B1B1B" stroke-width="1.3" />`;
  }
  if (shapeType === 'heel') {
    return `<path d="M58,282 L78,278 L76,288 L60,290 Z" fill="${fillUrl}" stroke="#1B1B1B" stroke-width="1.2" />
      <rect x="74" y="286" width="2.5" height="10" fill="${fillUrl}" stroke="#1B1B1B" stroke-width="0.8" />
      <path d="M82,282 L102,278 L104,290 L88,290 Z" fill="${fillUrl}" stroke="#1B1B1B" stroke-width="1.2" />
      <rect x="83.5" y="286" width="2.5" height="10" fill="${fillUrl}" stroke="#1B1B1B" stroke-width="0.8" />`;
  }
  if (shapeType === 'sandal') {
    return `<ellipse cx="67" cy="288" rx="15" ry="6" fill="${fillUrl}" stroke="#1B1B1B" stroke-width="1.2" />
      <line x1="58" y1="282" x2="76" y2="282" stroke="#1B1B1B" stroke-width="1.2" />
      <ellipse cx="93" cy="288" rx="15" ry="6" fill="${fillUrl}" stroke="#1B1B1B" stroke-width="1.2" />
      <line x1="84" y1="282" x2="102" y2="282" stroke="#1B1B1B" stroke-width="1.2" />`;
  }
  return `<ellipse cx="67" cy="288" rx="15" ry="7" fill="${fillUrl}" stroke="#1B1B1B" stroke-width="1.3" />
    <ellipse cx="93" cy="288" rx="15" ry="7" fill="${fillUrl}" stroke="#1B1B1B" stroke-width="1.3" />`;
}

function avatarSVG(outfit, avatarId) {
  const dressItem = getItem(outfit, 'dress');
  const topItem = getItem(outfit, 'top');
  const bottomItem = getItem(outfit, 'bottom');
  const outerItem = getItem(outfit, 'outer');
  const shoesItem = getItem(outfit, 'shoes');

  const topColor = (dressItem || topItem || outerItem || {}).color || '#D8C3A5';
  const bottomColor = (bottomItem || {}).color || '#8B8B8B';
  const shoesColor = (shoesItem || {}).color || '#3A2A1E';
  const outerColor = outerItem ? outerItem.color : null;
  const skinColor = '#F4DCC7';
  const hairColor = '#3A2A1E';

  const gTop = `${avatarId}-top`;
  const gBottom = `${avatarId}-bottom`;
  const gOuter = `${avatarId}-outer`;
  const gShoes = `${avatarId}-shoes`;
  const gSkin = `${avatarId}-skin`;

  const upperShapeType = dressItem ? 'dress' : inferShapeType(topItem || outerItem);
  const outerShapeType = inferShapeType(outerItem);
  const legShapeType = inferShapeType(bottomItem);
  const shoeShapeType = inferShapeType(shoesItem);

  // 아우터가 없을 때도 상의 자체가 코트/패딩이면 같은 드레이프를 적용 (예: outer 슬롯 없이 코트만 있는 코디)
  const drapeShapeType = outerItem ? outerShapeType : upperShapeType;
  const drapeFillUrl = outerColor ? `url(#${gOuter})` : `url(#${gTop})`;
  const outerSideStrips =
    drapeShapeType === 'coat' || drapeShapeType === 'puffer'
      ? `<path d="M43,66 Q30,116 36,176 Q45,178 51,176 Q44,116 58,68 Z" fill="${drapeFillUrl}" stroke="#1B1B1B" stroke-width="1.3" stroke-linejoin="round" />
         <path d="M117,66 Q130,116 124,176 Q115,178 109,176 Q116,116 102,68 Z" fill="${drapeFillUrl}" stroke="#1B1B1B" stroke-width="1.3" stroke-linejoin="round" />`
      : outerColor
      ? `<path d="M44,66 Q34,108 38,150 Q46,150 50,150 Q44,108 56,68 Z" fill="url(#${gOuter})" stroke="#1B1B1B" stroke-width="1.3" stroke-linejoin="round" />
         <path d="M116,66 Q126,108 122,150 Q114,150 110,150 Q116,108 104,68 Z" fill="url(#${gOuter})" stroke="#1B1B1B" stroke-width="1.3" stroke-linejoin="round" />`
      : '';

  const lowerBody = dressItem
    ? `<path d="M52,64 Q44,140 50,210 Q80,224 110,210 Q116,140 108,64 Q80,56 52,64 Z" fill="url(#${gTop})" stroke="#1B1B1B" stroke-width="1.5" stroke-linejoin="round" />
       <path d="M62,210 Q60,250 66,278 L72,278 Q70,246 72,212 Z" fill="url(#${gSkin})" stroke="#1B1B1B" stroke-width="1" />
       <path d="M98,210 Q100,250 94,278 L88,278 Q90,246 88,212 Z" fill="url(#${gSkin})" stroke="#1B1B1B" stroke-width="1" />`
    : `${upperShapeMarkup(upperShapeType, `url(#${gTop})`)}
       ${legShapeMarkup(legShapeType, `url(#${gBottom})`, `url(#${gSkin})`)}`;

  return `<svg viewBox="0 0 160 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${outfit.title} 미리보기">
    <defs>
      ${fabricGradient(gTop, topColor)}
      ${fabricGradient(gBottom, bottomColor)}
      ${outerColor ? fabricGradient(gOuter, outerColor) : ''}
      ${fabricGradient(gShoes, shoesColor)}
      ${fabricGradient(gSkin, skinColor)}
    </defs>
    <ellipse cx="80" cy="298" rx="40" ry="9" fill="#1B1B1B" opacity="0.14" />
    <path d="M45,70 Q34,112 31,150 Q36,156 42,154 Q48,112 58,70 Z" fill="url(#${gTop})" stroke="#1B1B1B" stroke-width="1.3" stroke-linejoin="round" />
    <path d="M115,70 Q126,112 129,150 Q124,156 118,154 Q112,112 102,70 Z" fill="url(#${gTop})" stroke="#1B1B1B" stroke-width="1.3" stroke-linejoin="round" />
    ${lowerBody}
    ${outerSideStrips}
    ${shoeShapeMarkup(shoeShapeType, `url(#${gShoes})`)}
    <circle cx="80" cy="34" r="21" fill="url(#${gSkin})" stroke="#1B1B1B" stroke-width="1.6" />
    <rect x="73" y="52" width="14" height="11" rx="4" fill="url(#${gSkin})" stroke="#1B1B1B" stroke-width="1.2" />
    <path d="M57,28 Q58,8 80,8 Q102,8 103,28 Q103,16 96,14 Q90,24 80,16 Q70,24 64,14 Q57,16 57,28 Z" fill="${hairColor}" />
  </svg>`;
}

function outfitCardHTML(outfit, selection) {
  const items = outfit.items
    .map(
      (it) => `
      <div class="item-row">
        <span class="swatch" style="background:${it.color}"></span>
        <span class="item-category">${CATEGORY_LABEL[it.category]}</span>
        <span>${it.name}</span>
      </div>`
    )
    .join('');

  const links = buildShopLinks(outfit.keyword)
    .map((l) => `<a href="${l.url}" target="_blank" rel="noopener noreferrer">${l.name}</a>`)
    .join('');

  const trendBadge = outfit.trend ? '<span class="trend-badge">🔥 트렌드</span>' : '';
  const trendNote = outfit.trendNote ? `<p class="trend-note">${outfit.trendNote}</p>` : '';

  const fitTip =
    selection && selection.bodyType && selection.bodyType !== 'none' && outfit.fitFor.includes(selection.bodyType)
      ? `<p class="fit-tip">✓ ${BODY_TYPE_LABEL[selection.bodyType]} 체형에 특히 잘 어울리는 코디예요</p>`
      : '';

  const avatarId = `avatar-${outfit.id}-${avatarInstanceCounter++}`;

  return `
    <article class="outfit-card">
      <div class="card-top-row">
        <span class="style-tag">${outfit.styleTag}</span>
        ${trendBadge}
      </div>
      ${trendNote}
      <h3>${outfit.title}</h3>
      <p class="outfit-desc">${outfit.description}</p>
      <div class="item-list">${items}</div>
      ${fitTip}
      <button type="button" class="preview-toggle" data-target="${avatarId}">👗 코디 입혀보기</button>
      <div class="avatar-panel" id="${avatarId}" hidden>${avatarSVG(outfit, avatarId)}</div>
      <div class="shop-links">${links}</div>
    </article>`;
}

function renderTrendGrid() {
  const grid = document.getElementById('trend-grid');
  const trendOutfits = OUTFITS.filter((o) => o.trend);
  grid.innerHTML = trendOutfits.map((o) => outfitCardHTML(o, null)).join('');
}

let lastSelection = null;

function renderResults(outfits) {
  const grid = document.getElementById('result-grid');
  const section = document.getElementById('results');
  const tipEl = document.getElementById('personal-tip');
  grid.innerHTML = outfits.map((o) => outfitCardHTML(o, lastSelection)).join('');
  tipEl.textContent = buildPersonalTip(lastSelection);
  section.hidden = false;
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const form = document.getElementById('recommend-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  lastSelection = {
    gender: data.get('gender'),
    age: data.get('age'),
    occasion: data.get('occasion'),
    season: data.get('season'),
    bodyType: data.get('bodytype'),
    height: Number(data.get('height')) || null,
    weight: Number(data.get('weight')) || null,
    personalColorGroup: diagnosedPersonalColor ? diagnosedPersonalColor.group : null,
    personalColorType: diagnosedPersonalColor ? diagnosedPersonalColor.type : null,
  };
  renderResults(getRecommendations(lastSelection));
});

document.getElementById('regenerate-btn').addEventListener('click', () => {
  if (!lastSelection) return;
  renderResults(getRecommendations(lastSelection));
});

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.preview-toggle');
  if (!btn) return;
  const panel = document.getElementById(btn.dataset.target);
  if (!panel) return;
  if (panel.hasAttribute('hidden')) {
    panel.removeAttribute('hidden');
    btn.textContent = '미리보기 닫기';
  } else {
    panel.setAttribute('hidden', '');
    btn.textContent = '👗 코디 입혀보기';
  }
});

function mapTempToSeason(temp) {
  if (temp >= 26) return 'summer';
  if (temp >= 17) return 'spring';
  if (temp >= 6) return 'fall';
  return 'winter';
}

function weatherCodeNote(code) {
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return ' 비가 올 수 있어요, 방수 아우터나 우산을 챙기세요.';
  if (code >= 71 && code <= 77) return ' 눈이 올 수 있어요, 미끄럼 방지 신발을 추천해요.';
  if (code >= 95) return ' 천둥/번개가 있을 수 있어요, 외출 시 주의하세요.';
  return '';
}

const weatherBtn = document.getElementById('weather-auto-btn');
const weatherStatus = document.getElementById('weather-status');

weatherBtn.addEventListener('click', () => {
  if (!navigator.geolocation) {
    weatherStatus.textContent = '이 브라우저에서는 위치 정보를 지원하지 않아요. 직접 선택해주세요.';
    return;
  }
  weatherStatus.textContent = '위치 확인 중...';
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      try {
        const { latitude, longitude } = pos.coords;
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        if (!res.ok) throw new Error('weather request failed');
        const data = await res.json();
        const temp = Math.round(data.current_weather.temperature);
        const code = data.current_weather.weathercode;
        const season = mapTempToSeason(temp);
        const radio = document.getElementById(`season-${season}`);
        if (radio) radio.checked = true;
        weatherStatus.textContent = `현재 위치 기온 ${temp}°C → '${SEASON_LABEL[season]}'으로 자동 설정했어요.${weatherCodeNote(code)}`;
      } catch (err) {
        weatherStatus.textContent = '날씨 정보를 가져오지 못했어요. 직접 선택해주세요.';
      }
    },
    () => {
      weatherStatus.textContent = '위치 권한이 거부되었어요. 직접 선택해주세요.';
    },
    { timeout: 8000 }
  );
});

renderTrendGrid();
