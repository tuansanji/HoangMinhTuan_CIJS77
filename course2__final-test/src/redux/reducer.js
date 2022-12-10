import { createSlice } from "@reduxjs/toolkit";
import storage from "./storage";
export default createSlice({
  name: "todolist",
  initialState: storage.get(),
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      storage.set(state);
    },
    deleteTodo: (state, action) => {
      state.splice(action.payload, 1);
      storage.set(state);
    },
    deleteAllComplete: (state, action) => {
      let newState = state.filter((item) => !item.complete);
      storage.set(newState);
    },
    deleteAll: (state, action) => {
      state.splice(action.payload, state.length);
    },
    toggleTodo: (state, action) => {
      const item = state[action.payload];
      item.complete = !item.complete;
      storage.set(state);
    },
    toggleAll: (state, action) => {
      state.forEach((item) => {
        item.complete = action.payload;
      });
      storage.set(state);
    },
    // xử lí được nhưng nó vẫn chưa rerender
    switchFilter: (state, action) => {
      if (action.payload === "active") {
        state = state.filter((item) => !item.complete);
        console.log("active", state);
      }
      if (action.payload === "complete") {
        state = state.filter((item) => item.complete);
        console.log("complete", state);
      }
      if (action.payload === "all") {
        state = storage.get();
      }
    },
  },
});
