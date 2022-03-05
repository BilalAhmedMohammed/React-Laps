import Todo from "./Todo/TodoApp/Todo";
import Child from "./Todo/childTodo/Child";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
function App() {
  const [dataRecieved, setDataRecievd] = useState([]);
  const addData = (todo) => {
    const newData = [...dataRecieved];
    newData.push(todo);
    setDataRecievd(newData);
  };
  const removeData = (idx) => {
    const newData = [...dataRecieved];
    newData.splice(idx,1);
    setDataRecievd(newData);
  };
  // const handelFormSubmit = (childData) =>{
  // useDataRecievd({
  // ...dataRecieved,
  // data:childData

  // })
  // }
  return (
    <>
      {/* data={handelFormSubmit}  */}
      <Todo addData={addData} />

      {/* })/> */}
      <Child data={dataRecieved} removeData={removeData} />
    </>
  );
}

export default App;
