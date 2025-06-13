import { useEffect, useState } from "react";
import selectConstants from "./select.constants";
import { OptionProps, SelectedOption } from "./option.types";
import { SelectProps } from "./select.types";
import routes from "@src/stacks/routes";
import { useRootNavigation } from "@src/stacks";

export default ({ onPress }: SelectProps) => {
  const { choose, initialOptions, finished_answers } = selectConstants;
  const { navigate } = useRootNavigation();

  const [options, setOptions] = useState<OptionProps[]>([]);
  const [currentQuestions, setCurrentQuestions] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const onPressOption = (selectedOption: SelectedOption) => {
    onPress(selectedOption);
    const next = currentQuestions + 1;
    if (initialOptions?.[next]) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentQuestions(next);
        setOptions(initialOptions[next]);
        setIsLoading(false);
      }, 4500);
    } else {
      setCurrentQuestions(99); // 99 is finished
      setOptions([]);
    }
  };

  useEffect(() => {
    const init = () => {
      setOptions(initialOptions[currentQuestions]);
    };

    init();
  }, []);

  const onFinish = () => {
    navigate(routes.QUESTIONNAIRE_COMPLETED);
  };

  return {
    choose,
    onPressOption,
    options,
    isFinishedQuestions: currentQuestions === 99,
    finished_answers,
    isLoading,
    onFinish,
  };
};
