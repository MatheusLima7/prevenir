import { LoginBodyProps, LoginResponse, UserProps } from "./auth.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import queryString from "query-string";
import authSlice, { extractUserFromIdToken } from "./auth.slice";
import Config from "react-native-config";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/x-www-form-urlencoded");
      return headers;
    },
    responseHandler: async (response) => {
      const contentType = response.headers.get("content-type") ?? "";

      if (contentType.includes("application/json")) {
        return await response.json();
      } else {
        const text = await response.text();
        return { message: text };
      }
    },
  }),
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginBodyProps>({
      query: (params) => {
        const customUrl = queryString.stringifyUrl({
          url: Config.AUTH_API_URL + "/oauth2/token",
          query: params,
        });

        return {
          url: customUrl,
          method: "POST",
        };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const response = await queryFulfilled;

          const user: UserProps | null = extractUserFromIdToken(
            response?.data.id_token
          );
          const userData = await fetch(
            `${Config.API_URL}/users/user/${user?.key}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${response?.data.access_token}`,
              },
            }
          ).then((res) => res.json());
          if (userData?.response?.data) {
            dispatch(authSlice.actions.setUser(userData.response.data));
          }
        } catch (err) {
          console.error("Erro ao buscar dados adicionais do usuário:", err);
        }
      },
    }),
    refreshToken: build.mutation<LoginResponse, string | null>({
      query: (refreshToken) => {
        return {
          url: Config.API_URL + "/v1/auth/refresh",
          method: "POST",
          body: {
            grant_type: "refresh_token",
            refresh_token: refreshToken,
          },
        };
      },
    }),
  }),
});

export default authApi;
