import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Supporteds, SupportedsProps } from "./supporteds.types";

const initialState: Supporteds = {
  supporteds: [],
};

const supportedsSlice = createSlice({
  name: "supporteds",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<SupportedsProps[]>) => ({
      ...state,
      supporteds: [...state.supporteds, ...action.payload],
    }),
  },
});

export const { setData } = supportedsSlice.actions;

export default supportedsSlice;
