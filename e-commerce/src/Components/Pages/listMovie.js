import { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import ReactPaginate from "react-paginate";
import { axiosInstance } from "../Network/axiosConfig";
import Pagination from "../Pagination/Pagination";

export default function ListMovie() {
  const [page, setPage] = useState([]);
  const [pageCount, setPageCount] = useState(100);
  const handelPageClick = (data) => {
    let currentPage = data.selected + 1;
    setPage(currentPage);
  };
  const [movies, setMovies] = useState([]);
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
      <div id="products" className="container-fluid">
        <div className="row">
          {movies.map((movie) => {
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
