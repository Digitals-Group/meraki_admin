import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expand: false,
};

export const { actions: sideBarExpand, reducer: sideBarExpandReducer } =
  createSlice({
    name: "sideBar",
    initialState,
    reducers: {
      setSideBarExpand: (state) => {
        state.expand = !state.expand;
      },
    },
  });
