import axios from "axios"
import { Calendar } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "./components/ui/button"
import type { MovieProps } from "./types/movie"

export function App() {
  const [films, setFilms] = useState<MovieProps[]>([])

  async function fetchFilms() {
    try {
      const response = await axios.get("http://localhost:3333/movies")
      setFilms(response.data)
    } catch (error) {
      console.error("Erro ao buscar filmes:", error)
    }
  }

  useEffect(() => {
    fetchFilms()
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center gap-30 bg-zinc-950 text-white">
      <header className="flex items-center justify-center pt-32">
        <h1 className="font-heading text-7xl font-bold">
          Lista de Filmes & Séries
        </h1>
      </header>

      <main className="flex w-[1300px] flex-wrap items-center justify-center gap-6">
        {films.length ? (
          films.map((film) => (
            <div key={film.id} className="h-[510px] w-[300px] bg-zinc-950">
              <div className="flex flex-col gap-2">
                <div className="relative">
                  <img
                    src={film.poster}
                    alt=""
                    title={film.title}
                    className="cursor-pointer rounded-xl hover:brightness-50 hover:duration-100"
                  />

                  <Button
                    type="button"
                    className="font-text absolute top-2 right-2 z-10 bg-yellow-500 font-semibold"
                  >
                    {film.rating}
                  </Button>
                </div>

                <p className="font-heading text-xl">{film.title}</p>

                <div className="font-text flex items-center gap-2">
                  <Calendar size={20} />
                  <p>{film.year}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="font-text">Nenhum filme encontrado</p>
        )}
      </main>

      <footer className="font-heading text-md flex items-center justify-center py-12 font-semibold">
        <h3>&copy; Feito por Caio Gomes</h3>
      </footer>
    </div>
  )
}
