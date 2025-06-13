import { setSteps } from "@src/features/form/slice";
import { QuestionsProps, StepProps } from "./formQuestions.types";
import { useAppDispatch } from "@src/store/hooks";
import mock from "./mock";
import { useStepsQuestionnaire } from "@src/features/form/selectors";
import { useEffect } from "react";

export default () => {
  const dispatch = useAppDispatch();
  const data = mock.questionnaire;
  const steps = useStepsQuestionnaire();

  const createSteps = (questions: QuestionsProps[], stepSize = 2) => {
    const arrSteps: StepProps[] = [];
    for (let i = 0; i < questions.length; i += stepSize) {
      arrSteps.push({
        currentStep: i == 0 ? true : false,
        questions: questions.slice(i, i + stepSize),
      });
    }
    dispatch(setSteps(arrSteps));
  };

  useEffect(() => {
    createSteps(data.questions);
  }, []);

  return {
    steps,
  };
};
