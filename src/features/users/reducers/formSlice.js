import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const formSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email, skills } = action.payload;
      const currentUser = state.find((user) => user.id === id);
      if (currentUser) {
        currentUser.name = name;
        currentUser.email = email;
        currentUser.skills = skills;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const currentUser = state.find((user) => user.id === id);
      if (currentUser) {
        return (state = state.filter((user) => user.id !== id));
      }
    },
  },
});
export const { addUser, editUser, deleteUser } = formSlice.actions;

export default formSlice.reducer;
