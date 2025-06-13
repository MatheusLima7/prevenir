import supportedsApi from "./supporteds.api";
import supportedsSlice from "./supporteds.slice";

export * from "./supporteds.selectors";
export * from "./supporteds.types";

export { default as supportedsApi } from "./supporteds.api";

export const { useGetSupportedsMutation } = supportedsApi;

export const supportedsReducer = supportedsSlice.reducer;

export const { setData } = supportedsSlice.actions;
