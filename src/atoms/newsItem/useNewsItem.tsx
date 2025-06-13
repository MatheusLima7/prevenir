import { updateNotificationItem } from "@src/features/notifications/notifications.slice";
import { ContentImage, Image, TrophyImage } from "./newsItem.styles";
import { TypeProps } from "./newsItem.types";
import RobotImage from "@assets/robot-heart.png";
import Trophy from "@assets/trophy.png";
import { useAppDispatch } from "@src/store/hooks";
import { useRootNavigation } from "@src/stacks";
import routes from "@src/stacks/routes";
import { useReadedNotificationMutation } from "@src/features/notifications";

export default (type: TypeProps) => {
  const dispatch = useAppDispatch();
  const { navigate } = useRootNavigation();
  const [fetchReadedNotification] = useReadedNotificationMutation();

  const getImage = () => {
    switch (true) {
      case type === "CONGRATULATIONS":
        return (
          <>
            <ContentImage></ContentImage>
            <Image source={RobotImage} />
          </>
        );

      case type === "REWARDS":
        return <TrophyImage source={Trophy} />;

      default:
        return <></>;
    }
  };

  const onPress = async (id: string) => {
    dispatch(updateNotificationItem(id));

    await fetchReadedNotification({
      targetId: id,
      readed: true,
    });
    if (type === "JOB_OPPORTUNITY") {
      navigate(routes.FEED, {
        screen: routes.DETAIL_FEED,
        params: { code: id },
      });
    }
  };

  return {
    getImage,
    hasDate: !(type === "CONGRATULATIONS"),
    hasImageInLeft: type === "REWARDS",
    onPress,
  };
};
