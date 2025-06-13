import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PsychoState } from "./types";

const initialState: PsychoState = {
  selectedDate: null,
};

const psychoSlice = createSlice({
  name: "psycho",
  initialState,
  reducers: {
    setSelectedDate: (state, action: PayloadAction<string | null>) => ({
      ...state,
      selectedDate: action.payload,
    }),
  },
});

export const { setSelectedDate } = psychoSlice.actions;
export default psychoSlice.reducer;
