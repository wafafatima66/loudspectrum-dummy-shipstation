export async function GET() {
  const xmlResponse = `<?xml version="1.0" encoding="utf-8"?>
  <StoreResponse>
    <StoreName>Loud Spectrum</StoreName>
    <Orders></Orders>
  </StoreResponse>`;

  return new Response(xmlResponse, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}