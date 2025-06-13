import { useRootNavigation } from "@src/stacks";
import feedItemConstants from "./feedItem.constants";
import routes from "@src/stacks/routes";
export default () => {
  const { navigate } = useRootNavigation();
  const { see_details } = feedItemConstants;

  const onPress = (code: string) => {
    navigate(routes.DETAIL_FEED, { code });
  };

  return {
    see_details,
    onPress,
  };
};
