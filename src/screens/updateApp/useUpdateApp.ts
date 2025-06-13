import { setAppNewVersion } from "@src/features/app/slice";
import updateAppConstants from "./updateApp.constants";
import { useAppDispatch } from "@src/store/hooks";

export default () => {
  const dispatch = useAppDispatch();
  const { update_text, title, subtitle, text, update_now } = updateAppConstants;

  const onPress = () => {
    dispatch(setAppNewVersion(false));
  };

  return {
    update_text,
    onPress,
    title,
    subtitle,
    text,
    update_now,
  };
};
