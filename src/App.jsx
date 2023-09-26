import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/home/home"
import MovieDetail from "./pages/MovieDetails/MovieDetails"
import { useState } from "react"

function App() {
  const [searchValue, setSearchValue] = useState("")

  return (
    <div className="App">
      <Header onSubmit={(inputValue) => setSearchValue(inputValue)}/>
      <Routes>
        <Route path="/" element={<Home searchValueProp={searchValue}/>}/>
        <Route path="/movie/:id" element={<MovieDetail/>}/>
      </Routes>
    </div>
  )
}

export default App
