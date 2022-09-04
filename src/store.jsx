import { configureStore } from "@reduxjs/toolkit";
import formReducers from "./features/users/reducers/formSlice";
export const store = configureStore({
  reducer: {
    users: formReducers,
  },
});
