import { useNotifications } from "@src/features/notifications";
import { useRootNavigation } from "@src/stacks";
import routes from "@src/stacks/routes";

export default () => {
  const { navigate } = useRootNavigation();
  const notifications = useNotifications();
  const hasNotification = notifications.data.length > 0;
  const onPress = () => {
    navigate(routes.MENU, {
      screen: routes.NOTIFICATIONS,
    });
  };

  return {
    hasNotification,
    onPress,
  };
};
