import welcomeOnBoardingConstants from "./welcomeOnBoarding.constants";

import { useAppTypeUserLoggedAuth } from "@src/features/app/selectors";
import welcomeSupporterOnBoardingConstants from "./welcomeSupporterOnBoarding";

export default () => {
  const typeUserLogged = useAppTypeUserLoggedAuth();
  const constants =
    typeUserLogged === "supporter"
      ? welcomeSupporterOnBoardingConstants
      : welcomeOnBoardingConstants;

  const texts = constants;

  return {
    texts,
  };
};
