import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { useEffect } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
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
  const { i18n, t } = useTranslation("content");
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);
  const handleLanguegeChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div className="Container">
      <Suspense fallback={null}>
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
        <select
          onChange={handleLanguegeChange}
          value={localStorage.getItem("i18nextLng")}
        >
          <option value="en">{t("english")}</option>
          <option value="vi">{t("vietnam")}</option>
        </select>
      </Suspense>
    </div>
  );
}

export default App;
