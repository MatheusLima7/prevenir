import permissionsConstatns from "./permissions.constants";
import { useAppDispatch } from "@src/store/hooks";
import { check, request } from "react-native-permissions";
import { FOREGROUND_LOCATION_PERMISSION } from "./general.constants";
import { RequestProps } from "./permissions.types";
import {
  setLocationPermissionDisabled,
  setSkipLocationPermission,
} from "@src/features/app/slice";

export default () => {
  const dispatch = useAppDispatch();
  const { request_permissions, skip_request_permissions, title, text } =
    permissionsConstatns;

  const requestLocation = async ({ foreground }: RequestProps) => {
    if (["denied", "blocked"].includes(foreground)) {
      return await request(FOREGROUND_LOCATION_PERMISSION);
    }

    return foreground;
  };

  const onPress = async () => {
    const foreground = await check(FOREGROUND_LOCATION_PERMISSION);

    const response = await requestLocation({ foreground });
    if (response === "granted") {
      dispatch(setLocationPermissionDisabled(false));
    }
  };

  const onSkipPress = () => {
    dispatch(setSkipLocationPermission(true));
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
