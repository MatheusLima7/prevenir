import { useRootNavigation } from "@src/stacks";
import psychoactiveSubstanceUseConstants from "./psychoactiveSubstanceUse.constants";
import routes from "@src/stacks/routes";
import { useEffect, useState } from "react";
import { setSelectedDate } from "@src/features/psycho/slice";
import { useAppDispatch } from "@src/store/hooks";
import { usePsychoSelectedDate } from "@src/features/psycho/selectors";
import { setAppPsychoActiveSubstanceUse } from "@src/features/app/slice";
import { getCurrentDate } from "@src/utils/date";
import { QuestionsProps } from "./psychoactiveSubstanceUse.types";

export default () => {
  const { navigate } = useRootNavigation();
  const [answer, setAnswer] = useState<boolean | null>(null);
  const dispatch = useAppDispatch();
  const selectedDate = usePsychoSelectedDate();
  const [questions, setQuestions] = useState<QuestionsProps[]>([]);

  const currentTitle = questions.find((item) => {
    if (!item?.answered) {
      return item;
    }
  })?.title;

  const isDisabledButton =
    answer === null || (answer == true && selectedDate == null);

  const { titles, subtitle, button_nope, button_yes, next_button } =
    psychoactiveSubstanceUseConstants;

  const onPress = () => {
    if (isDisabledButton) return;

    const formattedDate = getCurrentDate();
    if (currentTitle) {
      dispatch(
        setAppPsychoActiveSubstanceUse({
          name: formattedDate,
          currentTitle,
          value: answer,
          selectedDate: selectedDate ?? null,
        })
      );
      if (currentTitle === questions[questions.length - 1].title) {
        navigate(routes.NEW_QUESTIIONAIRE);
      } else {
        const newQuestions = questions.map((item) => {
          if (item?.title === currentTitle) {
            return {
              ...item,
              answered: true,
            };
          }
          return item;
        });
        setAnswer(null);
        setQuestions(newQuestions);
        dispatch(setSelectedDate(null));
      }
    }
  };

  const onRejectPress = () => {
    setAnswer(false);
    dispatch(setSelectedDate(null));
  };

  const onConfirmPress = () => {
    setAnswer(true);
  };

  useEffect(() => {
    setQuestions(titles);
  }, [titles]);

  return {
    onPress,
    title: currentTitle,
    subtitle,
    button_nope,
    button_yes,
    next_button,
    onRejectPress,
    onConfirmPress,
    answer,
    selectedDate,
    isDisabledButton,
  };
};
