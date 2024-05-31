import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

export default function Detail() {
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
      .json();
    setMovie(json.data.movie);
    console.log(movie.title);
    setLoading(false);
  }

  useEffect(() => {
    getMovie();
  }, [])

  console.log(id);
  return (
    <div>
        <img src={movie.medium_cover_image} alt={movie.title}/>
        <h2>{movie.title}</h2>
        <h4> like : {movie.like_count}</h4>
        <h4> rating : {movie.rating}</h4>
        <p>{movie.description_full}</p>
    </div>
  )
}
