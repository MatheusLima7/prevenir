import frequentlyAskedQuestionsApi from "./frequentlyAskedQuestions.api";
import frequentlyAskedQuestionsSlice from "./frequentlyAskedQuestions.slice";

export * from "./frequentlyAskedQuestions.selectors";
export * from "./frequentlyAskedQuestions.types";

export { default as frequentlyAskedQuestionsApi } from "./frequentlyAskedQuestions.api";

export const { useAskedQuestionsMutation } = frequentlyAskedQuestionsApi;

export const frequentlyAskedQuestionsReducer =
  frequentlyAskedQuestionsSlice.reducer;

export const { setData } = frequentlyAskedQuestionsSlice.actions;
