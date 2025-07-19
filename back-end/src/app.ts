import express from "express"
import cors from "cors"
import { movieRoutes } from "./routes/movie-routes"

export const app = express()

app.use(express.json())
app.use(cors({ origin: "*" }))

app.use(movieRoutes)
