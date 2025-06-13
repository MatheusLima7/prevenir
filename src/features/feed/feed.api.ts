import { createApi } from "@reduxjs/toolkit/query/react";
import reAuthBaseQuery from "@src/helpers/reAuthBaseQuery";
import queryString from "query-string";
import { FeedDetailDataResponse, FeedsData, FeedsResponse } from "./feed.types";
import Config from "react-native-config";
const feedsApi = createApi({
  reducerPath: "feedsApi",
  baseQuery: reAuthBaseQuery(Config.API_URL),
  endpoints: (build) => ({
    feeds: build.mutation<FeedsResponse<FeedsData>, Record<string, string>>({
      query: (params) => {
        const customUrl = queryString.stringifyUrl({
          url: "/feeds",
          query: params,
        });
        return {
          url: customUrl,
          method: "GET",
        };
      },
    }),
    feed: build.query<FeedsResponse<FeedDetailDataResponse>, string>({
      query: (id) => {
        return `/feeds/${id}`;
      },
    }),
  }),
});

export default feedsApi;
