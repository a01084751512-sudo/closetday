'use strict';

/* =========================================================
   Curated trend catalog — powers the home feed AND the
   personalized recommendation fallback when a user's own
   closet doesn't have a matching item yet.
   ========================================================= */
const SHOP_SITES = [
  { name: '네이버 쇼핑', urlTemplate: 'https://search.shopping.naver.com/search/all?query={q}' },
  { name: '무신사', urlTemplate: 'https://www.musinsa.com/search/musinsa/integration?q={q}' },
  { name: '지그재그', urlTemplate: 'https://zigzag.kr/search?keyword={q}' },
  { name: '29CM', urlTemplate: 'https://www.29cm.co.kr/search?q={q}' },
];
function buildShopLink(keyword) {
  const site = SHOP_SITES[0];
  return site.urlTemplate.replace('{q}', encodeURIComponent(keyword));
}
function buildShopLinks(keyword) {
  const encoded = encodeURIComponent(keyword);
  return SHOP_SITES.map((site) => ({ name: site.name, url: site.urlTemplate.replace('{q}', encoded) }));
}

/* ---- 2026 트렌드 코디 (LOOKCODI에서 통합) — 보그 코리아·무신사·WhoWhatWear 등 트렌드 리포트를 참고해 구성 ---- */
const CATEGORY_LABEL_KO = { top: '상의', bottom: '하의', outer: '아우터', dress: '원피스', shoes: '신발', acc: '액세서리' };
const TREND_2026 = [
  {
    id: 't-stripe-01', styleTag: '믹스 스트라이프', title: '믹스 스트라이프 캐주얼룩',
    trendNote: '2026 S/S 런웨이에서 두드러진, 굵기를 믹스한 스트라이프 무드',
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
    id: 't-balloon-01', styleTag: '벌룬 팬츠', title: '벌룬 팬츠 캐주얼룩',
    trendNote: '2026년 런웨이와 리얼웨이를 동시에 장악한 벌룬 팬츠 실루엣',
    description: '바람을 머금은 듯 부푼 실루엣의 벌룬 팬츠로 완성한 화제의 트렌드 코디예요.',
    items: [
      { category: 'top', name: '크롭 니트', color: '#EFE9DF' },
      { category: 'bottom', name: '벌룬 팬츠', color: '#C9A77C' },
      { category: 'shoes', name: '청키 스니커즈', color: '#FFFFFF' },
    ],
    keyword: '벌룬팬츠 캐주얼룩 2026 트렌드',
  },
  {
    id: 't-pink-01', styleTag: '소프트 핑크', title: '파스텔 핑크 무드룩',
    trendNote: '2026 S/S 컬러 트렌드 1위로 꼽힌 소프트 핑크',
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
    id: 't-denim-01', styleTag: '디스트로이드 데님', title: '디스트로이드 데님 캐주얼룩',
    trendNote: '70년대 무드를 재해석한 2026년 디스트로이드 데님 트렌드',
    description: '빈티지한 디스트로이드 데님으로 완성한 70년대 무드의 캐주얼룩이에요.',
    items: [
      { category: 'top', name: '화이트 반팔티', color: '#FFFFFF' },
      { category: 'bottom', name: '디스트로이드 데님', color: '#5C7A9A' },
      { category: 'shoes', name: '캔버스 스니커즈', color: '#EFE9DF' },
    ],
    keyword: '남성 디스트로이드 데님 반팔티 2026 트렌드룩',
  },
  {
    id: 't-eggplant-01', styleTag: '가지색 무드', title: '가지색 블레이저 오피스룩',
    trendNote: "2026 가을 대표 컬러로 꼽힌 '가지색(에그플랜트)'을 활용한 오피스룩",
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
    id: 't-shoulder-01', styleTag: '80s 숄더라인', title: '숄더패드 블레이저룩',
    trendNote: '잘록한 허리와 과감해진 숄더라인이 돋아나는 2026 가을 1980년대 무드 트렌드',
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
    id: 't-texture-01', styleTag: '텍스처 레이어드', title: '벨벳 레더 레이어드룩',
    trendNote: '벨벳과 레더를 매치하는 2026 가을 텍스처 레이어링 트렌드',
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
    id: 't-allblack-01', styleTag: '올블랙 파워룩', title: '올블랙 파워 슈트룩',
    trendNote: '밀라노 런웨이를 장악한 2026 가을 올블랙 파워룩 트렌드',
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

// 아래 이미지들은 모두 다운로드해서 실제 내용을 직접 확인한 뒤,
// 사진에 실제로 보이는 것과 제목·아이템 구성이 일치하도록 작성했어요.
const TREND_LOOKS = [
  {
    id: 'look-01', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=500&q=70',
    title: '버건디 롱코트 쇼핑룩', subtitle: '쇼핑하기 좋은 가을 데일리',
    tpo: ['데일리'], season: ['가을', '겨울'], mood: ['자신감있게'],
    items: [{ name: '버건디 롱코트', color: '#6E2A32' }, { name: '화이트 이너 톱', color: '#F3F1EA' }, { name: '선글라스', color: '#232323' }],
  },
  {
    id: 'look-02', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=500&q=70',
    title: '스트라이프 와이드팬츠 스트릿룩', subtitle: '과감한 스트릿 무드',
    tpo: ['데일리'], season: ['봄', '여름'], mood: ['화사하게', '시크하게'],
    items: [{ name: '화이트 크롭탑', color: '#F3F1EA' }, { name: '블랙&화이트 스트라이프 와이드팬츠', color: '#2B2B2B' }, { name: '레드 미니백', color: '#B23A2E' }],
  },
  {
    id: 'look-03', img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=500&q=70',
    title: '화이트 오프숄더 미니원피스', subtitle: '햇살 좋은 날의 데이트룩',
    tpo: ['모임·데이트'], season: ['여름'], mood: ['화사하게', '러블리하게'],
    items: [{ name: '오프숄더 미니원피스', color: '#F3F1EA' }, { name: '화이트 스니커즈', color: '#EDEAE2' }],
  },
  {
    id: 'look-04', img: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=500&q=70',
    title: '틸 홀터넥 점프수트', subtitle: '존재감 있는 세미포멀 룩',
    tpo: ['포멀'], season: ['봄', '가을'], mood: ['자신감있게'],
    items: [{ name: '틸 홀터넥 점프수트', color: '#1F6F6B' }],
  },
  {
    id: 'look-05', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=500&q=70',
    title: '플로럴 랩원피스', subtitle: '바닷가에서 어울리는 룩',
    tpo: ['모임·데이트'], season: ['여름'], mood: ['러블리하게'],
    items: [{ name: '플로럴 랩원피스', color: '#E7B9C4' }, { name: '스트로우 백', color: '#C9A66B' }],
  },
  {
    id: 'look-06', img: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=500&q=70',
    title: '그래픽 티셔츠 스트릿룩', subtitle: '무심한 듯 힘 뺀 캐주얼',
    tpo: ['데일리'], season: ['봄', '여름'], mood: ['시크하게'],
    items: [{ name: '블랙 그래픽 티셔츠', color: '#1C1C1C' }, { name: '레이어드 쇼츠', color: '#8A8378' }],
  },
  {
    id: 'look-07', img: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=500&q=70',
    title: '핑크 롱코트 가을룩', subtitle: '고풍스러운 골목길 산책',
    tpo: ['데일리'], season: ['가을'], mood: ['자신감있게'],
    items: [{ name: '핑크 롱코트', color: '#D9A9A6' }, { name: '블랙 타이츠', color: '#1C1C1C' }, { name: '블랙 앵클부츠', color: '#2B2118' }],
  },
  {
    id: 'look-08', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=70',
    title: '블랙 하이패션 코트룩', subtitle: '존재감 있는 겨울 아우터',
    tpo: ['포멀'], season: ['가을', '겨울'], mood: ['자신감있게'],
    items: [{ name: '블랙 러플 롱코트', color: '#1C1C1C' }, { name: '와이드브림 햇', color: '#1C1C1C' }],
  },
  {
    id: 'look-09', img: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=500&q=70',
    title: '블랙 수트 포멀룩', subtitle: '신뢰감을 더하는 정장 룩',
    tpo: ['포멀'], season: ['봄', '가을', '겨울'], mood: ['자신감있게'],
    items: [{ name: '블랙 수트 자켓', color: '#1C1C1C' }, { name: '버건디 타이', color: '#6E2A32' }, { name: '화이트 셔츠', color: '#F3F1EA' }],
  },
  {
    id: 'look-10', img: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=500&q=70',
    title: '카멜 코트 & 니트 세트', subtitle: '도심 속 오피스 룩',
    tpo: ['오피스'], season: ['가을'], mood: ['시크하게'],
    items: [{ name: '카멜 롱코트', color: '#C9A66B' }, { name: '올리브 니트탑', color: '#7C7A5E' }, { name: '올리브 미디스커트', color: '#7C7A5E' }],
  },
  {
    id: 'look-11', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=70',
    title: '데님자켓 후드 레이어드룩', subtitle: '힘 안 준 편안한 조합',
    tpo: ['데일리'], season: ['가을'], mood: ['편안하게'],
    items: [{ name: '데님자켓', color: '#5B7A9B' }, { name: '그레이 후드티', color: '#8A8378' }],
  },
  {
    id: 'look-12', img: 'https://images.unsplash.com/photo-1516575150278-77136aed6920?auto=format&fit=crop&w=500&q=70',
    title: '레드 컬러 포인트룩', subtitle: '화사한 컬러감이 포인트',
    tpo: ['데일리'], season: ['봄', '가을'], mood: ['화사하게'],
    items: [{ name: '레드 오렌지 톱', color: '#C1502E' }, { name: '데님 소재 아우터', color: '#7A93A6' }],
  },
  {
    id: 'look-13', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=70',
    title: '옐로우 트레이닝 세트업', subtitle: '가볍게 몸을 움직이는 날',
    tpo: ['운동'], season: ['봄', '여름'], mood: ['편안하게'],
    items: [{ name: '옐로우 후드', color: '#E8B23A' }, { name: '옐로우 조거팬츠', color: '#E8B23A' }, { name: '화이트 부츠', color: '#F3F1EA' }],
  },
];

/* ---- 요즘 뜨는 아이템 (개별 아이템 스트립) ---- */
const TRENDING_ITEMS = [
  { id: 'item-01', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=300&q=70', name: '파스텔 스니커즈', badge: 'HOT', note: '파스텔 컬러 배색이 포인트인 스니커즈예요' },
  { id: 'item-02', img: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=300&q=70', name: '스웨이드 더비슈즈', badge: 'NEW', note: '캐주얼룩에도 포멀룩에도 무난하게 어울려요' },
  { id: 'item-03', img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=300&q=70', name: '블랙 러닝화', badge: '인기 급상승', note: '가볍고 편안해서 데일리로도 좋아요' },
  { id: 'item-04', img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=300&q=70', name: '클래식 손목시계', badge: 'NEW', note: '포멀룩 완성도를 높여주는 아이템이에요' },
  { id: 'item-05', img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=300&q=70', name: '컬러블록 청키스니커즈', badge: 'HOT', note: '볼륨감 있는 실루엣이 요즘 대세예요' },
  { id: 'item-06', img: 'https://images.unsplash.com/photo-1509941943102-10c232535736?auto=format&fit=crop&w=300&q=70', name: '워치 & 브레이슬릿 스택', badge: '인기 급상승', note: '손목에 레이어드해서 포인트를 줘보세요' },
  { id: 'item-07', img: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=300&q=70', name: '그레이 팬츠 캐주얼 세트', badge: 'NEW', note: '스니커즈와 매치하면 편안한 데일리룩 완성' },
  { id: 'item-08', img: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=300&q=70', name: '컬러 레인재킷', badge: 'HOT', note: '비 오는 날에도 스타일을 챙길 수 있어요' },
  { id: 'item-09', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=300&q=70', name: '화이트 스웨트셔츠 세트', badge: 'NEW', note: '데님·스니커즈와 매치하기 좋은 기본템이에요' },
  { id: 'item-10', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=300&q=70', name: '프릴 니트 판초', badge: 'HOT', note: '가을에 가볍게 걸치기 좋은 아이템이에요' },
  { id: 'item-11', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=300&q=70', name: '브라운 봄버자켓', badge: '인기 급상승', note: '캐주얼룩에 포인트를 주는 아우터예요' },
  { id: 'item-12', img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=300&q=70', name: '플로럴 패턴 힐', badge: 'NEW', note: '포멀룩에 화사함을 더해주는 슈즈예요' },
];

/* ---- 시즌 스페셜 (수영복 / 스키복 등) ----
   실제 사진 대신 컬러 스와치로 아이템을 보여줘요. 사진-설명 불일치를 원천 차단하기 위한 선택이에요. */
const SEASONAL_SPECIALS = [
  {
    id: 'special-01', icon: '👙', badgeLabel: '☀️ 여름 스페셜', title: '체크 원피스 수영복', subtitle: '휴가 필수템',
    tpo: ['운동'], season: ['여름'], mood: ['화사하게'],
    items: [{ name: '원피스 수영복', color: '#2E4A6B' }, { name: '밀짚모자', color: '#D8B27C' }, { name: '비치 샌들', color: '#E8DFCB' }],
  },
  {
    id: 'special-02', icon: '🏊', badgeLabel: '☀️ 여름 스페셜', title: '래쉬가드 세트', subtitle: '물놀이도 스타일있게',
    tpo: ['운동'], season: ['여름'], mood: ['편안하게'],
    items: [{ name: '집업 래쉬가드', color: '#1F3A5F' }, { name: '래쉬가드 반바지', color: '#22242A' }, { name: '아쿠아 슈즈', color: '#3B3B3B' }],
  },
  {
    id: 'special-03', icon: '🏖️', badgeLabel: '☀️ 여름 스페셜', title: '밀짚모자 & 비치 커버업', subtitle: '해변 산책 룩',
    tpo: ['모임·데이트'], season: ['여름'], mood: ['화사하게', '러블리하게'],
    items: [{ name: '크로셰 커버업', color: '#F1E7D9' }, { name: '밀짚모자', color: '#D8B27C' }, { name: '라탄 백', color: '#B08D57' }],
  },
  {
    id: 'special-04', icon: '⛷️', badgeLabel: '❄️ 겨울 스페셜', title: '스키 재킷 & 팬츠 세트', subtitle: '슬로프 위 코디',
    tpo: ['운동'], season: ['겨울'], mood: ['자신감있게'],
    items: [{ name: '스키 재킷', color: '#B23A2E' }, { name: '스키 팬츠', color: '#22242A' }, { name: '스키 고글', color: '#3B3B3B' }],
  },
  {
    id: 'special-05', icon: '🧥', badgeLabel: '❄️ 겨울 스페셜', title: '롱패딩 세트', subtitle: '한파에도 든든하게',
    tpo: ['데일리'], season: ['겨울'], mood: ['편안하게'],
    items: [{ name: '롱패딩', color: '#22242A' }, { name: '니트 목도리', color: '#8C6F52' }, { name: '방한 부츠', color: '#3B2A1E' }],
  },
  {
    id: 'special-06', icon: '🧤', badgeLabel: '❄️ 겨울 스페셜', title: '니트 비니 & 장갑 세트', subtitle: '포인트가 되는 방한템',
    tpo: ['데일리'], season: ['겨울'], mood: ['편안하게'],
    items: [{ name: '니트 비니', color: '#5E4A36' }, { name: '울 장갑', color: '#8C6F52' }, { name: '니트 목도리', color: '#B7A996' }],
  },
];

/* ---- 베스트 컬러 조합 (재미 섹션) ---- */
const COLOR_PALETTES = [
  { id: 'pal-01', name: '카멜 & 아이보리 & 브라운', desc: '가을 톤온톤의 정석', colors: ['#C9A66B', '#F1E7D9', '#5B4636'] },
  { id: 'pal-02', name: '블랙 & 화이트 & 레드 포인트', desc: '실패 없는 시크 조합', colors: ['#1C1C1C', '#F3F1EA', '#B23A2E'] },
  { id: 'pal-03', name: '라벤더 & 그레이 & 실버', desc: '차분하고 세련된 쿨톤', colors: ['#B7A9C9', '#8A8378', '#D8D3C9'] },
  { id: 'pal-04', name: '살구 & 베이지 & 브라운', desc: '화사한 웜톤 데일리', colors: ['#E8B28A', '#E4D7C2', '#8C6F52'] },
  { id: 'pal-05', name: '네이비 & 화이트 & 골드', desc: '단정한 오피스 무드', colors: ['#22304A', '#F3F1EA', '#C9A66B'] },
  { id: 'pal-06', name: '민트 & 화이트 & 데님블루', desc: '산뜻한 여름 조합', colors: ['#9FC6BA', '#F3F1EA', '#41586E'] },
  { id: 'pal-07', name: '버건디 & 카키 & 크림', desc: '깊이감 있는 가을 무드', colors: ['#6E2A32', '#7C7A5E', '#F1E7D9'] },
  { id: 'pal-08', name: '핑크 & 그레이 & 화이트', desc: '러블리하지만 과하지 않게', colors: ['#E7B9C4', '#8A8378', '#F3F1EA'] },
];

/* =========================================================
   Supabase-backed state
   ========================================================= */
const MAX_IMG_DIM = 560;

let currentUserId = null;
let closetItems = [];
let marketItems = [];
let activeCategoryTab = '전체';
let activeDealTab = '전체';
let activeTrendFilter = '전체';
let originalImageData = null;
let pendingMarketBlob = null;

function uid() {
  return (crypto.randomUUID) ? crypto.randomUUID() : (Date.now().toString(36) + Math.random().toString(36).slice(2, 8));
}

const connectionStatus = document.getElementById('connection-status');
function showFatalStatus(message) {
  connectionStatus.textContent = message;
  connectionStatus.hidden = false;
}

/* =========================================================
   Auth — 이메일 로그인, 1시간 세션 후 자동 로그아웃
   ========================================================= */
const SESSION_DURATION_MS = 60 * 60 * 1000; // 1시간
const LOGIN_AT_KEY = 'closetday-login-at';

let autoLogoutTimer = null;
let sessionTimerInterval = null;

const authGate = document.getElementById('auth-gate');
const authLoginForm = document.getElementById('auth-login-form');
const authSignupForm = document.getElementById('auth-signup-form');
const authMessage = document.getElementById('auth-message');
const authUpgradeNote = document.getElementById('auth-upgrade-note');
const logoutBtn = document.getElementById('logout-btn');
const sessionTimerEl = document.getElementById('session-timer');

function getLoginTimestamp() {
  const v = localStorage.getItem(LOGIN_AT_KEY);
  return v ? Number(v) : null;
}
function setLoginTimestamp() {
  localStorage.setItem(LOGIN_AT_KEY, String(Date.now()));
}
function clearLoginTimestamp() {
  localStorage.removeItem(LOGIN_AT_KEY);
}

function showAuthMessage(text, isSuccess) {
  authMessage.textContent = text;
  authMessage.hidden = false;
  authMessage.classList.toggle('is-success', !!isSuccess);
}

document.querySelectorAll('.auth-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('is-active', t === tab));
    authLoginForm.hidden = tab.dataset.authTab !== 'login';
    authSignupForm.hidden = tab.dataset.authTab !== 'signup';
    authMessage.hidden = true;
  });
});

function showAuthGate() {
  authGate.hidden = false;
  logoutBtn.hidden = true;
  sessionTimerEl.hidden = true;
}
function hideAuthGate() {
  authGate.hidden = true;
  logoutBtn.hidden = false;
  sessionTimerEl.hidden = false;
}

function updateSessionTimerDisplay() {
  const loginAt = getLoginTimestamp();
  if (!loginAt) { sessionTimerEl.textContent = ''; return; }
  const remainingMs = loginAt + SESSION_DURATION_MS - Date.now();
  if (remainingMs <= 0) { sessionTimerEl.textContent = ''; return; }
  const mins = Math.floor(remainingMs / 60000);
  const secs = Math.floor((remainingMs % 60000) / 1000);
  sessionTimerEl.textContent = `⏱ ${mins}:${String(secs).padStart(2, '0')}`;
}

function scheduleAutoLogout() {
  if (autoLogoutTimer) clearTimeout(autoLogoutTimer);
  if (sessionTimerInterval) clearInterval(sessionTimerInterval);

  const loginAt = getLoginTimestamp();
  if (!loginAt) return;
  const remaining = loginAt + SESSION_DURATION_MS - Date.now();
  if (remaining <= 0) {
    forceLogout('1시간이 지나 자동으로 로그아웃됐어요. 다시 로그인해주세요.');
    return;
  }
  autoLogoutTimer = setTimeout(() => forceLogout('1시간이 지나 자동으로 로그아웃됐어요. 다시 로그인해주세요.'), remaining);
  updateSessionTimerDisplay();
  sessionTimerInterval = setInterval(updateSessionTimerDisplay, 1000);
}

async function forceLogout(message) {
  clearLoginTimestamp();
  if (autoLogoutTimer) { clearTimeout(autoLogoutTimer); autoLogoutTimer = null; }
  if (sessionTimerInterval) { clearInterval(sessionTimerInterval); sessionTimerInterval = null; }
  try { await sb.auth.signOut(); } catch (e) { /* ignore */ }
  currentUserId = null;
  showAuthGate();
  authMessage.hidden = true;
  document.querySelector('.auth-tab[data-auth-tab="login"]').click();
  if (message) showAuthMessage(message, false);
}

logoutBtn.addEventListener('click', () => forceLogout(null));

async function onAuthSuccess(userId) {
  currentUserId = userId;
  setLoginTimestamp();
  scheduleAutoLogout();
  hideAuthGate();
  await loadAppData();
}

authLoginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = authLoginForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = '로그인 중...';
  authMessage.hidden = true;
  try {
    const email = document.getElementById('auth-login-email').value.trim();
    const password = document.getElementById('auth-login-password').value;
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error) throw error;
    await onAuthSuccess(data.user.id);
  } catch (err) {
    console.error(err);
    showAuthMessage(err.message === 'Invalid login credentials' ? '이메일 또는 비밀번호가 올바르지 않아요.' : ('로그인에 실패했어요: ' + err.message), false);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = '로그인';
  }
});

authSignupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = authSignupForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = '가입 중...';
  authMessage.hidden = true;
  try {
    const email = document.getElementById('auth-signup-email').value.trim();
    const password = document.getElementById('auth-signup-password').value;

    // 이 브라우저에 이미 익명 세션(기존 테스트 데이터)이 있으면, 새로 가입하지 않고
    // 같은 uid를 유지한 채 이메일/비밀번호를 연결해서(업그레이드) 데이터를 그대로 이어가요.
    const { data: { session: existingSession } } = await sb.auth.getSession();
    if (existingSession && existingSession.user.is_anonymous) {
      const { data, error } = await sb.auth.updateUser({ email, password });
      if (error) throw error;
      // 프로젝트에 이메일 확인이 켜져 있으면 별도로 확인 메일이 발송돼요.
      // 지금 세션은 이미 로그인된 상태라 바로 앱을 계속 쓸 수 있어요.
      await onAuthSuccess(data.user.id);
      return;
    }

    const { data, error } = await sb.auth.signUp({ email, password });
    if (error) throw error;
    if (!data.session) {
      showAuthMessage('가입 확인 이메일을 보냈어요. 이메일함에서 링크를 눌러 인증을 완료한 뒤 로그인해주세요.', true);
      document.querySelector('.auth-tab[data-auth-tab="login"]').click();
      return;
    }
    await onAuthSuccess(data.user.id);
  } catch (err) {
    console.error(err);
    showAuthMessage('회원가입에 실패했어요: ' + err.message, false);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = '회원가입';
  }
});

async function initAuth() {
  const { data: { session } } = await sb.auth.getSession();
  const loginAt = getLoginTimestamp();
  const withinWindow = loginAt && (Date.now() - loginAt) < SESSION_DURATION_MS;

  if (session && !session.user.is_anonymous && withinWindow) {
    currentUserId = session.user.id;
    scheduleAutoLogout();
    hideAuthGate();
    return true;
  }

  // 세션이 있는데 시간이 지났으면 정리
  if (session && !session.user.is_anonymous && !withinWindow) {
    await sb.auth.signOut();
    clearLoginTimestamp();
  }

  // 익명 세션(예전 테스트 데이터)이 남아있으면 회원가입 시 이어받을 수 있다고 안내
  if (session && session.user.is_anonymous) {
    authUpgradeNote.hidden = false;
    document.querySelector('.auth-tab[data-auth-tab="signup"]').click();
  }

  showAuthGate();
  return false;
}

/* =========================================================
   View switching (home / styling / closet / market)
   ========================================================= */
function switchView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.toggle('is-active', v.id === `view-${name}`));
  document.querySelectorAll('.top-nav-link, .bottom-tab').forEach(b => b.classList.toggle('is-active', b.dataset.view === name));
  window.scrollTo({ top: 0, behavior: 'auto' });
}
document.querySelectorAll('[data-view]').forEach(btn => {
  btn.addEventListener('click', () => switchView(btn.dataset.view));
});
document.querySelectorAll('[data-nav]').forEach(btn => {
  btn.addEventListener('click', (e) => { e.preventDefault(); switchView(btn.dataset.nav); });
});

/* ---- about modal ---- */
const aboutModal = document.getElementById('about-modal');
document.getElementById('about-open-btn').addEventListener('click', () => { aboutModal.hidden = false; });
document.getElementById('about-open-btn-2').addEventListener('click', () => { aboutModal.hidden = false; });
document.getElementById('about-close-btn').addEventListener('click', () => { aboutModal.hidden = true; });
aboutModal.addEventListener('click', (e) => { if (e.target === aboutModal) aboutModal.hidden = true; });

/* =========================================================
   Home — trend feed
   ========================================================= */
const trendMasonry = document.getElementById('trend-masonry');
const trendFilterRow = document.getElementById('trend-filter-row');

trendFilterRow.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-chip');
  if (!btn) return;
  activeTrendFilter = btn.dataset.tpo;
  trendFilterRow.querySelectorAll('.filter-chip').forEach(b => b.classList.toggle('is-active', b === btn));
  renderTrendMasonry();
});

function renderTrendMasonry() {
  const list = activeTrendFilter === '전체' ? TREND_LOOKS : TREND_LOOKS.filter(l => l.tpo.includes(activeTrendFilter));
  trendMasonry.innerHTML = '';
  list.forEach(look => {
    const card = document.createElement('div');
    card.className = 'trend-card';
    card.dataset.id = look.id;
    card.innerHTML = `
      <img src="${look.img}" alt="${look.title}" loading="lazy">
      <div class="trend-card-body">
        <span class="trend-card-tag">${look.tpo[0]}</span>
        <h4>${look.title}</h4>
        <p>${look.subtitle}</p>
      </div>
    `;
    card.addEventListener('click', () => openQuickView(look));
    trendMasonry.appendChild(card);
  });
}

/* ---- 2026 트렌드 코디 (LOOKCODI에서 통합) ---- */
const trend2026Grid = document.getElementById('trend2026-grid');
function renderTrend2026Grid() {
  trend2026Grid.innerHTML = '';
  TREND_2026.forEach(outfit => {
    const itemRows = outfit.items.map(item => `
      <div class="outfit-item-row">
        <div class="outfit-item-thumb"><span class="swatch-dot" style="background:${item.color}"></span></div>
        <div class="outfit-item-info">
          <p class="outfit-item-cat">${CATEGORY_LABEL_KO[item.category] || '아이템'}</p>
          <p class="outfit-item-desc">${item.name}</p>
        </div>
      </div>
    `).join('');
    const shopLinks = buildShopLinks(outfit.keyword)
      .map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="trend2026-shop-link">${l.name}</a>`)
      .join('');

    const card = document.createElement('article');
    card.className = 'outfit-card trend2026-card';
    card.innerHTML = `
      <div class="outfit-card-head">
        <h3>${outfit.title}</h3>
        <span class="outfit-source-badge is-trend">🔥 2026 트렌드</span>
      </div>
      <div class="outfit-meta-tags"><span>${outfit.styleTag}</span></div>
      <p class="trend2026-note">${outfit.trendNote}</p>
      <p class="outfit-fallback-note" style="background:none; padding:0;">${outfit.description}</p>
      ${itemRows}
      <div class="trend2026-shop-row">${shopLinks}</div>
    `;
    trend2026Grid.appendChild(card);
  });
}

/* ---- 요즘 뜨는 아이템 ---- */
const trendingStrip = document.getElementById('trending-strip');
function renderTrendingStrip() {
  trendingStrip.innerHTML = '';
  TRENDING_ITEMS.forEach(item => {
    const card = document.createElement('a');
    card.className = 'trending-item-card';
    card.href = buildShopLink(item.name);
    card.target = '_blank';
    card.rel = 'noopener';
    card.innerHTML = `
      <div class="trending-item-thumb">
        <span class="trending-item-badge">${item.badge}</span>
        <img src="${item.img}" alt="${item.name}" loading="lazy">
      </div>
      <div class="trending-item-body">
        <h5>${item.name}</h5>
        <p>${item.note}</p>
      </div>
    `;
    trendingStrip.appendChild(card);
  });
}

/* ---- 시즌 스페셜 ---- */
const seasonalStrip = document.getElementById('seasonal-strip');
function renderSeasonalStrip() {
  seasonalStrip.innerHTML = '';
  SEASONAL_SPECIALS.forEach(item => {
    const card = document.createElement('div');
    card.className = 'seasonal-card';
    card.innerHTML = `
      <div class="seasonal-card-thumb">
        <span class="seasonal-card-badge">${item.badgeLabel}</span>
        <span class="seasonal-card-icon">${item.icon}</span>
      </div>
      <div class="seasonal-card-body">
        <h5>${item.title}</h5>
        <p>${item.subtitle}</p>
      </div>
    `;
    card.addEventListener('click', () => openQuickView(item));
    seasonalStrip.appendChild(card);
  });
}

/* ---- 베스트 컬러 조합 ---- */
const paletteStrip = document.getElementById('palette-strip');
function renderPaletteStrip() {
  paletteStrip.innerHTML = '';
  COLOR_PALETTES.forEach(pal => {
    const card = document.createElement('div');
    card.className = 'palette-card';
    const swatches = pal.colors.map(hex => `<button type="button" style="background:${hex}" data-hex="${hex}" title="${hex} 복사하기" aria-label="${hex} 색상코드 복사"></button>`).join('');
    card.innerHTML = `
      <div class="palette-swatch-row">${swatches}</div>
      <h5>${pal.name}</h5>
      <p>${pal.desc}</p>
    `;
    card.querySelectorAll('.palette-swatch-row button').forEach(btn => {
      btn.addEventListener('click', () => {
        const hex = btn.dataset.hex;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(hex).catch(() => {});
        }
      });
    });
    paletteStrip.appendChild(card);
  });
}

/* ---- quick view modal ---- */
const quickviewModal = document.getElementById('quickview-modal');
const quickviewBody = document.getElementById('quickview-body');
document.getElementById('quickview-close-btn').addEventListener('click', () => { quickviewModal.hidden = true; });
quickviewModal.addEventListener('click', (e) => { if (e.target === quickviewModal) quickviewModal.hidden = true; });

function openQuickView(look) {
  const itemRows = look.items.map(item => `
    <div class="outfit-item-row">
      <div class="outfit-item-thumb"><span class="swatch-dot" style="background:${item.color}"></span></div>
      <div class="outfit-item-info">
        <p class="outfit-item-cat">아이템</p>
        <p class="outfit-item-desc">${item.name}</p>
      </div>
      <a class="outfit-item-shop" href="${buildShopLink(item.name)}" target="_blank" rel="noopener">쇼핑 →</a>
    </div>
  `).join('');

  const photoBlock = look.img
    ? `<div class="qv-photo"><img src="${look.img}" alt="${look.title}"></div>`
    : `<div class="qv-photo qv-photo-icon">${look.icon || '👗'}</div>`;

  quickviewBody.innerHTML = `
    ${photoBlock}
    <span class="qv-tag">${look.tpo[0]} · ${look.mood[0]}</span>
    <h3 class="qv-title">${look.title}</h3>
    <p class="qv-sub">${look.subtitle}</p>
    ${itemRows}
    <button type="button" class="btn btn-primary btn-block" id="qv-recommend-btn" style="margin-top:18px;">이 무드로 맞춤 코디 받기</button>
  `;
  quickviewModal.hidden = false;

  document.getElementById('qv-recommend-btn').addEventListener('click', () => {
    quickviewModal.hidden = true;
    document.getElementById(`wizard-tpo-${tpoToSlug(look.tpo[0])}`)?.click();
    const seasonEl = document.querySelector(`input[name="wizard-season"][value="${look.season[0]}"]`);
    if (seasonEl) seasonEl.checked = true;
    const moodEl = document.querySelector(`input[name="wizard-mood"][value="${look.mood[0]}"]`);
    if (moodEl) moodEl.checked = true;
    switchView('styling');
    renderOutfit(getWizardContext());
  });
}

function tpoToSlug(tpo) {
  return { '데일리': 'daily', '오피스': 'office', '모임·데이트': 'date', '운동': 'active', '포멀': 'formal' }[tpo] || 'daily';
}

/* =========================================================
   Styling wizard — the core personalized recommendation
   ========================================================= */
const weatherBtn = document.getElementById('weather-auto-btn');
const weatherStatus = document.getElementById('weather-status');
const generateOutfitBtn = document.getElementById('generate-outfit-btn');
const outfitResult = document.getElementById('outfit-result');

function mapTempToSeason(temp) {
  if (temp >= 26) return '여름';
  if (temp >= 17) return '봄';
  if (temp >= 6) return '가을';
  return '겨울';
}
function weatherCodeNote(code) {
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return ' 비가 올 수 있어요, 방수 아우터나 우산을 챙기세요.';
  if (code >= 71 && code <= 77) return ' 눈이 올 수 있어요, 미끄럼 방지 신발을 추천해요.';
  if (code >= 95) return ' 천둥/번개가 있을 수 있어요, 외출 시 주의하세요.';
  return '';
}

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
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        if (!res.ok) throw new Error('weather request failed');
        const data = await res.json();
        const temp = Math.round(data.current_weather.temperature);
        const code = data.current_weather.weathercode;
        const season = mapTempToSeason(temp);
        const radio = document.querySelector(`input[name="wizard-season"][value="${season}"]`);
        if (radio) radio.checked = true;
        weatherStatus.textContent = `현재 위치 기온 ${temp}°C → '${season}'으로 자동 설정했어요.${weatherCodeNote(code)}`;
      } catch (err) {
        weatherStatus.textContent = '날씨 정보를 가져오지 못했어요. 직접 선택해주세요.';
      }
    },
    () => { weatherStatus.textContent = '위치 권한이 거부되었어요. 직접 선택해주세요.'; },
    { timeout: 8000 }
  );
});

function getWizardContext() {
  return {
    season: document.querySelector('input[name="wizard-season"]:checked').value,
    tpo: document.querySelector('input[name="wizard-tpo"]:checked').value,
    mood: document.querySelector('input[name="wizard-mood"]:checked').value,
    personalColor: document.querySelector('input[name="wizard-pc"]:checked').value || null,
  };
}

generateOutfitBtn.addEventListener('click', () => renderOutfit(getWizardContext()));

function itemMatchesContext(item, ctx) {
  const seasonOk = item.seasons.length === 0 || item.seasons.includes(ctx.season);
  const tpoOk = item.tpo.length === 0 || item.tpo.includes(ctx.tpo);
  const moodOk = item.mood.length === 0 || item.mood.includes(ctx.mood);
  const pcOk = !ctx.personalColor || !item.personalColor || item.personalColor === ctx.personalColor;
  return seasonOk && tpoOk && moodOk && pcOk;
}

function pickForCategory(category, ctx, excludeId) {
  const byCat = closetItems.filter(i => i.category === category);
  if (byCat.length === 0) return null;

  const tiers = [
    byCat.filter(i => itemMatchesContext(i, ctx)),
    byCat.filter(i => (i.seasons.length === 0 || i.seasons.includes(ctx.season)) && (i.tpo.length === 0 || i.tpo.includes(ctx.tpo))),
    byCat.filter(i => i.seasons.length === 0 || i.seasons.includes(ctx.season)),
    byCat.filter(i => i.tpo.length === 0 || i.tpo.includes(ctx.tpo)),
    byCat,
  ];
  for (const tier of tiers) {
    if (tier.length === 0) continue;
    const pool = tier.filter(i => i.id !== excludeId);
    const finalPool = pool.length > 0 ? pool : tier;
    return finalPool[Math.floor(Math.random() * finalPool.length)];
  }
  return null;
}

function pickTrendLook(ctx) {
  const tiers = [
    TREND_LOOKS.filter(l => l.tpo.includes(ctx.tpo) && l.season.includes(ctx.season) && l.mood.includes(ctx.mood)),
    TREND_LOOKS.filter(l => l.tpo.includes(ctx.tpo) && l.season.includes(ctx.season)),
    TREND_LOOKS.filter(l => l.tpo.includes(ctx.tpo)),
    TREND_LOOKS,
  ];
  for (const tier of tiers) {
    if (tier.length > 0) return tier[Math.floor(Math.random() * tier.length)];
  }
  return null;
}

function renderOutfit(ctx) {
  const needCategories = ['상의', '하의', '신발'];
  if (ctx.season === '가을' || ctx.season === '겨울') needCategories.push('아우터');
  const haveEnough = needCategories.every(cat => closetItems.some(i => i.category === cat));

  if (closetItems.length > 0 && haveEnough) {
    renderClosetOutfit(needCategories, ctx);
  } else {
    renderTrendFallbackOutfit(ctx);
  }
}

function renderClosetOutfit(needCategories, ctx) {
  const picked = {};
  needCategories.forEach(cat => { picked[cat] = pickForCategory(cat, ctx, null); });
  const accessoryPool = closetItems.filter(i => i.category === '액세서리' && itemMatchesContext(i, ctx));
  if (accessoryPool.length > 0) picked['액세서리'] = accessoryPool[Math.floor(Math.random() * accessoryPool.length)];

  const rows = Object.entries(picked).filter(([, item]) => item).map(([cat, item]) => `
    <div class="outfit-item-row">
      <div class="outfit-item-thumb"><img src="${item.img}" alt="${cat}"></div>
      <div class="outfit-item-info">
        <p class="outfit-item-cat">${cat}</p>
        <p class="outfit-item-desc">${(item.mood[0] || item.seasons[0] || '사계절')} 아이템</p>
      </div>
    </div>
  `).join('');
  const tryonNames = Object.entries(picked).filter(([, item]) => item).map(([cat, item]) => `${cat}(${item.mood[0] || item.seasons[0] || '사계절'} 아이템)`);

  outfitResult.innerHTML = `
    <div class="outfit-card">
      <div class="outfit-card-head">
        <h3>오늘의 추천 코디</h3>
        <span class="outfit-source-badge">내 옷장 코디</span>
      </div>
      <div class="outfit-meta-tags"><span>${ctx.season}</span><span>${ctx.tpo}</span><span>${ctx.mood}</span>${ctx.personalColor ? `<span>${ctx.personalColor}</span>` : ''}</div>
      ${rows}
      ${fitTipHtml()}
      ${tryonTriggerHtml(tryonNames)}
    </div>
    <div class="regenerate-row"><button type="button" id="regenerate-outfit-btn" class="btn btn-outline">다른 조합 더 보기</button></div>
  `;
  document.getElementById('regenerate-outfit-btn').addEventListener('click', () => renderOutfit(ctx));
}

function renderTrendFallbackOutfit(ctx) {
  const look = pickTrendLook(ctx);
  if (!look) {
    outfitResult.innerHTML = `<div class="outfit-hint-card">추천할 스타일을 찾지 못했어요. 다른 조건으로 다시 시도해보세요.</div>`;
    return;
  }
  const itemRows = look.items.map(item => `
    <div class="outfit-item-row">
      <div class="outfit-item-thumb"><span class="swatch-dot" style="background:${item.color}"></span></div>
      <div class="outfit-item-info">
        <p class="outfit-item-cat">아이템</p>
        <p class="outfit-item-desc">${item.name}</p>
      </div>
      <a class="outfit-item-shop" href="${buildShopLink(item.name)}" target="_blank" rel="noopener">쇼핑 →</a>
    </div>
  `).join('');

  outfitResult.innerHTML = `
    <div class="outfit-card">
      <div class="outfit-card-head">
        <h3>${look.title}</h3>
        <span class="outfit-source-badge is-trend">추천 스타일</span>
      </div>
      <div class="outfit-meta-tags"><span>${ctx.season}</span><span>${ctx.tpo}</span><span>${ctx.mood}</span></div>
      <div class="outfit-look-photo"><img src="${look.img}" alt="${look.title}"></div>
      ${itemRows}
      <p class="outfit-fallback-note">내 옷장에 조건에 맞는 옷이 아직 부족해서 트렌드 스타일로 대신 보여드려요. <a href="#" id="fallback-closet-link">내 옷장</a>에 옷을 채워두면 더 정확하게 추천받을 수 있어요.</p>
      ${fitTipHtml()}
      ${tryonTriggerHtml(look.items.map(i => i.name))}
    </div>
    <div class="regenerate-row"><button type="button" id="regenerate-outfit-btn" class="btn btn-outline">다른 조합 더 보기</button></div>
  `;
  document.getElementById('regenerate-outfit-btn').addEventListener('click', () => renderOutfit(ctx));
  document.getElementById('fallback-closet-link').addEventListener('click', (e) => { e.preventDefault(); switchView('closet'); });
}

/* =========================================================
   Closet — upload + background removal
   ========================================================= */
const fileInput = document.getElementById('closet-file-input');
const previewWrap = document.getElementById('upload-preview-wrap');
const canvasOriginal = document.getElementById('canvas-original');
const canvasResult = document.getElementById('canvas-result');
const toleranceSlider = document.getElementById('tolerance-slider');
const toleranceValue = document.getElementById('tolerance-value');
const closetMetaForm = document.getElementById('closet-meta-form');
const closetResetBtn = document.getElementById('closet-reset-btn');
const closetSubmitBtn = closetMetaForm.querySelector('button[type="submit"]');

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) loadImageToCanvas(file);
});

closetResetBtn.addEventListener('click', () => {
  previewWrap.hidden = true;
  fileInput.value = '';
  originalImageData = null;
});

toleranceSlider.addEventListener('input', () => {
  toleranceValue.textContent = toleranceSlider.value;
  if (originalImageData) runBackgroundRemoval();
});

function loadImageToCanvas(file) {
  const reader = new FileReader();
  reader.onload = (ev) => {
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, MAX_IMG_DIM / Math.max(img.width, img.height));
      const w = Math.round(img.width * scale);
      const h = Math.round(img.height * scale);
      canvasOriginal.width = w; canvasOriginal.height = h;
      canvasResult.width = w; canvasResult.height = h;
      const ctxOriginal = canvasOriginal.getContext('2d');
      ctxOriginal.clearRect(0, 0, w, h);
      ctxOriginal.drawImage(img, 0, 0, w, h);
      originalImageData = ctxOriginal.getImageData(0, 0, w, h);
      previewWrap.hidden = false;
      runBackgroundRemoval();
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}

function runBackgroundRemoval() {
  const w = originalImageData.width;
  const h = originalImageData.height;
  const tolerance = Number(toleranceSlider.value);
  const tolSq = tolerance * tolerance;
  const src = originalImageData.data;
  const out = new Uint8ClampedArray(src);
  const visited = new Uint8Array(w * h);
  const queue = new Int32Array(w * h);
  let qHead = 0, qTail = 0;

  function idx(x, y) { return y * w + x; }
  function enqueue(x, y) {
    const i = idx(x, y);
    if (!visited[i]) { visited[i] = 1; queue[qTail++] = i; }
  }
  for (let x = 0; x < w; x++) { enqueue(x, 0); enqueue(x, h - 1); }
  for (let y = 0; y < h; y++) { enqueue(0, y); enqueue(w - 1, y); }

  while (qHead < qTail) {
    const i = queue[qHead++];
    const x = i % w;
    const y = (i / w) | 0;
    const p = i * 4;
    out[p + 3] = 0;
    const r = src[p], g = src[p + 1], b = src[p + 2];
    const neighbors = [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]];
    for (const [nx, ny] of neighbors) {
      if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
      const ni = idx(nx, ny);
      if (visited[ni]) continue;
      const np = ni * 4;
      const dr = src[np] - r, dg = src[np + 1] - g, db = src[np + 2] - b;
      if (dr * dr + dg * dg + db * db <= tolSq) enqueue(nx, ny);
    }
  }

  const resultData = new ImageData(out, w, h);
  const ctxResult = canvasResult.getContext('2d');
  ctxResult.clearRect(0, 0, w, h);
  ctxResult.putImageData(resultData, 0, 0);
}

closetMetaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!originalImageData || !currentUserId) return;

  const category = closetMetaForm.querySelector('input[name="closet-category"]:checked').value;
  const seasons = Array.from(closetMetaForm.querySelectorAll('input[name="closet-season"]:checked')).map(el => el.value);
  const tpo = Array.from(closetMetaForm.querySelectorAll('input[name="closet-tpo"]:checked')).map(el => el.value);
  const mood = Array.from(closetMetaForm.querySelectorAll('input[name="closet-mood"]:checked')).map(el => el.value);
  const personalColor = closetMetaForm.querySelector('input[name="closet-pc"]:checked').value || null;

  closetSubmitBtn.disabled = true;
  closetSubmitBtn.textContent = '저장 중...';

  canvasResult.toBlob(async (blob) => {
    try {
      const path = `${currentUserId}/${uid()}.png`;
      const { error: uploadErr } = await sb.storage.from('closet-images').upload(path, blob, { contentType: 'image/png' });
      if (uploadErr) throw uploadErr;

      const { error: insertErr } = await sb.from('closet_items').insert({
        owner_id: currentUserId, category, seasons, tpo, mood, personal_color: personalColor, image_path: path,
      });
      if (insertErr) throw insertErr;

      previewWrap.hidden = true;
      fileInput.value = '';
      originalImageData = null;
      closetMetaForm.reset();
      closetMetaForm.querySelector('#cat-top').checked = true;
      closetMetaForm.querySelector('#pc-none').checked = true;

      await loadClosetItems();
      renderClosetGallery();
    } catch (err) {
      console.error(err);
      alert('옷장에 저장하지 못했어요: ' + err.message);
    } finally {
      closetSubmitBtn.disabled = false;
      closetSubmitBtn.textContent = '옷장에 추가하기';
    }
  }, 'image/png');
});

async function loadClosetItems() {
  const { data, error } = await sb.from('closet_items').select('*').order('created_at', { ascending: false });
  if (error) { console.error(error); closetItems = []; return; }

  closetItems = await Promise.all(data.map(async (row) => {
    let img = '';
    if (row.image_path) {
      const { data: signed } = await sb.storage.from('closet-images').createSignedUrl(row.image_path, 3600);
      img = signed ? signed.signedUrl : '';
    }
    return {
      id: row.id, category: row.category,
      seasons: row.seasons || [], tpo: row.tpo || [], mood: row.mood || [],
      personalColor: row.personal_color || null,
      img, imagePath: row.image_path, createdAt: new Date(row.created_at).getTime(),
    };
  }));
}

const categoryTabs = document.getElementById('category-tabs');
const closetGallery = document.getElementById('closet-gallery');
const closetEmpty = document.getElementById('closet-empty');

categoryTabs.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-chip');
  if (!btn) return;
  activeCategoryTab = btn.dataset.cat;
  categoryTabs.querySelectorAll('.filter-chip').forEach(b => b.classList.toggle('is-active', b === btn));
  renderClosetGallery();
});

function renderClosetGallery() {
  const list = activeCategoryTab === '전체' ? closetItems : closetItems.filter(i => i.category === activeCategoryTab);
  closetGallery.innerHTML = '';
  closetEmpty.hidden = list.length > 0;
  if (closetItems.length === 0) {
    closetEmpty.textContent = '아직 등록된 옷이 없어요. 왼쪽에서 사진을 올려 첫 옷을 등록해보세요 🧺';
  } else if (list.length === 0) {
    closetEmpty.textContent = '이 카테고리에는 아직 옷이 없어요.';
  }

  list.forEach(item => {
    const card = document.createElement('div');
    card.className = 'closet-item-card';
    const tagText = [...item.seasons, ...item.tpo, ...item.mood].join(' · ') || '사계절 · 모든 상황';
    card.innerHTML = `
      <button type="button" class="item-delete-btn" data-id="${item.id}" aria-label="삭제">✕</button>
      <div class="closet-item-thumb"><img src="${item.img}" alt="${item.category}"></div>
      <div class="closet-item-body">
        <p class="closet-item-cat">${item.category}</p>
        <p class="closet-item-tags">${tagText}</p>
      </div>
    `;
    closetGallery.appendChild(card);
  });

  closetGallery.querySelectorAll('.item-delete-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      btn.disabled = true;
      const item = closetItems.find(i => i.id === btn.dataset.id);
      try {
        if (item && item.imagePath) await sb.storage.from('closet-images').remove([item.imagePath]);
        await sb.from('closet_items').delete().eq('id', btn.dataset.id);
        await loadClosetItems();
        renderClosetGallery();
      } catch (err) {
        console.error(err);
        alert('삭제하지 못했어요: ' + err.message);
        btn.disabled = false;
      }
    });
  });
}

/* =========================================================
   Neighborhood C2C market
   ========================================================= */
const marketForm = document.getElementById('market-form');
const marketFileInput = document.getElementById('market-file-input');
const marketPhotoStatus = document.getElementById('market-photo-status');
const priceRow = document.getElementById('price-row');
const marketGrid = document.getElementById('market-grid');
const marketEmpty = document.getElementById('market-empty');
const dealFilterRow = document.getElementById('deal-filter-row');
const locationFilter = document.getElementById('location-filter');
const urgentFilter = document.getElementById('urgent-filter');
const marketSubmitBtn = marketForm.querySelector('button[type="submit"]');

marketForm.querySelectorAll('input[name="market-dealtype"]').forEach(el => {
  el.addEventListener('change', () => {
    priceRow.style.display = el.value === '나눔' && el.checked ? 'none' : 'flex';
  });
});

marketFileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, MAX_IMG_DIM / Math.max(img.width, img.height));
      const w = Math.round(img.width * scale);
      const h = Math.round(img.height * scale);
      const c = document.createElement('canvas');
      c.width = w; c.height = h;
      c.getContext('2d').drawImage(img, 0, 0, w, h);
      c.toBlob((blob) => {
        pendingMarketBlob = blob;
        marketPhotoStatus.textContent = '사진이 첨부됐어요 ✓';
      }, 'image/jpeg', 0.85);
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
});

marketForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!currentUserId) return;

  const dealType = marketForm.querySelector('input[name="market-dealtype"]:checked').value;
  const title = document.getElementById('market-title').value.trim();
  const location = document.getElementById('market-location').value.trim();
  if (!title || !location) return;

  marketSubmitBtn.disabled = true;
  marketSubmitBtn.textContent = '등록 중...';

  try {
    let imagePath = null;
    if (pendingMarketBlob) {
      imagePath = `${currentUserId}/${uid()}.jpg`;
      const { error: uploadErr } = await sb.storage.from('market-images').upload(imagePath, pendingMarketBlob, { contentType: 'image/jpeg' });
      if (uploadErr) throw uploadErr;
    }
    const { error: insertErr } = await sb.from('market_items').insert({
      owner_id: currentUserId, title,
      category: marketForm.querySelector('input[name="market-category"]:checked').value,
      deal_type: dealType,
      price: dealType === '나눔' ? 0 : Number(document.getElementById('market-price').value) || 0,
      condition: marketForm.querySelector('input[name="market-condition"]:checked').value,
      location, description: document.getElementById('market-desc').value.trim(),
      urgent: document.getElementById('market-urgent').checked, image_path: imagePath,
    });
    if (insertErr) throw insertErr;

    marketForm.reset();
    pendingMarketBlob = null;
    marketPhotoStatus.textContent = '';
    priceRow.style.display = 'flex';
    await loadMarketItems();
    renderMarketGrid();
  } catch (err) {
    console.error(err);
    alert('동네 옷장에 올리지 못했어요: ' + err.message);
  } finally {
    marketSubmitBtn.disabled = false;
    marketSubmitBtn.textContent = '동네 옷장에 올리기';
  }
});

dealFilterRow.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-chip');
  if (!btn) return;
  activeDealTab = btn.dataset.deal;
  dealFilterRow.querySelectorAll('.filter-chip').forEach(b => b.classList.toggle('is-active', b === btn));
  renderMarketGrid();
});
locationFilter.addEventListener('input', renderMarketGrid);
urgentFilter.addEventListener('change', renderMarketGrid);

function timeAgo(ts) {
  const diffMin = Math.floor((Date.now() - ts) / 60000);
  if (diffMin < 1) return '방금 전';
  if (diffMin < 60) return `${diffMin}분 전`;
  const diffHour = Math.floor(diffMin / 60);
  if (diffHour < 24) return `${diffHour}시간 전`;
  return `${Math.floor(diffHour / 24)}일 전`;
}

async function loadMarketItems() {
  const { data, error } = await sb.from('market_items').select('*').order('created_at', { ascending: false });
  if (error) { console.error(error); marketItems = []; return; }

  marketItems = data.map(row => {
    let img = '';
    if (row.image_path) {
      const { data: pub } = sb.storage.from('market-images').getPublicUrl(row.image_path);
      img = pub ? pub.publicUrl : '';
    }
    return {
      id: row.id, title: row.title, category: row.category, dealType: row.deal_type, price: row.price,
      condition: row.condition, location: row.location, desc: row.description || '', urgent: row.urgent,
      img, imagePath: row.image_path, ownerId: row.owner_id, createdAt: new Date(row.created_at).getTime(),
    };
  });
}

function renderMarketGrid() {
  const locQuery = locationFilter.value.trim();
  const urgentOnly = urgentFilter.checked;

  const list = marketItems.filter(item => {
    if (activeDealTab !== '전체' && item.dealType !== activeDealTab) return false;
    if (locQuery && !item.location.includes(locQuery)) return false;
    if (urgentOnly && !item.urgent) return false;
    return true;
  });

  marketGrid.innerHTML = '';
  marketEmpty.hidden = list.length > 0;
  marketEmpty.textContent = marketItems.length === 0
    ? '아직 동네 옷장에 올라온 옷이 없어요. 첫 옷을 등록해보세요 👗'
    : '조건에 맞는 옷이 아직 없어요.';

  const dealBadgeClass = { 판매: 'badge-sale', 교환: 'badge-exchange', 나눔: 'badge-free' };

  list.forEach(item => {
    const card = document.createElement('div');
    card.className = 'market-card';
    const priceText = item.dealType === '나눔' ? '나눔 무료' : item.dealType === '교환' ? '교환 희망' : `${item.price.toLocaleString()}원`;
    const isMine = item.ownerId === currentUserId;
    card.innerHTML = `
      ${isMine ? `<button type="button" class="item-delete-btn" data-id="${item.id}" aria-label="삭제">✕</button>` : ''}
      <div class="market-card-thumb">${item.img ? `<img src="${item.img}" alt="${item.title}">` : '👕'}</div>
      <div class="market-card-body">
        <div class="market-badge-row">
          <span class="market-badge ${dealBadgeClass[item.dealType]}">${item.dealType}</span>
          ${item.urgent ? '<span class="market-badge badge-urgent">🔥 급해요</span>' : ''}
        </div>
        <h4>${item.title}</h4>
        <p class="market-price">${priceText}</p>
        <p class="market-sub">${item.location} · ${item.condition} · ${timeAgo(item.createdAt)}</p>
        ${item.desc ? `<p class="market-desc">${item.desc}</p>` : ''}
      </div>
    `;
    marketGrid.appendChild(card);
  });

  marketGrid.querySelectorAll('.item-delete-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      btn.disabled = true;
      const item = marketItems.find(i => i.id === btn.dataset.id);
      try {
        if (item && item.imagePath) await sb.storage.from('market-images').remove([item.imagePath]);
        await sb.from('market_items').delete().eq('id', btn.dataset.id);
        await loadMarketItems();
        renderMarketGrid();
      } catch (err) {
        console.error(err);
        alert('삭제하지 못했어요: ' + err.message);
        btn.disabled = false;
      }
    });
  });
}

/* =========================================================
   Style reference board (인플루언서 코디 영상 레퍼런스)
   ========================================================= */
let referenceItems = [];
const referenceForm = document.getElementById('reference-form');
const referenceGrid = document.getElementById('reference-grid');
const referenceEmpty = document.getElementById('reference-empty');

const PLATFORM_ICON = { Instagram: '📸', YouTube: '▶️', TikTok: '🎵', 링크: '🔗' };
function detectPlatform(url) {
  try {
    const host = new URL(url).hostname.replace('www.', '');
    if (host.includes('instagram.com')) return 'Instagram';
    if (host.includes('youtube.com') || host.includes('youtu.be')) return 'YouTube';
    if (host.includes('tiktok.com')) return 'TikTok';
    return '링크';
  } catch (e) {
    return '링크';
  }
}

referenceForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!currentUserId) return;

  const videoUrl = document.getElementById('reference-url').value.trim();
  const title = document.getElementById('reference-title').value.trim();
  if (!videoUrl || !title) return;

  const submitBtn = referenceForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = '등록 중...';

  try {
    const tags = document.getElementById('reference-tags').value
      .split(',').map(t => t.trim()).filter(Boolean);

    const { error } = await sb.from('style_references').insert({
      owner_id: currentUserId,
      video_url: videoUrl,
      platform: detectPlatform(videoUrl),
      title,
      creator_name: document.getElementById('reference-creator').value.trim() || null,
      tags,
    });
    if (error) throw error;

    referenceForm.reset();
    await loadReferences();
    renderReferenceGrid();
  } catch (err) {
    console.error(err);
    alert('레퍼런스를 올리지 못했어요: ' + err.message);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = '레퍼런스 올리기';
  }
});

async function loadReferences() {
  const { data, error } = await sb.from('style_references').select('*').order('created_at', { ascending: false });
  if (error) { console.error(error); referenceItems = []; return; }
  referenceItems = data.map(row => ({
    id: row.id, videoUrl: row.video_url, platform: row.platform, title: row.title,
    creatorName: row.creator_name, tags: row.tags || [], ownerId: row.owner_id,
    createdAt: new Date(row.created_at).getTime(),
  }));
}

function renderReferenceGrid() {
  referenceGrid.innerHTML = '';
  referenceEmpty.hidden = referenceItems.length > 0;

  referenceItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'reference-card';
    const isMine = item.ownerId === currentUserId;
    card.innerHTML = `
      ${isMine ? `<button type="button" class="item-delete-btn" data-id="${item.id}" aria-label="삭제">✕</button>` : ''}
      <a href="${item.videoUrl}" target="_blank" rel="noopener" class="reference-card-thumb">${PLATFORM_ICON[item.platform] || '🔗'}</a>
      <div class="reference-card-body">
        <span class="reference-platform-badge">${item.platform}</span>
        <h4>${item.title}</h4>
        ${item.creatorName ? `<p class="reference-creator">${item.creatorName}</p>` : ''}
        ${item.tags.length ? `<p class="reference-tags">${item.tags.map(t => `#${t}`).join(' ')}</p>` : ''}
      </div>
    `;
    referenceGrid.appendChild(card);
  });

  referenceGrid.querySelectorAll('.item-delete-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      btn.disabled = true;
      try {
        await sb.from('style_references').delete().eq('id', btn.dataset.id);
        await loadReferences();
        renderReferenceGrid();
      } catch (err) {
        console.error(err);
        alert('삭제하지 못했어요: ' + err.message);
        btn.disabled = false;
      }
    });
  });
}

/* =========================================================
   퍼스널 컬러 자가진단 (LOOKCODI에서 통합)
   ========================================================= */
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
const QUIZ_TYPE_TO_PC = { springWarm: '봄 웜톤', autumnWarm: '가을 웜톤', summerCool: '여름 쿨톤', winterCool: '겨울 쿨톤' };

const colorquizToggleBtn = document.getElementById('colorquiz-toggle-btn');
const colorquizPanel = document.getElementById('colorquiz-panel');
const colorquizResult = document.getElementById('colorquiz-result');
const colorquizSubmitBtn = document.getElementById('colorquiz-submit-btn');

colorquizToggleBtn.addEventListener('click', () => {
  colorquizPanel.hidden = !colorquizPanel.hidden;
});

colorquizSubmitBtn.addEventListener('click', () => {
  const answers = ['quiz-vein', 'quiz-metal', 'quiz-white', 'quiz-color']
    .map(name => document.querySelector(`input[name="${name}"]:checked`).value);
  const warmCount = answers.filter(a => a === 'warm').length;
  const group = warmCount >= 2 ? 'warm' : 'cool';
  const mood = document.querySelector('input[name="quiz-mood"]:checked').value;
  const type = group === 'warm' ? (mood === 'soft' ? 'springWarm' : 'autumnWarm') : (mood === 'soft' ? 'summerCool' : 'winterCool');
  renderColorQuizResult(type);
});

function renderColorQuizResult(type) {
  const info = PERSONAL_COLOR_TYPES[type];
  const swatches = info.palette.map(c => `<span class="palette-swatch" style="background:${c}"></span>`).join('');
  colorquizResult.hidden = false;
  colorquizResult.innerHTML = `
    <h4>진단 결과: ${info.label}</h4>
    <p>${info.desc}</p>
    <div class="palette-row">${swatches}</div>
    <p style="margin-top:8px;">✓ ${info.metal} 액세서리가 잘 어울려요.</p>
    <button type="button" class="btn btn-primary btn-small" id="colorquiz-apply-btn" style="margin-top:12px;">이 결과를 마이페이지에 반영하기</button>
  `;
  colorquizResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  document.getElementById('colorquiz-apply-btn').addEventListener('click', () => {
    const target = document.querySelector(`input[name="profile-pc"][value="${QUIZ_TYPE_TO_PC[type]}"]`);
    if (target) target.checked = true;
    alert('프로필에 반영했어요. 아래 "프로필 저장하기" 버튼을 눌러 저장해주세요.');
  });
}

/* =========================================================
   My page — profile & fit tips
   ========================================================= */
let userProfile = null;
const profileForm = document.getElementById('profile-form');
const profileSummary = document.getElementById('profile-summary');

const BODY_TYPE_TIPS = {
  '모래시계형': '허리 라인을 살리는 벨트나 랩 스타일 아이템이 잘 어울려요.',
  '직사각형': '벨트나 레이어드로 허리 라인에 포인트를 주면 좋아요.',
  '역삼각형': '하의는 볼륨감 있는 와이드핏으로 밸런스를 맞춰보세요.',
  '삼각형': '상의에 포인트를 주는 밝은 컬러나 디테일을 더해보세요.',
  '둥근형': '세로 라인을 강조하는 브이넥이나 일자핏이 잘 어울려요.',
};
function fitTipHtml() {
  if (!userProfile || !userProfile.body_type) return '';
  const tip = BODY_TYPE_TIPS[userProfile.body_type];
  return tip ? `<p class="fit-tip-note">💡 ${userProfile.body_type} 체형이시라면, ${tip}</p>` : '';
}

async function loadProfile() {
  const { data, error } = await sb.from('profiles').select('*').eq('owner_id', currentUserId).maybeSingle();
  if (error) { console.error(error); return; }
  userProfile = data;
  fillProfileForm();
  renderProfileSummary();
}

function fillProfileForm() {
  if (!userProfile) return;
  if (userProfile.height) document.getElementById('profile-height').value = userProfile.height;
  if (userProfile.weight) document.getElementById('profile-weight').value = userProfile.weight;
  if (userProfile.age) document.getElementById('profile-age').value = userProfile.age;
  const genderEl = document.querySelector(`input[name="profile-gender"][value="${userProfile.gender || ''}"]`);
  if (genderEl) genderEl.checked = true;
  const bodyEl = document.querySelector(`input[name="profile-bodytype"][value="${userProfile.body_type || ''}"]`);
  if (bodyEl) bodyEl.checked = true;
  const pcEl = document.querySelector(`input[name="profile-pc"][value="${userProfile.personal_color || ''}"]`);
  if (pcEl) pcEl.checked = true;
}

function renderProfileSummary() {
  if (!userProfile || (!userProfile.height && !userProfile.weight && !userProfile.age && !userProfile.body_type && !userProfile.personal_color)) {
    profileSummary.hidden = true;
    return;
  }
  const tip = BODY_TYPE_TIPS[userProfile.body_type];
  const summaryText = [
    userProfile.height ? `${userProfile.height}cm` : null,
    userProfile.weight ? `${userProfile.weight}kg` : null,
    userProfile.age ? `${userProfile.age}세` : null,
    userProfile.gender || null,
    userProfile.body_type || null,
    userProfile.personal_color || null,
  ].filter(Boolean).join(' · ');

  profileSummary.hidden = false;
  profileSummary.innerHTML = `
    <h4>내 프로필</h4>
    <p>${summaryText || '아직 입력한 정보가 없어요'}</p>
    ${tip ? `<p style="margin-top:8px;">💡 ${tip}</p>` : ''}
  `;
}

profileForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!currentUserId) return;
  const submitBtn = profileForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = '저장 중...';
  try {
    const payload = {
      owner_id: currentUserId,
      height: Number(document.getElementById('profile-height').value) || null,
      weight: Number(document.getElementById('profile-weight').value) || null,
      age: Number(document.getElementById('profile-age').value) || null,
      gender: profileForm.querySelector('input[name="profile-gender"]:checked').value || null,
      body_type: profileForm.querySelector('input[name="profile-bodytype"]:checked').value || null,
      personal_color: profileForm.querySelector('input[name="profile-pc"]:checked').value || null,
    };
    const { data, error } = await sb.from('profiles').upsert(payload, { onConflict: 'owner_id' }).select().single();
    if (error) throw error;
    userProfile = data;
    renderProfileSummary();
  } catch (err) {
    console.error(err);
    alert('프로필을 저장하지 못했어요: ' + err.message);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = '프로필 저장하기';
  }
});

/* =========================================================
   AI 코디 착용 이미지 (베타) — Supabase Edge Function 연동
   ========================================================= */
const tryonModal = document.getElementById('tryon-modal');
const tryonBody = document.getElementById('tryon-body');
document.getElementById('tryon-close-btn').addEventListener('click', () => { tryonModal.hidden = true; });
tryonModal.addEventListener('click', (e) => { if (e.target === tryonModal) tryonModal.hidden = true; });

let tryonPhotoBlob = null;

function tryonTriggerHtml(itemNames) {
  const encoded = encodeURIComponent(JSON.stringify(itemNames));
  return `
    <div class="tryon-trigger-row">
      <button type="button" class="btn btn-outline tryon-trigger-btn" data-items="${encoded}">✨ AI로 내 모습에 입혀보기 (베타)</button>
    </div>
  `;
}

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.tryon-trigger-btn');
  if (!btn) return;
  const itemNames = JSON.parse(decodeURIComponent(btn.dataset.items || '[]'));
  openTryOnModal(itemNames);
});

function openTryOnModal(itemNames) {
  tryonPhotoBlob = null;
  const outfitText = itemNames.join(', ');
  tryonBody.innerHTML = `
    <span class="qv-tag">AI 코디 미리보기 · 베타</span>
    <h3 class="qv-title">이 코디, 나한테 입혀볼까요?</h3>
    <p class="qv-sub">전신이 잘 보이는 사진을 올려주세요. 업로드한 사진은 저장되지 않고 이미지 생성에만 일회성으로 사용돼요.</p>
    <label for="tryon-file-input" class="upload-dropzone">
      <span class="upload-icon">＋</span>
      <span class="upload-text">내 사진 올리기</span>
      <span class="upload-subtext">전신 사진일수록 결과가 자연스러워요</span>
    </label>
    <input type="file" id="tryon-file-input" accept="image/*" hidden>
    <div id="tryon-preview-wrap"></div>
    <button type="button" id="tryon-generate-btn" class="btn btn-primary btn-block" style="margin-top:16px;" disabled>AI 코디 이미지 생성하기</button>
    <p class="tryon-privacy-note">Google Gemini로 이미지를 생성해요. 실제 착용 모습과 다를 수 있어요.</p>
  `;
  tryonModal.hidden = false;

  document.getElementById('tryon-file-input').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, 768 / Math.max(img.width, img.height));
        const w = Math.round(img.width * scale);
        const h = Math.round(img.height * scale);
        const c = document.createElement('canvas');
        c.width = w; c.height = h;
        c.getContext('2d').drawImage(img, 0, 0, w, h);
        c.toBlob((blob) => {
          tryonPhotoBlob = blob;
          document.getElementById('tryon-preview-wrap').innerHTML = `<div class="tryon-preview"><img src="${c.toDataURL('image/jpeg', 0.85)}" alt="업로드한 사진"></div>`;
          document.getElementById('tryon-generate-btn').disabled = false;
        }, 'image/jpeg', 0.85);
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  });

  document.getElementById('tryon-generate-btn').addEventListener('click', () => runTryOnGeneration(outfitText));
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function runTryOnGeneration(outfitText) {
  if (!tryonPhotoBlob) return;
  tryonBody.innerHTML = `<div class="tryon-loading">코디를 입혀보는 중이에요...<br>10~20초 정도 걸려요 ✨</div>`;
  try {
    const base64 = await blobToBase64(tryonPhotoBlob);
    const { data, error } = await sb.functions.invoke('generate-tryon', {
      body: { photoBase64: base64, mimeType: 'image/jpeg', outfitText },
    });
    if (error) throw error;
    if (!data || !data.image) throw new Error((data && data.error) || '이미지를 생성하지 못했어요.');

    tryonBody.innerHTML = `
      <span class="qv-tag">AI 코디 미리보기 · 베타</span>
      <h3 class="qv-title">이렇게 어울려요!</h3>
      <div class="tryon-preview"><img src="data:${data.mimeType || 'image/png'};base64,${data.image}" alt="AI 생성 결과"></div>
      <p class="tryon-privacy-note">AI가 생성한 이미지로 실제 착용 모습과 다를 수 있어요.</p>
      <button type="button" class="btn btn-outline btn-block" id="tryon-retry-btn" style="margin-top:12px;">다시 시도하기</button>
    `;
    document.getElementById('tryon-retry-btn').addEventListener('click', () => openTryOnModal(outfitText.split(', ')));
  } catch (err) {
    console.error(err);
    tryonBody.innerHTML = `
      <div class="tryon-error">지금은 이미지를 만들지 못했어요. 잠시 후 다시 시도해주세요.</div>
      <button type="button" class="btn btn-outline btn-block" id="tryon-retry-btn" style="margin-top:12px;">닫기</button>
    `;
    document.getElementById('tryon-retry-btn').addEventListener('click', () => { tryonModal.hidden = true; });
  }
}

/* =========================================================
   init
   ========================================================= */
async function loadAppData() {
  closetEmpty.textContent = '불러오는 중...';
  closetEmpty.hidden = false;
  marketEmpty.textContent = '불러오는 중...';
  marketEmpty.hidden = false;
  referenceEmpty.textContent = '불러오는 중...';
  referenceEmpty.hidden = false;

  await Promise.all([loadClosetItems(), loadMarketItems(), loadProfile(), loadReferences()]);
  renderClosetGallery();
  renderMarketGrid();
  renderReferenceGrid();
}

async function init() {
  // 로그인 여부와 상관없이 홈 피드(트렌드/아이템/컬러)는 바로 보여줘요.
  // 실제로는 로그인 게이트가 화면을 덮고 있어서, 로그인 전엔 보이지 않아요.
  renderTrend2026Grid();
  renderTrendMasonry();
  renderTrendingStrip();
  renderSeasonalStrip();
  renderPaletteStrip();

  const loggedIn = await initAuth();
  if (loggedIn) {
    await loadAppData();
  }
}

init();
