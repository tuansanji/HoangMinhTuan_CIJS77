import React from "react";
import { useDispatch } from "react-redux";
import reducer from "../redux/reducer";

function Filter() {
  const dispatch = useDispatch();
  const handleDeleteAllComplete = () => {
    // xử lí đươc trên local storage rồi nhưng gặp lỗi chưa rerender
    dispatch(reducer.actions.deleteAllComplete());
  };
  const handleDeleteAll = (second) => {
    dispatch(reducer.actions.deleteAll(0));
  };
  const handleCheckAll = () => {
    dispatch(reducer.actions.toggleAll(true));
  };
  const handleSwitchFilter = (item) => {
    dispatch(reducer.actions.switchFilter(item));
  };
  return (
    <div className="container__filter">
      <ul className="filters">
        <li
          className="active"
          onClick={() => {
            handleSwitchFilter("all");
          }}
        >
          <p>All</p>
        </li>
        <li
          onClick={() => {
            handleSwitchFilter("active");
          }}
        >
          <p>Active</p>
        </li>
        <li
          onClick={() => {
            handleSwitchFilter("complete");
          }}
        >
          <p>Completed</p>
        </li>
      </ul>
      <div className="check__all">
        <button className="clear-completed" onClick={handleDeleteAllComplete}>
          Clear completed
        </button>
        <button onClick={handleCheckAll}> Check All</button>
        <button onClick={handleDeleteAll}>Clear All</button>
      </div>
    </div>
  );
}

export default Filter;
