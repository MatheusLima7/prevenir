import React, { FC, ReactNode } from "react";
import { ActivityIndicator } from "react-native";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "./index";

type StoreProviderProps = {
  children: ReactNode;
};

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </>
  );
};

export default StoreProvider;
