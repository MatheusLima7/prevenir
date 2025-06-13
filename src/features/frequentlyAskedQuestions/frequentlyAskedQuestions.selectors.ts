import { useAppSelector } from "@store/hooks";

export const useAskedQuestions = () =>
  useAppSelector(({ frequentlyAskedQuestions }) => frequentlyAskedQuestions);
