import { Routes, Route } from "react-router-dom";

import Nav from "./component/nav/Nav";
import Home from "./pages/home/Home";
import Games from "./pages/games/Games";
import Community from "./pages/community/Community";
import Contacts from "./pages/contacts/Contacts";
import JonClub from "./pages/JoinClub/JonClub";
import Register from "./component/form/register/Register";
import Login from "./component/form/login/Login";
import "./assets/fonts/fontawasome";

import "./App.scss";

function App() {
  return (
    <div className="Container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/joinClub" element={<JonClub />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
