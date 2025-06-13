import { SupportedsArgProps, SupportedResponse } from "./supporteds.types";
import { createApi } from "@reduxjs/toolkit/query/react";
import reAuthBaseQuery from "@src/helpers/reAuthBaseQuery";
import queryString from "query-string";
import Config from "react-native-config";

const supportedsApi = createApi({
  reducerPath: "supportedsApi",
  baseQuery: reAuthBaseQuery(Config.API_URL),
  endpoints: (build) => ({
    getSupporteds: build.mutation<SupportedResponse, SupportedsArgProps>({
      query: (params) => {
        const { supportedId } = params;
        const customUrl = queryString.stringifyUrl({
          url: `/v1/emotionals/supported/${supportedId}`,
          query: params,
        });
        return {
          url: customUrl,
          method: "GET",
        };
      },
    }),
  }),
});

export default supportedsApi;
