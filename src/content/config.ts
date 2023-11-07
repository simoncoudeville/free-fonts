import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		foundry: z.string(),
		foundryLink: z.string(),
		pubDate: z.date(),
		tags: z.array(z.string()),
		downloadLink: z.string(),
		styles: z.number(),
		license: z.string(),
		variable: z.boolean(),
		draft: z.boolean().optional(),
		// preview: image().refine((img) => img.width >= 100, {
		// 	message: "Cover image must be at least 100 pixels wide!",
		// }),
		// preview: z.string(),
	}),
});

export const collections = { blog };
