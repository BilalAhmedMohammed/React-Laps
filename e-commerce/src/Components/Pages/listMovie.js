import { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import { axiosInstance } from "../Network/axiosConfig";

export default function ListMovie() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/popular")
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div id="products" className="container-fluid">
      <div className="row">
        {movies.map((movie) => {
          return(
          <div key={movie.id} className="col-4 overflow-auto" style={{ maxHeight: 1000 }}>
            <Movie movie={movie} />;
          </div>)
        })}
      </div>
    </div>
  );
}
