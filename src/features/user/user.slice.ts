import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserProps } from "../auth";

const initialState: UserProps = {
  at_hash: "",
  aud: "",
  auth_time: 0,
  cognito: [""],
  email: "",
  email_verified: false,
  exp: 0,
  iat: 0,
  invalid_user: false,
  iss: "",
  jti: "",
  key: "",
  name: "",
  nonce: "",
  origin_jti: "",
  picture: "",
  preferred_username: "",
  sub: "",
  token_use: "",
  userId: "",
  dateRegister: "",
  lastLogin: "",
  profile: "",
  unit: "",
  unitId: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<UserProps[]>) => ({
      ...state,
      ...action.payload,
    }),
    reset: () => initialState,
  },
});

export const { setData } = userSlice.actions;

export default userSlice;
