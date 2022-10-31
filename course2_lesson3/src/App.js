import "./App.css";
import React from "react";
import ListSong from "./component/listsong.js";
import "./assets/css/listsong.css";
import DashBoard from "./component/dashboard.js";

function App() {
  return (
    <React.StrictMode>
      <ListSong />
      <DashBoard />
    </React.StrictMode>
  );
}

export default App;
