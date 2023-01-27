import { configureStore } from "@reduxjs/toolkit";
import userNameReducer from "../features/userNameSlice";

const store = configureStore({
  reducer: {
    userName: userNameReducer,
  },
});
export default store;