import { createSlice } from "@reduxjs/toolkit";

const getStartSlice = createSlice({
  name: "getStart",
  initialState: {
    getStartState: false,
  },
  reducers: {
    toggleGetStarted: (state) => {
      state.getStartState = !state.getStartState;
    },
  },
});

export const { toggleGetStarted } = getStartSlice.actions;

export default getStartSlice.reducer;
