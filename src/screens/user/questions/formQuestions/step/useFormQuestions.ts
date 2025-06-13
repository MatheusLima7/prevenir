import { useState } from "react";
import {
  FormDescriptionProps,
  FormProps,
  OptionProps,
  SeSelectedOptionsForQuestionProps,
  StepProps,
} from "./formQuestions.types";
import generalConstants from "./general.constants";
import { useAppDispatch } from "@src/store/hooks";
import mock from "./mock";
import { setSteps } from "@src/features/form/slice";
import {
  useFormQuestionnaire,
  useStepsQuestionnaire,
} from "@src/features/form/selectors";
import { setAppQuestionsAnswered } from "@src/features/app/slice";
import { ErrorProps } from "@src/atoms/error/error.types";

export default (step?: StepProps) => {
  const dispatch = useAppDispatch();
  const data = mock.questionnaire;
  const [form, setForm] = useState<FormProps>({});
  const [formDescription, setFormDescription] = useState<FormDescriptionProps>(
    {}
  );
  const { next_button } = generalConstants;
  const questionnaire = useFormQuestionnaire();
  const steps = useStepsQuestionnaire();
  const countSteps = Math.floor(steps.length / 2) + 3;
  const [errors, setErrors] = useState<ErrorProps[]>([]);

  function toggleItem<T>(array: T[], item: T): T[] {
    return array?.includes(item)
      ? array?.filter((i) => i !== item)
      : [...array, item];
  }

  const setSelectedsForQuestion = ({
    number,
    answer,
  }: SeSelectedOptionsForQuestionProps) => {
    const customForm: FormProps = {};
    if (form?.[number]) {
      customForm[number] = form?.[number];
    } else {
      customForm[number] = [];
    }
    customForm[number] = toggleItem(customForm[number] ?? [], answer);

    setForm({ ...form, ...customForm });
  };

  const onNextPress = () => {
    if (!step) return;

    const customQuestions = [...step.questions].sort(
      (a, b) => b.orderView - a.orderView
    );

    const createErrors = [];
    let question;
    for (let i = 0; i < customQuestions.length; i++) {
      question = customQuestions[i];

      const countAnswers = form[question.id]?.length ?? 0;
      if (countAnswers == 0) {
        createErrors.push({
          title: "Atenção",
          text:
            "É obrigatório uma resposta para a questão " +
            question.orderView +
            " 👋",
          position: 10,
        });
      }
      if (countAnswers > 3) {
        createErrors.push({
          title: "Atenção",
          text:
            "3 é o número máximo de resposta  na questão " +
            question.orderView +
            " 👋",
          position: 10,
        });
      }
    }

    setErrors(createErrors);

    if (createErrors?.length === 0) {
      const cloneSteps = steps.slice();
      const currentIndex = cloneSteps.findIndex((item) => item.currentStep);

      const newArr = [...cloneSteps].map((item, index) => {
        if (currentIndex + 1 == index) {
          return { ...item, currentStep: true };
        }

        return { ...item, currentStep: false };
      });

      dispatch(setSteps([...newArr]));

      const finished = newArr.every((item) => item.currentStep === false);
      if (finished) {
        dispatch(setAppQuestionsAnswered(true));
      }
    }
  };

  const setOthersOption = (text: string, num: string) => {
    const customForm: FormDescriptionProps = {};
    if (formDescription?.[num]) {
      customForm[num] = formDescription?.[num];
    } else {
      customForm[num] = "";
    }
    customForm[num] = text;

    setFormDescription({ ...formDescription, ...customForm });
  };

  const onChange = ({
    val,
    option,
    num,
  }: {
    val: boolean;
    num: string;
    option: OptionProps;
  }) => {
    if (!val && option.orderView === 99) {
      setOthersOption("", num);
    }
    setSelectedsForQuestion({
      answer: `${option.answerId}`,
      number: num,
    });
  };

  const onErrorPress = (i: number) => {
    setErrors(
      [...errors].filter((item, index) => {
        if (index === i) return;
        return item;
      })
    );
  };

  return {
    data,
    setSelectedsForQuestion,
    next_button,
    onNextPress,
    form,
    setOthersOption,
    onChange,
    questions: [...questionnaire.questions].sort(
      (a, b) => b.orderView - a.orderView
    ),
    countQuestions: questionnaire.questions.length,
    countSteps,
    steps: steps ?? [],
    errors,
    onErrorPress,
  };
};
