import authApi from "./auth.api";
import authSlice from "./auth.slice";

export * from "./auth.selectors";
export * from "./auth.types";

export { default as authApi } from "./auth.api";

export const { useLoginMutation } = authApi;

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
