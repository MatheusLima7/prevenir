import { UnitsResponse } from "./unit.types";
import { createApi } from "@reduxjs/toolkit/query/react";
import reAuthBaseQuery from "@src/helpers/reAuthBaseQuery";
import queryString from "query-string";
import Config from "react-native-config";

const unitsApi = createApi({
  reducerPath: "unitsApi",
  baseQuery: reAuthBaseQuery(Config.URL),
  endpoints: (build) => ({
    units: build.mutation<UnitsResponse, Record<string, string>>({
      query: (params) => {
        const customUrl = queryString.stringifyUrl({
          url: "/units",
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

export default unitsApi;
