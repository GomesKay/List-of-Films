import { Movie } from "../models/movie-model"

export type CreateFilmType = Omit<Movie, "id" | "createdAt" | "updatedAt">

export type UpdateFilmType = Omit<Movie, "createdAt" | "updatedAt">

export type DeleteFilmType = Pick<Movie, "id">
