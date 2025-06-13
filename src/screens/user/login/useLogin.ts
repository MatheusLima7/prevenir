import { setAppTypeUserLogged } from "@src/features/app/slice";
import loginConstants from "./login.constants";
import { Linking } from "react-native";
import { useAppDispatch } from "@src/store/hooks";

export default () => {
  const dispatch = useAppDispatch();
  const { text_button, url } = loginConstants;

  const onPress = async () => {
    dispatch(setAppTypeUserLogged("user"));
    await Linking.openURL(url);
  };

  return {
    onPress,
    text_button,
  };
};
