import routes from "@src/stacks/routes";
import homeConstants from "./home.constants";
import { useRootNavigation } from "@src/stacks";
import { useAppUserImage } from "@src/features/app/selectors";

export default () => {
  const { navigate } = useRootNavigation();
  const { welcome, message, text_button, name } = homeConstants;

  const onPress = () => {
    navigate(routes.MY_HISTORY);
  };

  const currentImage = useAppUserImage();

  return {
    welcome,
    message,
    text_button,
    onPress,
    name,
    currentImage,
  };
};
