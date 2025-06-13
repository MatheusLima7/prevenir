import emptyNotificationConstants from "./emptyNotification.constants";

export default () => {
  const { title, description } = emptyNotificationConstants;

  return {
    title,
    description,
  };
};
