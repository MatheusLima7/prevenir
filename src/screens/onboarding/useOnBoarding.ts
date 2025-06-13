import { useRootNavigation } from "@src/stacks";
import onboardingConstants from "./onboarding.constants";
import routes from "@src/stacks/routes";
import { useAppDispatch } from "@src/store/hooks";
import { setAppOnBoardingCompleted } from "@src/features/app/slice";
import { useAppTypeUserLoggedAuth } from "@src/features/app/selectors";

export default () => {
  const dispatch = useAppDispatch();
  const { navigate } = useRootNavigation();
  const typeUserLogged = useAppTypeUserLoggedAuth();
  const isSupporter = typeUserLogged === "supporter";

  const onPress = () => {
    dispatch(setAppOnBoardingCompleted(true));
    if (!isSupporter) {
      navigate(routes.TELL_YOUR_HISTORY);
    }
  };
  const { button } = onboardingConstants;

  return { button, onPress };
};
