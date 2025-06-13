import unitsApi from "./unit.api";
import unitsSlice from "./unit.slice";

export * from "./unit.selectors";
export * from "./unit.types";

export { default as unitsApi } from "./unit.api";

export const { useUnitsMutation } = unitsApi;

export const unitsReducer = unitsSlice.reducer;

export const { setData, reset } = unitsSlice.actions;
