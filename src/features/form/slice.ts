import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppSliceState, PersonalProps, QuestionnaireProps } from "./types";
import { StepProps } from "@src/screens/user/questions/formQuestions/step/formQuestions.types";

const initialState: AppSliceState = {
  personal: {
    name: "",
    nickName: "",
    socialName: "",
    cpf: "",
    dateDirth: "",
  },
  questionnaire: {
    id: "",
    typeQuestionnaire: "",
    questions: [],
  },
  lastUsage: "",
  steps: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setPersonalForm: (state, action: PayloadAction<PersonalProps>) => ({
      ...state,
      personal: action.payload,
    }),
    setQuestionnaire: (state, action: PayloadAction<QuestionnaireProps>) => ({
      ...state,
      questionnaire: action.payload,
    }),
    setLastUsage: (state, action: PayloadAction<string>) => ({
      ...state,
      lastUsage: action.payload,
    }),
    setSteps: (state, action: PayloadAction<StepProps[]>) => {
      return {
        ...state,
        steps: action.payload,
      };
    },
  },
});

export const { setPersonalForm, setQuestionnaire, setSteps } =
  formSlice.actions;
export default formSlice.reducer;
