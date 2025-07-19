import type { Request, Response } from "express"
import {
  createMovie,
  deleteMovie,
  getAllMovies,
  updateMovie,
} from "../services/movie-service"
import { bodyMovieSchema, paramsMovieSchema } from "../schemas/movie-schema"

export async function getMoviesController(req: Request, res: Response) {
  try {
    const movies = await getAllMovies()

    res.status(200).send(movies)
  } catch (error) {
    res.status(500).send({ error: "Erro ao retornar filmes" })
  }
}

export async function addMovieController(req: Request, res: Response) {
  try {
    const {
      title,
      description,
      genre,
      year,
      rating,
      duration_minutes,
      poster,
    } = bodyMovieSchema.parse(req.body)
    const newMovie = await createMovie({
      title,
      description,
      genre,
      year,
      rating,
      duration_minutes,
      poster,
    })

    res.status(201).send(newMovie)
  } catch (error) {
    res.status(500).send({ error: "Erro ao criar filme" })
  }
}

export async function updateMovieController(req: Request, res: Response) {
  try {
    const { id } = paramsMovieSchema.parse(req.params)
    const {
      title,
      description,
      genre,
      year,
      rating,
      duration_minutes,
      poster,
    } = bodyMovieSchema.parse(req.body)
    const updatedMovie = await updateMovie({
      id,
      title,
      description,
      genre,
      year,
      rating,
      duration_minutes,
      poster,
    })

    if (!updatedMovie) {
      res.status(404).send({ error: "Filme não encontrada" })
      return
    }

    res.status(200).send(updatedMovie)
  } catch (error) {
    res.status(500).send({ error: "Erro ao atualizar filme" })
  }
}

export async function removeMovieController(req: Request, res: Response) {
  try {
    const { id } = paramsMovieSchema.parse(req.params)
    await deleteMovie({ id })

    res.status(200).send({ message: "Filme deletado com sucesso" })
  } catch (error) {
    res.status(500).send({ error: "Erro ao deletar filme" })
  }
}
