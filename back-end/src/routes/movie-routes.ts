import { Router } from "express"
import {
  addMovieController,
  getMoviesController,
  removeMovieController,
  updateMovieController,
} from "../controllers/movie-controller"

export const movieRoutes = Router()

// Rotas da API
movieRoutes.route("/movies").get(getMoviesController).post(addMovieController)
movieRoutes
  .route("/movies/:id")
  .put(updateMovieController)
  .delete(removeMovieController)
