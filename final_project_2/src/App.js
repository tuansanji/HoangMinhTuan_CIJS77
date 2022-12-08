import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";

import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import Fotter from "./component/fotter/Fotter";

import Home from "./pages/home/Home";
import Overview from "./pages/overview/Overview";
import Blog from "./pages/blog/Blog";
import Community from "./pages/community/Community";
import Store from "./pages/store/Store";
import Pages from "./pages/pages/Pages";
import Contact from "./pages/contact/Contact";
import Register from "./pages/form/register/Register";
import Login from "./pages/form/login/Login";

import WorldGaming from "./pages/home/homeChild/worldGaming/WorldGaming";
import ReleasedGames from "./pages/home/homeChild/releasedGames/ReleasedGames";
import JustForGamer from "./pages/home/homeChild/justForGamer/JustForGamer";
import FeaturedGames from "./pages/home/homeChild/featuredGames/FeaturedGames";

import "./assets/fonts/fontawesome";
import "./App.scss";

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">
        <Header />
        <Nav />

        <main className="App__container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home/world-gaming" element={<WorldGaming />} />
            <Route path="/home/released-game" element={<ReleasedGames />} />
            <Route path="/home/just-for-gamer" element={<JustForGamer />} />
            <Route
              path="/home/just-featured-games"
              element={<FeaturedGames />}
            />
            <Route path="/home/world-meet-real" element={<Home />} />
            <Route path="/home/gaming-products" element={<Home />} />
            <Route path="/home/lateat-news-articles" element={<Home />} />

            <Route path="/overview" element={<Overview />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/community" element={<Community />} />
            <Route path="/store" element={<Store />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/contact" element={<Fotter />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Fotter />
      </div>
    </Suspense>
  );
}

export default App;