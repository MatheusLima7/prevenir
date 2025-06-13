import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { authApi } from "@src/features/auth";

import { RootState } from "@store/reducers";

const authBaseQuery = (baseUrl?: string) =>
  fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState, endpoint }) => {
      const {
        auth: { access_token },
      } = getState() as RootState;
      if (access_token && endpoint !== "uploadAsset")
        headers.set("authorization", `Bearer ${access_token}`);

      return headers;
    },
    responseHandler: async (response) => {
      const contentType = response.headers.get("content-type") ?? "";
      if (contentType.includes("application/json")) {
        const resp = await response.json();
        return resp;
      } else {
        const text = await response.text();
        return { message: text };
      }
    },
  });

const reAuthBaseQuery =
  (
    baseUrl?: string
  ): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =>
  async (args, api, extraOptions) => {
    const baseQuery = authBaseQuery(baseUrl);

    const firstAttempt = await baseQuery(args, api, extraOptions);

    if (firstAttempt.error?.status !== 401) return firstAttempt;

    const {
      auth: { access_token, refresh_token },
    } = api.getState() as RootState;

    await api.dispatch(
      authApi.endpoints.refreshToken.initiate(refresh_token || access_token)
    );

    return baseQuery(args, api, extraOptions);
  };

export default reAuthBaseQuery;
