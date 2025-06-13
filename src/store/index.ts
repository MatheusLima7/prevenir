import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistReducer, persistStore } from "redux-persist";
import { PersistConfig, PersistedState } from "redux-persist";

import middleware from "./middleware";
import reducers, { RootState } from "./reducers";

const config: PersistConfig<RootState> = {
  version: 2,
  key: "root",
  storage: AsyncStorage,
  whitelist: [
    "app",
    "form",
    "psycho",
    "auth",
    "notifications",
    "frequentlyAskedQuestions",
    "unitsApi",
    "supporteds",
  ],
  migrate: async (state?: PersistedState & Partial<RootState>) => {
    if (!state) return undefined;
    const {
      _persist,
      app,
      form,
      psycho,
      auth,
      notifications,
      frequentlyAskedQuestions,
      unitsApi,
      supporteds,
    } = state;

    return {
      _persist,
      app,
      form,
      psycho,
      auth,
      notifications,
      frequentlyAskedQuestions,
      unitsApi,
      supporteds,
    };
  },
};

const reducer = persistReducer(config, reducers);

const store = configureStore({
  reducer,
  middleware,
});

setupListeners(store.dispatch);

export default store;

export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export { config, persistor, reducer };
