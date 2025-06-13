import { combineReducers } from "@reduxjs/toolkit";

import { authApi, authReducer } from "@features/auth";

import appReducer from "@features/app/slice";
import formReducer from "@features/form/slice";
import psychoReducer from "@features/psycho/slice";
import { assetsApi } from "@src/features/assets";
import {
  notificationsApi,
  notificationsReducer,
} from "@src/features/notifications";
import {
  frequentlyAskedQuestionsApi,
  frequentlyAskedQuestionsReducer,
} from "@src/features/frequentlyAskedQuestions";
import { userApi } from "@src/features/user";
import { unitsApi, unitsReducer } from "@src/features/unit";
import feedsApi from "@src/features/feed/feed.api";
import { feedReducer, feedsReducer } from "@src/features/feed";
import { supportersReducer } from "@src/features/supporters/supportersSlice";
import { supportedsReducer } from "@src/features/supporteds";

const reducers = combineReducers({
  app: appReducer,
  auth: authReducer,
  authApi: authApi.reducer,
  form: formReducer,
  psycho: psychoReducer,
  assetsApi: assetsApi.reducer,
  notifications: notificationsReducer,
  notificationsApi: notificationsApi.reducer,
  frequentlyAskedQuestions: frequentlyAskedQuestionsReducer,
  frequentlyAskedQuestionsApi: frequentlyAskedQuestionsApi.reducer,
  userApi: userApi.reducer,
  units: unitsReducer,
  unitsApi: unitsApi.reducer,
  feeds: feedsReducer,
  feed: feedReducer,
  feedsApi: feedsApi.reducer,
  supporters: supportersReducer,
  supporteds: supportedsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
