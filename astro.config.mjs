// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import rehypeFigure from "@microflash/rehype-figure";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import pagefind from "astro-pagefind";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com", // Replace with your site's URL, e.g. https://username.github.io
  compressHTML: true,
  trailingSlash: "never",
  build: {
    format: "file", // generate `page.html` instead of `page/index.html`
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      // LaTeX math support
      rehypeKatex,
      // Transform alt text into figure captions
      rehypeFigure,
      // Open external links in a new tab for security
      [rehypeExternalLinks, { target: "_blank", rel: "noopener noreferrer" }],
      // Add id attributes to headings (rehypeAutolinkHeadings)
      rehypeSlug,
      // Add anchor links to headings
      [rehypeAutolinkHeadings, { behavior: "append" }],
    ],
    // Use ExpressiveCode instead of built-in syntax highlighting
    syntaxHighlight: false,
  },
  integrations: [
    // Syntax highlighting
    expressiveCode({
      plugins: [pluginLineNumbers()],
      themes: ["one-dark-pro", "min-light"],
      defaultProps: {
        wrap: false,
        showLineNumbers: false,
        overridesByLang: {
          "bash,cmd,powershell,ps,sh,shell,zsh": { frame: "none" },
        },
      },
      styleOverrides: {
        codeFontFamily: "var(--font-mono), var(--font-emoji)",
        uiFontFamily: "var(--font-sans), var(--font-emoji)",
        borderWidth: "0",
        textMarkers: {
          backgroundOpacity: "33%",
          inlineMarkerBorderWidth: "0.1px",
        },
        frames: {
          editorTabBarBackground: "transparent",
          frameBoxShadowCssValue: "transparent",
          tooltipSuccessBackground: "#6b7280",
        },
      },
    }),
    // Search engine
    pagefind(),
    mdx(),
    sitemap(),
  ],
});
