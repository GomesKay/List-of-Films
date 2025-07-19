import { prisma } from "../lib/prisma"
import { CreateFilmType, DeleteFilmType, UpdateFilmType } from "../types/movie"

export async function getAllMovies() {
  return await prisma.film.findMany()
}

export async function createMovie({
  title,
  description,
  genre,
  year,
  rating,
  duration_minutes,
  poster,
}: CreateFilmType) {
  return await prisma.film.create({
    data: { title, description, genre, year, rating, duration_minutes, poster },
  })
}

export async function updateMovie({
  id,
  title,
  description,
  genre,
  year,
  rating,
  duration_minutes,
  poster,
}: UpdateFilmType) {
  return await prisma.film.update({
    where: { id },
    data: { title, description, genre, year, rating, duration_minutes, poster },
  })
}

export async function deleteMovie({ id }: DeleteFilmType) {
  return await prisma.film.delete({
    where: { id },
  })
}
