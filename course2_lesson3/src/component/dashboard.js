import { useEffect, useState, useRef } from "react";
import "../assets/css/dashboard.css";
import { Album } from "./listsong.js";
import ListSong from "./listsong.js";
import ShowSong from "./songs.js";

const $ = document.querySelector.bind(document);
// // const $$ = document.querySelectorAll.bind(document);

// const player = $(".player");
// const heading = $("header h2");
// const cdThumb = $(".cd-thumb");
// const audio = $("#audio");
// const cd = $(".cd");
// const playBtn = $(".btn-toggle-play");
// const progress = $("input");
// const prevBtn = $(".btn-prev");
// const nextBtn = $(".btn-next");
// const randomBtn = $(".btn-random");
// const repeatBtn = $(".btn-repeat");
// const playlist = $(".playlist");
export const App = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  definepropertys() {
    Object.defineProperty(App, "currentSong", {
      get() {
        return Album[App.currentIndex];
      },
    });
  },
  handleEvents() {},
  start() {
    App.handleEvents();

    App.definepropertys();
  },
};
App.start();

export default function DashBoard(props) {
  const audioRef = useRef();

  const [play, setPlay] = useState(false);
  useEffect(() => {}, []);
  const handlePausePlayClick = (e) => {
    if (play) {
      console.log(e.target.closest(".btn"));
      e.target.closest(".btn").classList.add("playing");
      audioRef.current.play();
    } else {
      e.target.closest(".btn").classList.remove("playing");
      audioRef.current.pause();
    }
    setPlay(!play);
  };

  const handleEventNextPlay = () => {
    App.currentIndex++;
    if (App.currentIndex >= Album.length) {
      App.currentIndex = 0;
    }
    // audioRef.current.currentTime = 0;
    setPlay(true);
    audioRef.current.play();
  };

  const handleEventPrevPlay = () => {
    App.currentIndex--;
    if (App.currentIndex < 0) {
      App.currentIndex = Album.length - 1;
    }
    // audioRef.current.currentTime = 0;
    setPlay(true);
    audioRef.current.play();
  };
  return (
    <div className="dashboard">
      <header>
        <h4>Now playing:</h4>
        <h2>{App.currentSong.name}</h2>
      </header>
      <div className="cd">
        <div
          className="cd-thumb"
          style={{ backgroundImage: `url(${App.currentSong.image})` }}
        ></div>
      </div>
      <div className="control">
        <div className="btn btn-repeat">
          <i className="fas fa-redo"></i>
        </div>
        <div className="btn btn-prev" onClick={handleEventPrevPlay}>
          <i className="fas fa-step-backward"></i>
        </div>
        <div className="btn btn-toggle-play" onClick={handlePausePlayClick}>
          <i className="fas fa-pause icon-pause"></i>
          <i className="fas fa-play icon-play"></i>
        </div>
        <div
          className="btn btn-next"
          onClick={() => {
            handleEventNextPlay();
          }}
        >
          <i className="fas fa-step-forward"></i>
        </div>
        <div className="btn btn-random">
          <i className="fas fa-random"></i>
        </div>
      </div>

      <input
        id="progress"
        className="progress"
        type="range"
        defaultValue="0"
        step="1"
        min="0"
        max="100"
      />

      <audio ref={audioRef} id="audio" src={App.currentSong.path} />
    </div>
  );
}
