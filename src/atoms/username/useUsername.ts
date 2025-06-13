import { useAppTypeUserLoggedAuth } from "@src/features/app/selectors";
import usernameConstant from "./username.constant";

export default () => {
  const typeUserLogged = useAppTypeUserLoggedAuth();
  const isSupporter = typeUserLogged === "supporter";
  const { name, supporterName } = usernameConstant;

  return {
    name: isSupporter ? supporterName : name,
  };
};
