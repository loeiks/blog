import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    customSlug: z.string().optional(),
  }),
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
});

export const collections = {
  blog,
};
