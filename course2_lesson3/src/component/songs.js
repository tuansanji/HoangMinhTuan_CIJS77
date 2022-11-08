import "../assets/font/fontawesome-free-6.1.2-web/css/all.min.css";
import { App } from "./dashboard.js";
import ListSong from "./listsong.js";

function ShowSong(props) {
  return (
    <div
      className={
        props.name === App.currentSong.name
          ? "cardContent active"
          : "cardContent"
      }
    >
      <img src={props.image} alt="" />
      <div className="infor">
        <h4 className="title"> {props.name}</h4>
        <p>{props.singer}</p>
        <p>{props.timeline}</p>
      </div>
      <div className="option">
        <i className="fas fa-ellipsis-h"></i>
      </div>
    </div>
  );
}
export default ShowSong;
