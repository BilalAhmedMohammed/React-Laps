import React from 'react'
import { Link } from 'react-router-dom'

export default function Movie(props) {
    const {movie}=props;
  return (
 <div className="card">
     
    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} style={{ maxHeight: 500 }} className="card-img-top img-fluid" alt="..."/>
    <div className="card-body text-center">
        <p className="card-text">{movie.title}</p>
        <p className="card-text text-danger">{movie.vote_average}</p>
        <Link to={`/movie-details/${movie.id}`} className="btn btn-primary">Movie Details</Link>
    </div>
</div>
  )
}
