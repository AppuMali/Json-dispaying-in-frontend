import React from 'react'
import JSON from "./Movies.json"
import Movie from "./Components/Movie.jsx"
import "./Moviess.css"

const MovieApp = () => {
  return (
    <div>
        <Movie payload = {JSON} />
    </div>
  )
}

export default MovieApp