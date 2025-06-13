import { useEffect } from "react";
import frequentlyAskedQuestionsConstants from "./frequentlyAskedQuestions.constants";
import { useAskedQuestionsMutation } from "@src/features/frequentlyAskedQuestions";

export default () => {
  const { items } = frequentlyAskedQuestionsConstants;
  const [fetchAskedQuestions, { isLoading }] = useAskedQuestionsMutation();

  useEffect(() => {
    const init = async () => {
      await fetchAskedQuestions();
    };

    init();
  }, []);

  return {
    items,
    isLoading,
  };
};
