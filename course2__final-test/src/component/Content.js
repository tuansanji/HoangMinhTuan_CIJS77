import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import reducer from "../redux/reducer";
import { todoSelector } from ".././redux/selecter";
function Content() {
  const todolist = useSelector(todoSelector);
  console.log(todolist);
  const dispatch = useDispatch();
  const handleDeleteTodo = (index) => {
    dispatch(reducer.actions.deleteTodo(index));
  };
  const handleCompleteItem = (index) => {
    dispatch(reducer.actions.toggleTodo(index));
  };
  return (
    <div className="container__list">
      {todolist.map((item, index) => {
        return (
          <div
            key={index}
            className={`item ${item.complete ? "complete" : ""}`}
          >
            <input
              className="toggle"
              type="checkbox"
              checked={item.complete}
              onChange={() => {
                handleCompleteItem(index);
              }}
            />
            <label>{item.name}</label>
            <button
              onClick={() => {
                handleDeleteTodo(index);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Content;
