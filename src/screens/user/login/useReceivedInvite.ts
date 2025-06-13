import loginConstants from "./login.constants";
import routes from "@src/stacks/routes";
import { useRootNavigation } from "@src/stacks";

export default () => {
  const { log_in, received_invite } = loginConstants;
  const { navigate } = useRootNavigation();

  const onReceivedInvitePress = () => {
    navigate(routes.SUPPORTER_LOGIN);
  };

  return {
    received_invite,
    log_in,
    onReceivedInvitePress,
  };
};
