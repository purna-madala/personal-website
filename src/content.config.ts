import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  author: z.string().default("Purna Sai Madala"),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
});

const personalBlog = defineCollection({
  loader: glob({ base: "./src/content/personal", pattern: "**/*.{md,mdx}" }),
  schema: baseSchema.extend({
    category: z.literal("personal"),
  }),
});

const cookingBlog = defineCollection({
  loader: glob({ base: "./src/content/cooking", pattern: "**/*.{md,mdx}" }),
  schema: baseSchema.extend({
    category: z.literal("cooking"),
    difficulty: z.enum(["easy", "medium", "hard"]).optional(),
    prepTime: z.number().optional(), // in minutes
    cookTime: z.number().optional(), // in minutes
    servings: z.number().optional(),
    ingredients: z.array(z.string()).optional(),
    cuisine: z.string().optional(),
    mealType: z.enum(["breakfast", "lunch", "dinner", "snack", "dessert", "appetizer"]).optional(),
  }),
});

// Keep the original blog collection for backward compatibility
const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { 
  blog, 
  personal: personalBlog, 
  cooking: cookingBlog 
};
