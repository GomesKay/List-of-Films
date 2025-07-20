import { Movie } from "../models/movie-model"

// Configuração de uma nova tipagem usando o Pick e Omit (Nativo do TypeScript)
export type CreateFilmType = Omit<Movie, "id" | "createdAt" | "updatedAt">

export type UpdateFilmType = Omit<Movie, "createdAt" | "updatedAt">

export type DeleteFilmType = Pick<Movie, "id">
