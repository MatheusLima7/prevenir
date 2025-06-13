import tellYourHistoryConstants from "./finish.constants";
import { useAppDispatch } from "@src/store/hooks";
import { setAppQuestionsFinished } from "@src/features/app/slice";

export default () => {
  const dispatch = useAppDispatch();
  const { title, subtitle, button } = tellYourHistoryConstants;

  const onPress = () => {
    dispatch(setAppQuestionsFinished(true));
  };

  return {
    onPress,
    title,
    subtitle,
    button,
  };
};
