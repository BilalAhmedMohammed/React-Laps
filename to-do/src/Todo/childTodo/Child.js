export default function Child(props) {
  const { data } = props;
const  handelDelete=(index)=>{
    props.removeData(index)
  }
  const handelMark=(idx)=>{
    document.getElementById(idx).style.textDecoration="line-through";
  }
  return (
    <div className="container-fluid">
      <div className="row bg-light p-5">
        <h1 className="text-secondary fw-bold text-center">
          Let's get some work done!
        </h1>
        {/* <span className="bg-light text-dark fw-bold fs-2 me-3"> */}
        {/* {data} */}
        {/* </span> */}
        {data.map((todo) => {
          return (
            <div key={data.indexOf(todo)} >
              <span id={`${data.indexOf(todo)}`} className="bg-light text-dark fw-bold fs-2 me-3">
                {todo}
              </span>
              <input
                type="button"
                className="bg-dark text-light fs-3 me-3"
                value="mark"
                onClick={()=>handelMark(data.indexOf(todo))}
              />
              <input
                type="button"
                className="bg-dark text-light fs-3"
                value="delete"
                onClick={()=>handelDelete(data.indexOf(todo))}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
