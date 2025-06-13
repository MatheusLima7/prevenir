import { createSelector } from "@reduxjs/toolkit";

import { useAppSelector } from "@store/hooks";
import { RootState } from "@store/reducers";

const selectAuthState = (state: RootState) => state.auth;

const selectToken = createSelector(
  selectAuthState,
  (auth) => auth.access_token
);

const idToken = createSelector(selectAuthState, (auth) => auth.id_token);

const selectTokenType = createSelector(
  selectAuthState,
  (auth) => auth.token_type
);

const selectUser = createSelector(selectAuthState, (auth) => auth.user);

export const useIdToken = () => useAppSelector(idToken);
export const useToken = () => useAppSelector(selectToken);
export const useTokenType = () => useAppSelector(selectTokenType);
export const useUser = () => useAppSelector(selectUser);
