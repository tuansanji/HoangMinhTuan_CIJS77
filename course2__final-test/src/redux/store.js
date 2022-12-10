import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
const store = configureStore({
  reducer: {
    todolist: reducer.reducer,
  },
});
export default store;
