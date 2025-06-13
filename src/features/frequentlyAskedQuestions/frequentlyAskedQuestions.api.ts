import { AskedQuestionsResponse } from "./frequentlyAskedQuestions.types";
import { createApi } from "@reduxjs/toolkit/query/react";
import reAuthBaseQuery from "@src/helpers/reAuthBaseQuery";
import queryString from "query-string";
import Config from "react-native-config";

const frequentlyAskedQuestionsApi = createApi({
  reducerPath: "frequentlyAskedQuestions",
  baseQuery: reAuthBaseQuery(Config.API_URL),
  endpoints: (build) => ({
    askedQuestions: build.mutation<AskedQuestionsResponse, void>({
      query: () => {
        const customUrl = queryString.stringifyUrl({
          url: "/faqs",
        });
        return {
          url: customUrl,
          method: "GET",
        };
      },
    }),
  }),
});

export default frequentlyAskedQuestionsApi;
