import routes from "@src/stacks/routes";
import opportunityBannerContants from "./opportunityBanner.contants";
import { useRootNavigation } from "@src/stacks";

export default () => {
  const { navigate } = useRootNavigation();
  const { title, opportunity, and } = opportunityBannerContants;

  const onPress = () => {
    navigate(routes.FEED);
  };

  return { title, opportunity, onPress, and };
};
