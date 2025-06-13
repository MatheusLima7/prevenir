import notificationsApi from "./notifications.api";
import notificationsSlice from "./notifications.slice";

export * from "./notifications.selectors";
export * from "./notifications.types";

export { default as notificationsApi } from "./notifications.api";

export const { useNotificationsMutation, useReadedNotificationMutation } =
  notificationsApi;

export const notificationsReducer = notificationsSlice.reducer;

export const { setData } = notificationsSlice.actions;
