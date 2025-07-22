import axios from "axios"
import { Calendar } from "lucide-react"
import { useEffect, useState } from "react"

import { TextAnimate } from "./components/magicui/text-animate"
import { Button } from "./components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./components/ui/drawer"
import type { MovieProps } from "./types/movie"

export function App() {
  const [films, setFilms] = useState<MovieProps[]>([])

  // Conexão com API usando Axios
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
        <h1 className="font-heading text-7xl font-bold max-[1000px]:text-5xl max-[425px]:text-3xl">
          <TextAnimate animation="slideLeft" by="character" duration={6}>
            Lista de Filmes & Séries
          </TextAnimate>
        </h1>
      </header>

      <main className="flex w-[1300px] flex-wrap items-center justify-center gap-6 max-[1300px]:w-[1000px] max-[1000px]:w-[720px] max-[720px]:w-[420px] max-[425px]:w-[360px] max-[360px]:w-[300px]">
        {films.length ? (
          films.map((film) => (
            <div key={film.id} className="h-[510px] w-[300px] bg-zinc-950">
              <div className="flex flex-col gap-2">
                <Drawer>
                  <DrawerTrigger>
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
                  </DrawerTrigger>
                  <DrawerContent className="bg-zinc-950">
                    <DrawerHeader>
                      <DrawerTitle className="font-heading text-2xl text-white max-[425px]:text-xl">
                        {film.title}
                      </DrawerTitle>
                      <DrawerDescription className="font-text text-md max-[425px]:text-sm">
                        {film.description}
                      </DrawerDescription>
                    </DrawerHeader>

                    <div className="font-text flex flex-col items-center justify-center text-white max-[425px]:text-sm">
                      <p>
                        IMDB:{" "}
                        <span className="text-muted-foreground">
                          {film.rating}
                        </span>
                      </p>
                      <p>
                        Duração:{" "}
                        <span className="text-muted-foreground">
                          {film.duration_minutes} min
                        </span>
                      </p>
                      <p>
                        Lançamento:{" "}
                        <span className="text-muted-foreground">
                          {film.year}
                        </span>
                      </p>
                      <p>
                        Gênero:{" "}
                        <span className="text-muted-foreground">
                          {Array.isArray(film.genre)
                            ? film.genre.join(", ")
                            : film.genre}
                        </span>
                      </p>
                    </div>

                    <DrawerFooter>
                      <DrawerClose>
                        <Button type="button">Fechar</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>

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
