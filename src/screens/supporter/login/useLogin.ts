import loginConstants from "./login.constants";
import { useAppDispatch } from "@store/hooks";
import { setAppTypeUserLogged } from "@src/features/app/slice";
import { Linking } from "react-native";

export default () => {
  const { text_button, url } = loginConstants;
  const dispatch = useAppDispatch();

  const onLogInPress = async () => {
    dispatch(setAppTypeUserLogged("supporter"));
    await Linking.openURL(url);
  };

  return {
    onLogInPress,
    text_button,
  };
};
