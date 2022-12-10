import { createSlice, current } from "@reduxjs/toolkit";
import storage from "./storage";
export default createSlice({
  name: "todolist",
  initialState:
    //   {
    storage.get(),
  // filter: "all",
  // filters: {
  //   all: () => true,
  //   active: (todo) => todo.complete,
  //   complete: (todo) => !todo.complete,
  // },
  //   },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      storage.set(state);
    },
    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
      storage.set(state);
    },
    deleteAllComplete: (state, action) => {
      const newState = state.todos.filter((item) => !item.complete);
      storage.set(newState);
    },
    deleteAll: (state, action) => {
      state.todos.splice(action.payload, state.length);
    },
    toggleTodo: (state, action) => {
      const item = state.todos[action.payload];
      item.complete = !item.complete;
      storage.set(state);
    },
    toggleAll: (state, action) => {
      state.todos.forEach((item) => {
        item.complete = action.payload;
      });
      storage.set(state);
    },
    // xử lí được nhưng nó vẫn chưa rerender
    switchFilter: (state, action) => {
      if (action.payload === "active") {
        // state.filter = "active";
        // storage.set(state);

        const minhtuan = current(state).filter((item) => !item.complete);
        console.log(minhtuan);
      }
      if (action.payload === "complete") {
        // state.filter = "complete";
        // storage.set(state);

        state = state.filter((item) => item.complete);
        console.log("complete", state);
      }
      if (action.payload === "all") {
        // state.filter = "all";
        // storage.set(state);

        state = storage.get();
      }
    },
  },
});
