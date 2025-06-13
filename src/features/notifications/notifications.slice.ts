import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import api from "./notifications.api";
import { NotificationProps, Notifications } from "./notifications.types";

const initialState: Notifications = {
  data: [],
  pageNumber: 0,
  nextPage: 0,
  lastPage: 0,
  pageSize: 0,
  totalPages: 0,
  total: 0,
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<NotificationProps[]>) => ({
      ...state,
      data: [...state.data, ...action.payload],
    }),
    reset: () => initialState,
    clearNotifications: (state) => ({
      ...state,
      data: [...state.data].filter((item) => {
        if (!item.readed) {
          return { ...item };
        }
      }),
    }),
    updateNotificationItem: (state, action: PayloadAction<string>) => ({
      ...state,
      data: [...state.data].map((item) => {
        if (action.payload === item.targetId) {
          return { ...item, readed: true };
        }

        return item;
      }),
    }),
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action: PayloadAction<Notifications>) =>
        api.endpoints.notifications.matchFulfilled(action),
      (state, { payload }) => {
        if (payload?.message == "Get request successfully!") {
          const {
            response: {
              data,
              pageNumber,
              nextPage,
              lastPage,
              pageSize,
              totalPages,
              total,
            },
          } = payload;

          if (
            pageNumber !== state.pageNumber ||
            (state.pageNumber == 0 && pageNumber == 0)
          ) {
            return {
              data: state.data.concat(data),
              pageNumber,
              nextPage,
              lastPage,
              pageSize,
              totalPages,
              total,
            };
          }
        }
        return {
          ...state,
        };
      }
    );
  },
});

export const { setData, updateNotificationItem, reset, clearNotifications } =
  notificationsSlice.actions;

export default notificationsSlice;
