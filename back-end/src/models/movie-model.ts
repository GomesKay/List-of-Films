// Model
export interface Movie {
  id: string
  title: string
  description: string
  genre: string[]
  year: number
  rating: number
  duration_minutes: number
  poster: string
  createdAt: Date
  updatedAt: Date
}
