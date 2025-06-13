import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import api from "./frequentlyAskedQuestions.api";
import {
  AskedQuestions,
  AskedQuestionsProps,
} from "./frequentlyAskedQuestions.types";

const initialState: AskedQuestions = {
  data: [],
  pageNumber: 0,
  nextPage: 0,
  lastPage: 0,
  pageSize: 0,
  totalPages: 0,
  total: 0,
};

const frequentlyAskedQuestionsSlice = createSlice({
  name: "frequentlyAskedQuestions",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<AskedQuestionsProps[]>) => ({
      ...state,
      data: action.payload,
    }),
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action: PayloadAction<AskedQuestions>) =>
        api.endpoints.askedQuestions.matchFulfilled(action),
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
              data: state.data.concat(data),
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

export const { setData } = frequentlyAskedQuestionsSlice.actions;

export default frequentlyAskedQuestionsSlice;
