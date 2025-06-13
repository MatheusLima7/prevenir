import { Wrapper, Image, Badge } from "./notificationBadge.styles";
import useNotificationBadge from "./useNotificationBadge";

export default function NotificationBadge() {
  const { hasNotification, onPress } = useNotificationBadge();

  return (
    <Wrapper onPress={onPress}>
      {hasNotification && <Badge />}
      <Image />
    </Wrapper>
  );
}
