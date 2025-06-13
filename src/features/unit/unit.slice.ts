import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import api from "./unit.api";
import { Unit, UnitsResponse } from "./unit.types";

const initialState: UnitsResponse["response"] = {
  data: [],
  pageNumber: 0,
  nextPage: 0,
  lastPage: 0,
  pageSize: 0,
  totalPages: 0,
  total: 0,
};

const unitsSlice = createSlice({
  name: "units",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Unit[]>) => ({
      ...state,
      data: action.payload,
    }),
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action: PayloadAction<UnitsResponse["response"]>) =>
        api.endpoints.units.matchFulfilled(action),
      (state, { payload }) => {
        if (payload?.message == "Get request successfully!") {
          const {
            response: {
              data,
              pageNumber,
              nextPage,
              lastPage,
              pageSize,
              totalPages,
              total,
            },
          } = payload;

          if (
            pageNumber !== state.pageNumber ||
            (state.pageNumber == 0 && pageNumber == 0)
          ) {
            return {
              data: data.concat(data),
              pageNumber,
              nextPage,
              lastPage,
              pageSize,
              totalPages,
              total,
            };
          }
        }
        return {
          ...state,
        };
      }
    );
  },
});

export const { setData } = unitsSlice.actions;

export default unitsSlice;
