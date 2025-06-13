import { useRootNavigation } from "@src/stacks";
import profileConstants from "./profile.constants";
import routes from "@src/stacks/routes";
import { useAppTypeUserLoggedAuth } from "@src/features/app/selectors";

export default () => {
  const {
    surname,
    gender,
    unit,
    triggers,
    registered,
    gender_answer,
    trigers_items,
    edit_button,
    locals,
    delete_account,
  } = profileConstants;

  const userType = useAppTypeUserLoggedAuth();

  const { navigate } = useRootNavigation();

  const onEditPress = () => {
    navigate(routes.MENU, {
      screen: routes.EDIT_ACCOUNT,
    });
  };

  const onLocalPress = () => {
    navigate(routes.MENU, {
      screen: routes.LOCALS,
    });
  };

  const onDeletePress = () => {
    navigate(routes.MENU, {
      screen: routes.DELETE_ACCOUNT,
    });
  };

  const count = "10";
  const labelCount = `(${count} locais)`;

  return {
    surname,
    gender,
    unit,
    triggers,
    registered,
    gender_answer,
    trigers_items,
    onPress: onEditPress,
    onLocalPress,
    edit_button,
    locals,
    labelCount,
    onDeletePress,
    delete_account,
    userType,
  };
};
