import userApi from "./user.api";
import userSlice from "./user.slice";

export * from "./user.selectors";
export * from "./user.types";

export { default as userApi } from "./user.api";

export const userReducer = userSlice.reducer;
export const { usePosConfirmMutation, useDeleteAccountMutation } = userApi;
export const { reset, setData } = userSlice.actions;
