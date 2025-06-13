import { Linking } from "react-native";
import config from "./config";
import useDeepLink from "./useDeeplink";
import { prefixes } from "./Deeplink.helpers";

export default () => {
  const linking = {
    prefixes,

    async getInitialURL() {
      const { handleLink } = useDeepLink();

      const launchURL = await Linking.getInitialURL();
      return handleLink(launchURL);
    },
    subscribe(listener: (url: string) => void) {
      const { handleLink } = useDeepLink();

      const linkingSubscription = Linking.addEventListener("url", ({ url }) => {
        handleLink(url);
        listener(url);
      });

      return () => {
        linkingSubscription.remove();
      };
    },
    config,
  };

  return {
    linking,
  };
};
