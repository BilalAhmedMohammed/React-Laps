import { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import "./list.css";
import ReactPaginate from "react-paginate";
import { axiosInstance } from "../Network/axiosConfig";
import Pagination from "../Pagination/Pagination";

export default function ListMovie() {
  const [page, setPage] = useState([]);
  const [pageCount, setPageCount] = useState(100);
  const [movies, setMovies] = useState([]);
  const [searchTitle, setsearchTitle] = useState("");

  const handelPageClick = (data) => {
    let currentPage = data.selected + 1;
    setPage(currentPage);
  };
  useEffect(() => {
    axiosInstance
      .get("/popular", {
        params: {
          page: page,
        },
      })
      .then((res) => {
        // setPageCount(res.data.total_pages);
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [page]);
  return (
    <>
      <div id="movies" className="container-fluid">
        <input
          className="input-group-text w-75 mb-3 ms-5"
          type={"search"}
          placeholder={"Search By Movie Name"}
          onChange={(ev)=>setsearchTitle(ev.target.value)}
        />
        <div className="row">
          {movies
            .filter((value) => {
              if (searchTitle === "") return value;
              else if (
                value.title
                  .toLowerCase()
                  .includes(searchTitle.toLocaleLowerCase())
              )
                return value;
            })
            .map((movie) => {
              return (
                <div key={movie.id} className="col-4">
                  <Movie movie={movie} />
                </div>
              );
            })}
        </div>
      </div>
      <div className="mt-5">
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handelPageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
      {/* <Pagination /> */}
    </>
  );
}
