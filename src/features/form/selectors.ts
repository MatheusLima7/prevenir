import { useAppSelector } from "@store/hooks";

export const useFormPersonal = () =>
  useAppSelector(({ form: { personal } }) => personal);

export const useFormQuestionnaire = () =>
  useAppSelector(({ form: { questionnaire } }) => questionnaire);

export const useStepsQuestionnaire = () =>
  useAppSelector(({ form: { steps } }) => steps);
