import { useRootNavigation } from "@src/stacks";
import tellYourHistoryConstants from "./tellYourHistory.constants";
import routes from "@src/stacks/routes";
import { setAppHistoryStarted } from "@src/features/app/slice";
import { useAppDispatch } from "@src/store/hooks";

export default () => {
  const dispatch = useAppDispatch();

  const { navigate } = useRootNavigation();

  const { title, subtitle, button } = tellYourHistoryConstants;

  const onPress = () => {
    dispatch(setAppHistoryStarted(true));
    navigate(routes.USER_FORM);
  };

  return {
    onPress,
    title,
    subtitle,
    button,
  };
};
