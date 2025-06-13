import routes from "@src/stacks/routes";
import persistenceBannerContants from "./persistenceBanner.contants";
import { useRootNavigation } from "@src/stacks";

export default () => {
  const { navigate } = useRootNavigation();
  const {
    last_reward,
    persistence,
    congratulations,
    persevered,
    no_prize,
    dont_worry,
  } = persistenceBannerContants;

  const onPress = () => {
    navigate(routes.AWARDS);
  };

  return {
    last_reward,
    persistence,
    congratulations,
    persevered,
    no_prize,
    dont_worry,
    onPress,
  };
};
