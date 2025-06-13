import loginConstants from "./login.constants";

import routes from "@src/stacks/routes";
import { useRootNavigation } from "@src/stacks";

export default () => {
  const { navigate } = useRootNavigation();

  const onReceivedInvitePress = async () => {
    navigate(routes.LOGIN);
  };

  const { log_in, are_you_being_monitored } = loginConstants;

  return {
    are_you_being_monitored,
    log_in,
    onReceivedInvitePress,
  };
};
