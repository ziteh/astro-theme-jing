/**
 * Generates Open Graph images.
 */

import satori from "satori";
import sharp from "sharp";

export const OG_COLORS = {
  bg: "#fcfcfc",
  text: "#202020",
  muted: "#646464",
  faint: "#cecece",
};

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

export const OG_FONT_FAMILY = "NotoTC, NotoLatin";
const CDN = "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-tc@latest";

// Cache font data in memory to avoid redundant fetches
let fontLatin400: ArrayBuffer | null = null;
let fontCjk400: ArrayBuffer | null = null;
async function getFonts(): Promise<[ArrayBuffer, ArrayBuffer]> {
  [fontLatin400, fontCjk400] = await Promise.all([
    fontLatin400 ?? fetch(`${CDN}/latin-400-normal.woff`).then((r) => r.arrayBuffer()),
    fontCjk400 ?? fetch(`${CDN}/chinese-traditional-400-normal.woff`).then((r) => r.arrayBuffer()),
  ]);
  return [fontLatin400!, fontCjk400!];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function renderOgImage(element: any): Promise<Response> {
  const [latin, cjk] = await getFonts();

  const svg = await satori(element, {
    width: OG_WIDTH,
    height: OG_HEIGHT,
    fonts: [
      { name: "NotoTC", data: cjk, weight: 400, style: "normal" },
      { name: "NotoLatin", data: latin, weight: 400, style: "normal" },
    ],
  });

  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(png as BodyInit, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
