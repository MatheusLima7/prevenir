import { useAppTypeUserLoggedAuth } from "@src/features/app/selectors";
import ProfileIcon from "@assets/user-icon.png";
import HeartIcon from "@assets/heart-icon.png";
import BuildingIcon from "@assets/building-icon.png";
import QuestionIcon from "@assets/question-icon.png";
import InfoIcon from "@assets/info-icon.png";
import { useRootNavigation } from "@src/stacks";
import routes from "@src/stacks/routes";
import { useAppDispatch } from "@src/store/hooks";
import { setAppMenu } from "@src/features/app/slice";

export default () => {
  const isSupporter = useAppTypeUserLoggedAuth() == "supporter";
  const isSupportMenuItem = (text: string) => text == "Meus Apoiadores";
  const { navigate } = useRootNavigation();
  const dispatch = useAppDispatch();

  const handleSupporterText = (text: string) =>
    text.replace("Apoiadores", "Apoiados");

  const getIcon = (value: string) => {
    switch (true) {
      case value == "info":
        return InfoIcon;

      case value == "user":
        return ProfileIcon;

      case value == "heart":
        return HeartIcon;

      case value == "building":
        return BuildingIcon;

      case value == "question":
        return QuestionIcon;

      default:
        return null;
    }
  };

  const navigateToScreen = (value: string) => {
    setTimeout(() => dispatch(setAppMenu(false)), 100);

    switch (true) {
      case value == "info":
        navigate(routes.MENU, {
          screen: routes.ABOUT_APP,
        });
        break;
      case value == "user":
        navigate(routes.MENU, {
          screen: routes.PROFILE,
        });
        break;
      case value == "question":
        navigate(routes.MENU, {
          screen: routes.FREQUENTLY_ASKED_QUESTIONS,
        });
        break;
      case value == "building":
        navigate(routes.MENU, {
          screen: routes.UNIT,
        });
        break;
      case value == "heart":
        navigate(routes.MENU, {
          screen: routes.MY_SUPPORTER,
        });
        break;

      default:
        break;
    }
  };

  return {
    isSupporter,
    isSupportMenuItem,
    handleSupporterText,
    getIcon,
    navigateToScreen,
  };
};
