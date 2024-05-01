import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Todolist = () => {
  const todo = useSelector((store) => store.todo);
  const [input, setInput] = useState({});
  const dispatch = useDispatch()

  return (
    <div>
      <input type="text"   onChange={(e)=>setInput({title:e.target.value})} />
     
      <button onClick={() => dispatch({ type: "ADD", payload: input })}>Add</button>


      {todo.map((e, i) => (
        <li key={i}>{e.title}</li>
      ))}
    </div>
  );
};

export default Todolist;
