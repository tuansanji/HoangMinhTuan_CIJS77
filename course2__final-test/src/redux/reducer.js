import { createSlice, current } from "@reduxjs/toolkit";
import storage from "./storage";
export default createSlice({
  name: "todolist",
  initialState: {
    todos: storage.get(),
    filter: "all",
    filters: {
      all: (todo) => todo,
      active: (todo) => todo.complete,
      complete: (todo) => !todo.complete,
    },
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      storage.set(state.todos);
    },
    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
      storage.set(state.todos);
    },
    deleteAllComplete: (state, action) => {
      state.todos = state.todos.filter((item) => !item.complete);
      storage.set(state.todos);
    },
    deleteAll: (state, action) => {
      state.todos.splice(action.payload, state.todos.length);
      storage.set(state.todos);
    },
    toggleTodo: (state, action) => {
      const item = state.todos[action.payload];
      item.complete = !item.complete;
      storage.set(state.todos);
    },
    toggleAll: (state, action) => {
      state.forEach((item) => {
        item.complete = action.payload;
      });
      storage.set(state.todos);
    },

    switchFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
