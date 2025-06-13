import {
  setAppAuth,
  setAppMenu,
  setAppTypeUserLogged,
} from "@src/features/app/slice";
import logoutConstants from "./logout.constants";
import { useAppDispatch } from "@src/store/hooks";
import { logout } from "@src/features/auth";

export default () => {
  const { logout_text } = logoutConstants;
  const dispatch = useAppDispatch();

  const onPress = () => {
    dispatch(setAppTypeUserLogged(null));
    dispatch(setAppAuth(false));
    dispatch(setAppMenu(false));
    dispatch(logout());
  };

  return {
    logout: logout_text,
    onPress,
  };
};
