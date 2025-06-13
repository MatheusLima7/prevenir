import { useRootNavigation } from "@src/stacks";
import newQuestionnaireConstants from "./newQuestionnaire.constants";
import routes from "@src/stacks/routes";

export default () => {
  const { navigate } = useRootNavigation();

  const { title, subtitle, button } = newQuestionnaireConstants;

  const onPress = () => {
    navigate(routes.PERIODIC_QUESTIONNAIRE);
  };

  return {
    onPress,
    title,
    subtitle,
    button,
  };
};
