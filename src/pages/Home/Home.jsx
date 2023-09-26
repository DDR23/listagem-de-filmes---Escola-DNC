import { useEffect, useState } from "react"
import "./index.scss"
import { MovieService } from "../../data/MovieService"
import MovieCard from "../../components/MovieCard/MovieCard"

const Home = ({ searchValueProp }) => {
  const [movies, setMovies] = useState([])

  async function getMovies() {
    const {
      data: { results },
    } = await MovieService.getMovies()

    setMovies(results)
  }

  async function getMovieSearch(movieString){
    const {
      data: {results},
    } = await MovieService.searchMovies(movieString);

    setMovies(results)
  }

  useEffect(() => {
    getMovies()
  }, [])

  useEffect(() => {
    if (searchValueProp) {
      getMovieSearch(searchValueProp);
    }
    if (searchValueProp === "") {
      getMovies()
    }
  }, [searchValueProp])
  
  

  return (
    <section className="Home">
      {movies.map((movie) => (
        <div key={movie.id}>
          <MovieCard movieProp={movie}/>
        </div>
        ))}
    </section>
  )
}

export default Home