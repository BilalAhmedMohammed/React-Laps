import { useState } from "react";
export default function Child(props) {
  const {data}=props;
  return (
    <div className="container-fluid">
      <div className="row bg-light p-5">
        <h1 className="text-secondary fw-bold text-center">
          Let's get some work done! 
        </h1>
        <span className="bg-light text-dark fw-bold fs-2 me-3">
                {data}
              </span>

        {/* {data.map((todo) => {
          return (
            <div>
              <span className="bg-light text-dark fw-bold fs-2 me-3">
                {todo}
              </span>
              <input
                type="button"
                class="bg-dark text-light fs-3 me-3"
                value="mark"
              />
              <input
                type="button"
                class="bg-dark text-light fs-3"
                value="delete"
              />
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
