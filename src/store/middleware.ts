import { authApi } from "@features/auth";
import { assetsApi } from "@src/features/assets";
import { feedsApi } from "@src/features/feed";
import { notificationsApi } from "@src/features/notifications";
import { unitsApi } from "@src/features/unit";
import { userApi } from "@src/features/user";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (getDefaultMiddleware: any) => {
  const middleware = getDefaultMiddleware({
    serializableCheck: false,
  })
    .concat(authApi.middleware)
    .concat(assetsApi.middleware)
    .concat(notificationsApi.middleware)
    .concat(userApi.middleware)
    .concat(unitsApi.middleware)
    .concat(feedsApi.middleware);

  return middleware;
};
