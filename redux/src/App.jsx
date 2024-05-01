import React, { useState } from "react";
import { store } from "./store/store";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Todolist from "./Todolist";

const App = () => {
  // const [flag, setFlag] = useState(false);

  const data = useSelector(store=> store.theme);
  console.log(data);
  const dispatch = useDispatch();

  function handleToggleLight() {
    // console.log(store.getState());
    // store.dispatch({ type: "LIGHT" });

    dispatch({ type: "LIGHT" });
  }
  function handleToggleDark() {
    // console.log(store.getState());
    // store.dispatch({ type: "DARK" });

    dispatch({ type: "DARK" });
  }

  // store.subscribe(() => {
  //   setFlag(!flag);
  // });

  return (
    <div style={{ backgroundColor: data ? "white" : "black" }}>
      {JSON.stringify(data)}
      <button onClick={handleToggleLight}>Light</button>
      <button onClick={handleToggleDark}>Dark</button>
      <Todolist/>
    </div>
  );
};

export default App;
