import { useRootNavigation } from "@src/stacks";
import questionnaireCompletedConstants from "./questionnaireCompleted.constants";
import routes from "@src/stacks/routes";
import { setAppQuestionnaireCompleted } from "@src/features/app/slice";
import { useAppDispatch } from "@src/store/hooks";
import { getCurrentDate } from "@src/utils/date";

export default () => {
  const { navigate } = useRootNavigation();
  const dispatch = useAppDispatch();

  const { title, subtitle, go_to_menu } = questionnaireCompletedConstants;

  const onPress = () => {
    const formattedDate = getCurrentDate();
    dispatch(
      setAppQuestionnaireCompleted({ name: formattedDate, value: true })
    );
    navigate(routes.ROOT_TAB);
  };

  return {
    title,
    subtitle,
    onPress,
    go_to_menu,
  };
};
