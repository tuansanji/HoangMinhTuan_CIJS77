import React from "react";

import WorldGaming from "./homeChild/worldGaming/WorldGaming";
import ReleasedGames from "./homeChild/releasedGames/ReleasedGames";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <WorldGaming />
      <ReleasedGames />
    </div>
  );
}

export default Home;
