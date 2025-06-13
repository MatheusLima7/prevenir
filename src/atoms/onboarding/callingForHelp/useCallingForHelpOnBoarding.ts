import { useAppTypeUserLoggedAuth } from "@src/features/app/selectors";
import callingForHelpOnBoardingConstants from "./callingForHelp.constants";
import callingForHelpSupporterOnBoardingConstants from "./callingForHelpSupporterOnBoarding.constants";

export default () => {
  const typeUserLogged = useAppTypeUserLoggedAuth();
  const constants =
    typeUserLogged === "supporter"
      ? callingForHelpSupporterOnBoardingConstants
      : callingForHelpOnBoardingConstants;

  const texts = constants;

  return {
    texts,
  };
};
