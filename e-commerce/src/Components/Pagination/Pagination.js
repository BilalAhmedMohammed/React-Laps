import { useState } from "react";
import ReactPaginate from "react-paginate";

export default function Pagination() {
    const [items,setItems]=useState([]);
    const handelPageClick=(data)=>{
        console.log(data.selected);
    }
  return (
      <div>
          <ReactPaginate
          previousLabel={'<<'}
          nextLabel={'>>'}
          breakLabel={'...'}
          pageCount={'25'}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handelPageClick}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
           />
      </div>
  )
}
