import React from "react";
import { useTranslation } from "react-i18next";

import releaseImg from "../../../../assets/img/title_bar02.png";

import "./releasedGames.scss";

function ReleasedGames() {
  const { t } = useTranslation(["content"]);
  return (
    <div className="home__released-games">
      <div className="realeased-title">
        <h2>{t("released-game")}</h2>
        <p>{t("released-title")}</p>
        <img src={releaseImg} alt="" />
      </div>
      <div className="home__released-list">
        <div className="list-item">
          <div className="item">
            <img
              src="https://themebeyond.com/html/geco/Geco/img/images/released_game_img01.jpg"
              alt=""
            />
            <div className="item-description">
              <h5>Rating:</h5>
              <h4>Call of Duty</h4>
              <ul>
                <li>
                  <span>Category:</span>Virtual Game
                </li>
                <li>
                  <span>Model:</span>Compete 100 players
                </li>
                <li>
                  <span>Controller:</span>Playstation 5 , Xbox , PS4
                </li>
              </ul>
              <p>
                Compete with 100 players on a remote thats island for winner
                takes showdown known issue
              </p>
              <a href="#">Buy now</a>
            </div>
          </div>
        </div>
        <div className="list-menu">
          <img
            src="https://themebeyond.com/html/geco/Geco/img/images/release_game_nav02.jpg"
            alt=""
          />
          <img
            src="https://themebeyond.com/html/geco/Geco/img/images/release_game_nav02.jpg"
            alt=""
          />
          <img
            src="https://themebeyond.com/html/geco/Geco/img/images/release_game_nav02.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ReleasedGames;
