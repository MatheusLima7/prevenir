import { PosConfirmBodyProps, PosConfirmBodyResponse } from "./user.types";

import { createApi } from "@reduxjs/toolkit/query/react";
import reAuthBaseQuery from "@src/helpers/reAuthBaseQuery";
import queryString from "query-string";
import { DeleteAccountResponse } from "../auth";
import Config from "react-native-config";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: reAuthBaseQuery(Config.API_URL),
  endpoints: (build) => ({
    posConfirm: build.mutation<PosConfirmBodyResponse, PosConfirmBodyProps>({
      query: (response) => {
        const customUrl = queryString.stringifyUrl({
          url: "/users/posconfirm/newuser",
        });
        return {
          url: customUrl,
          method: "POST",
          body: response,
        };
      },
    }),
    deleteAccount: build.mutation<DeleteAccountResponse, { userId: string }>({
      query: ({ userId }) => {
        return {
          url: `/users/${userId}`,
          method: "DELETE",
          body: {},
        };
      },
    }),
    user: build.query<DeleteAccountResponse, string>({
      query: (userId) => `/users/${userId}`,
    }),
  }),
});

export default userApi;
