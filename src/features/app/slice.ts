import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppSliceState, TypeUserProps } from "./types";

const initialState: AppSliceState = {
  appTerms: false,
  appAuth: false,
  appSupporterTerms: false,
  appTypeUserLogged: null,
  appOnBoardingCompleted: false,
  appQuestionsFinished: false,
  appQuestionsAnswered: false,
  appFormAnswered: false,
  appHistoryStarted: false,
  appNewVersion: true,
  appContactPermissionDisabled: true,
  appLocationPermissionDisabled: true,
  appSkipContactPermission: false,
  appSkipLocationPermission: false,
  appPsychoActiveSubstanceUse: {},
  appQuestionnaireCompleted: {},
  appMenu: false,
  appUserImage: null,
  appChosenTheSupported: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppTerms: (state, action: PayloadAction<boolean>) => ({
      ...state,
      appTerms: action.payload,
    }),
    setAppSupporterTerms: (state, action: PayloadAction<boolean>) => ({
      ...state,
      appTerms: action.payload,
    }),
    setAppAuth: (state, action: PayloadAction<boolean>) => ({
      ...state,
      appAuth: action.payload,
    }),
    setAppTypeUserLogged: (state, action: PayloadAction<TypeUserProps>) => ({
      ...state,
      appTypeUserLogged: action.payload,
    }),
    setAppOnBoardingCompleted: (state, action: PayloadAction<boolean>) => ({
      ...state,
      appOnBoardingCompleted: action.payload,
    }),
    setAppQuestionsFinished: (state, action: PayloadAction<boolean>) => ({
      ...state,
      appQuestionsFinished: action.payload,
    }),
    setAppQuestionsAnswered: (state, action: PayloadAction<boolean>) => ({
      ...state,
      appQuestionsAnswered: action.payload,
    }),
    setAppFormAnswered: (state, action: PayloadAction<boolean>) => ({
      ...state,
      appFormAnswered: action.payload,
    }),
    setAppHistoryStarted: (state, action: PayloadAction<boolean>) => ({
      ...state,
      appHistoryStarted: action.payload,
    }),
    setAppNewVersion: (state, action: PayloadAction<boolean>) => ({
      ...state,
      appNewVersion: action.payload,
    }),
    setContactPermissionDisabled: (state, action: PayloadAction<boolean>) => ({
      ...state,
      appContactPermissionDisabled: action.payload,
    }),
    setLocationPermissionDisabled: (state, action: PayloadAction<boolean>) => ({
      ...state,
      appLocationPermissionDisabled: action.payload,
    }),
    setSkipContactPermission: (state, action: PayloadAction<boolean>) => ({
      ...state,
      appSkipContactPermission: action.payload,
    }),
    setSkipLocationPermission: (state, action: PayloadAction<boolean>) => ({
      ...state,
      appSkipLocationPermission: action.payload,
    }),
    setAppPsychoActiveSubstanceUse: (
      state,
      action: PayloadAction<{
        name: string;
        currentTitle: string;
        value: boolean;
        selectedDate: string | null;
      }>
    ) => ({
      ...state,
      appPsychoActiveSubstanceUse: {
        ...state.appPsychoActiveSubstanceUse,
        [action.payload.name]: {
          ...state.appPsychoActiveSubstanceUse[action.payload.name],
          [action.payload.currentTitle]: {
            answer: action.payload.value,
            selectedDate: action.payload.selectedDate,
          },
        },
      },
    }),
    setAppQuestionnaireCompleted: (
      state,
      action: PayloadAction<{ name: string; value: boolean }>
    ) => ({
      ...state,
      appQuestionnaireCompleted: {
        ...state.appQuestionnaireCompleted,
        [action.payload.name]: action.payload.value,
      },
    }),
    setAppMenu: (state, action: PayloadAction<boolean>) => ({
      ...state,
      appMenu: action.payload,
    }),
    setAppUserImage: (state, action: PayloadAction<string>) => ({
      ...state,
      appUserImage: action.payload,
    }),
    setAppChosenTheSupporter: (state, action: PayloadAction<boolean>) => ({
      ...state,
      appChosenTheSupported: action.payload,
    }),
  },
});

export const {
  setAppTerms,
  setAppAuth,
  setAppSupporterTerms,
  setAppTypeUserLogged,
  setAppOnBoardingCompleted,
  setAppQuestionsFinished,
  setAppQuestionsAnswered,
  setAppFormAnswered,
  setAppHistoryStarted,
  setAppNewVersion,
  setContactPermissionDisabled,
  setLocationPermissionDisabled,
  setSkipContactPermission,
  setSkipLocationPermission,
  setAppPsychoActiveSubstanceUse,
  setAppQuestionnaireCompleted,
  setAppMenu,
  setAppUserImage,
  setAppChosenTheSupporter,
} = appSlice.actions;

export default appSlice.reducer;
