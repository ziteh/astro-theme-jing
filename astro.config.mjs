// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
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
    mdx(),
    sitemap(),
    pagefind(),
  ],
});
