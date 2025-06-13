import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import api from "./feed.api";
import {
  Feed,
  FeedDetailData,
  FeedsData,
  FeedsResponse,
  NormalizedFeedDetailData,
} from "./feed.types";

const feedsInitialState: FeedsData = {
  data: [],
  pageNumber: 0,
  nextPage: 0,
  lastPage: 0,
  pageSize: 0,
  totalPages: 0,
  total: 0,
};

const feedInitialState: NormalizedFeedDetailData = {
  category: "",
  description: "",
  feedId: "",
  images: [],
  publicationDate: "",
  sketch: false,
  title: "",
  userId: "",
  userName: "",
  userNumbers: [],
};

const feedsSlice = createSlice({
  name: "feeds",
  initialState: feedsInitialState,
  reducers: {
    setData: (state, action: PayloadAction<Feed[]>) => ({
      ...state,
      data: action.payload,
    }),
    reset: () => feedsInitialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action: PayloadAction<FeedsResponse<FeedsData>>) =>
        api.endpoints.feeds.matchFulfilled(action),
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
              data: data,
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

const feedSlice = createSlice({
  name: "feed",
  initialState: feedInitialState,
  reducers: {
    setData: (
      state,
      action: PayloadAction<FeedsResponse<{ data: FeedDetailData }>>
    ) => ({
      ...state,
      data: action.payload.response.data,
    }),
    reset: () => feedInitialState,
  },
});

export const { setData: setFeedsData } = feedsSlice.actions;
export const { setData: setFeedData } = feedSlice.actions;

export { feedsSlice, feedSlice };
