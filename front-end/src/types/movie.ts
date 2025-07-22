// Tipagem dos Dados
export interface MovieProps {
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
