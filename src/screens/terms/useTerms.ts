import { useAppTypeUserLoggedAuth } from "@src/features/app/selectors";
import {
  setAppAuth,
  setAppSupporterTerms,
  setAppTerms,
} from "@src/features/app/slice";
import { TypeUserProps } from "@src/features/app/types";
import { logout } from "@src/features/auth";
import { useRootNavigation } from "@src/stacks";
import routes from "@src/stacks/routes";
import { useAppDispatch } from "@store/hooks";

export default () => {
  const typeUserLogged = useAppTypeUserLoggedAuth();
  const dispatch = useAppDispatch();
  const { navigate } = useRootNavigation();

  const onPressAccept = () => {
    switch (true) {
      case typeUserLogged === "supporter":
        dispatch(setAppSupporterTerms(true));
        navigate(routes.ONBOARDING);
        break;

      default:
        dispatch(setAppTerms(true));
        break;
    }
  };

  const onPressReject = () => {
    switch (true) {
      case typeUserLogged === "supporter":
        dispatch(setAppSupporterTerms(false));
        dispatch(setAppAuth(false));
        dispatch(logout());
        break;

      default:
        dispatch(setAppTerms(false));
        dispatch(setAppAuth(false));
        dispatch(logout());
        break;
    }
  };

  const getLabelTypeUser = (typeUser: TypeUserProps) => {
    switch (true) {
      case typeUser === "supporter":
        return "Apoiador";

      default:
        return "Usuário";
    }
  };

  const handleTitle = (title: string) => {
    return title.replace("%type_user%", getLabelTypeUser(typeUserLogged));
  };

  return {
    typeUserLogged,
    handleTitle,
    onPressAccept,
    onPressReject,
  };
};
