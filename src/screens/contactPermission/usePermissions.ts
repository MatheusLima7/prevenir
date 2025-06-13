import permissionsConstatns from "./permissions.constants";
import { useAppDispatch } from "@src/store/hooks";
import { check, PermissionStatus, request } from "react-native-permissions";
import { CONTACTS_PERMISSION } from "./general.constants";
import {
  setContactPermissionDisabled,
  setSkipContactPermission,
} from "@src/features/app/slice";

export default () => {
  const dispatch = useAppDispatch();
  const { request_permissions, skip_request_permissions, title, text } =
    permissionsConstatns;

  const requestContact = async (permission: PermissionStatus) => {
    if (["blocked", "denied"].includes(permission)) {
      return await request(CONTACTS_PERMISSION);
    }
  };

  const onPress = async () => {
    const status = await check(CONTACTS_PERMISSION);
    const response = await requestContact(status);
    if (response === "granted") {
      dispatch(setContactPermissionDisabled(false));
    }
  };

  const onSkipPress = () => {
    dispatch(setSkipContactPermission(true));
  };

  return {
    onPress,
    request_permissions,
    skip_request_permissions,
    title,
    text,
    onSkipPress,
  };
};
