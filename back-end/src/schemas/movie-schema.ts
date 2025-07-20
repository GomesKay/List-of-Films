import z from "zod"

// Schemas do Zod (Tipagem)
export const bodyMovieSchema = z.object({
  title: z.string(),
  description: z.string(),
  genre: z.array(z.string()),
  year: z.number().int(),
  rating: z.number().min(0).max(10),
  duration_minutes: z.number(),
  poster: z.string(),
})

export const paramsMovieSchema = z.object({
  id: z.uuid(),
})
