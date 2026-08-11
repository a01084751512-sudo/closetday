// CLOSETDAY Edge Function: generate-tryon
// 역할: 사용자가 올린 사진 + 코디 설명을 Gemini 이미지 생성 모델로 보내서
//       "이 코디를 입은 내 모습"을 생성해 돌려줘요.
//
// ⚠️ 이 코드는 Gemini API 키를 서버(Edge Function) 안에서만 사용해요.
//    절대 이 키를 closet-config.js 같은 브라우저 코드에 넣지 마세요 — 공개 키가 아니에요.
//
// 배포 방법 (CLI 없이 대시보드에서 가능해요):
// 1. Supabase 대시보드 왼쪽 메뉴 → Edge Functions → "Deploy a new function"
// 2. 함수 이름: generate-tryon
// 3. 코드 에디터에 이 파일 내용 전체 붙여넣기 → Deploy
// 4. Edge Functions → generate-tryon → Secrets(또는 프로젝트 Settings → Edge Functions → Secrets)에서
//    이름: GEMINI_API_KEY / 값: (.env.local에 있는 실제 Gemini API 키) 추가
//    * 이미 다른 함수에서 등록했다면 프로젝트 전체에 공유되니 다시 안 넣어도 돼요.

// deno-lint-ignore-file no-explicit-any
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { photoBase64, mimeType, outfitText } = await req.json();
    if (!photoBase64) {
      return new Response(JSON.stringify({ error: '사진이 없어요.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const apiKey = Deno.env.get('GEMINI_API_KEY');
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'GEMINI_API_KEY가 설정되지 않았어요. Edge Function Secrets를 확인해주세요.' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const prompt =
      `첨부한 사진 속 인물이 다음 코디를 입은 모습을 자연스럽고 사실적인 사진처럼 생성해줘. ` +
      `얼굴, 헤어스타일, 체형, 포즈는 원본 사진과 최대한 비슷하게 유지하고, 옷만 아래 코디로 바꿔줘. ` +
      `배경은 심플한 스튜디오 톤으로 정리해줘. 코디 구성: ${outfitText}`;

    const resp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: prompt },
                { inline_data: { mime_type: mimeType || 'image/jpeg', data: photoBase64 } },
              ],
            },
          ],
          generationConfig: { responseModalities: ['IMAGE'] },
        }),
      }
    );

    if (!resp.ok) {
      const errText = await resp.text();
      console.error('Gemini API error', resp.status, errText);
      return new Response(JSON.stringify({ error: `이미지 생성 서비스 오류 (${resp.status})` }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await resp.json();
    const parts: any[] = data?.candidates?.[0]?.content?.parts || [];
    const imagePart = parts.find((p) => p.inlineData || p.inline_data);
    const inline = imagePart?.inlineData || imagePart?.inline_data;

    if (!inline) {
      return new Response(JSON.stringify({ error: '이미지를 생성하지 못했어요. 다른 사진으로 다시 시도해보세요.' }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(
      JSON.stringify({ image: inline.data, mimeType: inline.mimeType || inline.mime_type || 'image/png' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: '요청을 처리하지 못했어요.' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
