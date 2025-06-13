import { Notifications, useNotifications } from "@src/features/notifications";

export default () => {
  const notifications: Notifications = useNotifications();
  const data = notifications?.data;

  return {
    news: data,
  };
};
