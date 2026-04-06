import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      description: z.string().optional(),

      date: z.coerce.date(),
      updated: z.coerce.date().optional(),

      tags: z.array(z.string()).default(["Others"]),
      categories: z.array(z.string()).default([]),

      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      toc: z.boolean().default(false),
      comments: z.boolean().default(false),
      math: z.boolean().default(false),
    }),
});

export const collections = { blog };
