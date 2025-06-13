import feedsApi from "./feed.api";
import { feedSlice, feedsSlice } from "./feed.slice";

export * from "./feed.selectors";
export * from "./feed.types";

export { default as feedsApi } from "./feed.api";

export const { useFeedQuery, useFeedsMutation } = feedsApi;

export const feedReducer = feedSlice.reducer;
export const feedsReducer = feedsSlice.reducer;

export const { setData: setFeedData, reset: resetFeedData } = feedSlice.actions;
export const { setData: setFeedsData, reset: resetFeedsData } =
  feedsSlice.actions;
