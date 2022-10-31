import "./App.css";
import { useState } from "react";
import CounterClass from "./component/course";

function App() {
  const [color, setColor] = useState("red");
  const changeColor = () => {
    if (color === "red") {
      setColor("yellow");
    }
    if (color === "yellow") {
      setColor("green");
    }
    if (color === "green") {
      setColor("red");
    }
  };

  return (
    <div className="App">
      <button className="title" onClick={changeColor}>
        Next
      </button>
      <br />
      <button className={`btn ${color === "red" ? "red" : ""}`}></button>
      <button className={`btn ${color === "yellow" ? "yellow" : ""}`}></button>
      <button className={`btn ${color === "green" ? "green" : ""}`}></button>

      <CounterClass />
    </div>
  );
}

export default App;
