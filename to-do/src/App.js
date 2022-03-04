import Todo from "./Todo/TodoApp/Todo";
import Child from "./Todo/childTodo/Child";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
function App() {
  const [dataRecieved,setDataRecievd]=useState([]);
const data=(todo)=>{
  setDataRecievd(todo);
}

  // const handelFormSubmit = (childData) =>{
    // useDataRecievd({
      // ...dataRecieved,
      // data:childData

    // })
// }
  return (
    <>
    {/* data={handelFormSubmit}  */}
      <Todo data={data} />

      {/* })/> */}
      <Child data={dataRecieved} />
    </>
  );
}

export default App;
