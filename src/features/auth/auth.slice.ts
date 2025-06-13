import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import api from "./auth.api";
import { Auth, UserProps } from "./auth.types";
import { jwtDecode } from "jwt-decode";

const initialState: Auth = {
  access_token: null,
  expires_in: 3600,
  id_token: null,
  refresh_token: null,
  token_type: null,
  user: null,
};

export const extractUserFromIdToken = (idToken: string) => {
  try {
    const decoded = jwtDecode<UserProps>(idToken);
    return decoded;
  } catch (error) {
    console.error("Token inválido", error);
    return null;
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<UserProps>) => ({
      ...state,
      user: { ...state.user, ...action.payload },
    }),
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action: PayloadAction<Auth>) =>
        api.endpoints.login.matchFulfilled(action) ||
        api.endpoints.refreshToken.matchFulfilled(action),
      (
        state,
        {
          payload: {
            access_token,
            expires_in,
            id_token,
            refresh_token,
            token_type,
          },
        }
      ) => ({
        access_token,
        expires_in,
        id_token,
        refresh_token,
        token_type,
        user: id_token ? extractUserFromIdToken(id_token) : null,
      })
    );
  },
});

export const { logout, setUser } = authSlice.actions;

export default authSlice;
