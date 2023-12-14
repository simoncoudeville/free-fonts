import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		pubDate: z.date(),
		description: z.string().optional(),
		foundry: z.string(),
		foundryLink: z.string(),
		downloadLink: z.string(),
		staticFont: z.string(),
		variableFont: z.string().optional(),
		formats: z.array(z.string()).optional(),
		tags: z.array(z.string()),
		weights: z.number(),
		italic: z.boolean(),
		license: z.string(),
		draft: z.boolean().optional(),
		// preview: image().refine((img) => img.width >= 100, {
		// 	message: "Cover image must be at least 100 pixels wide!",
		// }),
		// preview: z.string(),
	}),
});

export const collections = { blog };
