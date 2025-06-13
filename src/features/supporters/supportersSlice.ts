import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SupportersState } from "./supporterTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@supporter_app_state";

const initialState: SupportersState = {
  hasRegistered: false,
};

const supportersSlice = createSlice({
  name: "supporters",
  initialState,
  reducers: {
    setHasRegistered(state, action: PayloadAction<boolean>) {
      state.hasRegistered = action.payload;
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    },
    loadFromStorage(state, action: PayloadAction<SupportersState>) {
      return action.payload;
    },
  },
});

export const { setHasRegistered, loadFromStorage } = supportersSlice.actions;
export const supportersReducer = supportersSlice.reducer;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loadSupporterState = () => async (dispatch: any) => {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  if (data) {
    dispatch(loadFromStorage(JSON.parse(data)));
  }
};
