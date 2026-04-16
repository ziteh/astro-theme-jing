/**
 * Generates Open Graph images for blog posts.
 */

import type { APIRoute, GetStaticPaths } from "astro";
import satori from "satori";
import sharp from "sharp";
import { SITE } from "@/consts";
import getPosts from "@/utils/getPosts";

const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  return posts.map((post) => ({
    params: { slug: post.id },
    props: {
      title: post.data.title,
      description: post.data.description ?? "",
    },
  }));
};

// Font caching
let fontData: ArrayBuffer | null = null;
async function getFont(): Promise<ArrayBuffer> {
  if (fontData) return fontData;
  const res = await fetch(
    "https://cdn.jsdelivr.net/npm/@fontsource/noto-sans@5/files/noto-sans-latin-400-normal.woff",
  );
  fontData = await res.arrayBuffer();
  return fontData;
}

export const GET: APIRoute = async ({ props }) => {
  const { title, description } = props as { title: string; description: string };
  const font = await getFont();

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0f172a",
          padding: "64px 72px",
          fontFamily: "NotoSans",
        },
        children: [
          // Title
          {
            type: "div",
            props: {
              style: {
                fontSize: 64,
                fontWeight: 700,
                color: "#f8fafc",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                maxWidth: 1050,
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              },
              children: title,
            },
          },
          // Footer row: description left, site name right
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                width: "100%",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: 28,
                      color: "#94a3b8",
                      maxWidth: 800,
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    },
                    children: description,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: 28,
                      color: "#64748b",
                      whiteSpace: "nowrap",
                      marginLeft: "24px",
                    },
                    children: SITE.title,
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: OG_IMAGE_WIDTH,
      height: OG_IMAGE_HEIGHT,
      fonts: [
        {
          name: "NotoSans",
          data: font,
          weight: 400,
          style: "normal",
        },
      ],
    },
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(png as BodyInit, {
    headers: {
      "Content-Type": "image/png",
      // "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
