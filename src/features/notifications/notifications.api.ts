import {
  NotificationArgProps,
  NotificationsResponse,
  ReadedNotificationArgProps,
} from "./notifications.types";
import { createApi } from "@reduxjs/toolkit/query/react";
import reAuthBaseQuery from "@src/helpers/reAuthBaseQuery";
import queryString from "query-string";
import Config from "react-native-config";

const notificationsApi = createApi({
  reducerPath: "notificationsApi",
  baseQuery: reAuthBaseQuery(Config.API_URL),
  endpoints: (build) => ({
    notifications: build.mutation<NotificationsResponse, NotificationArgProps>({
      query: (params) => {
        const customUrl = queryString.stringifyUrl({
          url: "/notifications",
          query: params,
        });
        return {
          url: customUrl,
          method: "GET",
        };
      },
    }),
    readedNotification: build.mutation<
      NotificationsResponse,
      ReadedNotificationArgProps
    >({
      query: (body) => {
        return {
          url: "v1/notifications/" + body?.targetId,
          method: "PATCH",
          body: {
            readed: body?.readed,
          },
        };
      },
    }),
  }),
});

export default notificationsApi;
