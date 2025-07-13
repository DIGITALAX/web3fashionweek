import { NextResponse } from "next/server";

function generateStaticUrls(baseUrl: string, paths: { path: string }[]) {
  return paths
    .map((path) => {
      const loc = `${baseUrl}${path.path}`;

      return `
      <url>
        <loc>${loc}</loc>
      </url>
      `;
    })
    .join("");
}

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://web3fashionweek.com";

  const staticPaths = [{ path: "/" }];
  const staticXml = generateStaticUrls(baseUrl, staticPaths);

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
>
${staticXml}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
