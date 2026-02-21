import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // z.coerce.date() automatically converts string dates from frontmatter into JS Date objects!
    publishDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    slug: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
