import { createSlice } from "@reduxjs/toolkit";

const userNameSlice = createSlice({
  name: "userName",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
  },

  reducers: {
    enterUserName: (state, payload) => {
      state.currentUser = payload;
    },
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchSuccess: (state) => {
      state.loading = false;
      state.error = false;
    },
  },
});

export const { enterUserName, fetchStart, fetchSuccess } =
  userNameSlice.actions;

export default userNameSlice.reducer;