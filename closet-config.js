'use strict';

// Supabase project connection — Project Settings → API 에서 가져온 값
// publishable key는 브라우저에 노출되어도 안전하도록 설계된 키예요 (RLS로 접근 제어).
const SUPABASE_URL = 'https://yknfgzxbnquvmlocyihd.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_TrVs8CkuJVpK40_MqJ1Y3Q_dksHUHXx';

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
