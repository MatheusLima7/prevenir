import { ActivityIndicator, Alert } from "react-native";
import { Wrapper } from "./callbackLogin.styles";
import { useEffect } from "react";
import { useAppDispatch } from "@src/store/hooks";
import { setAppAuth, setAppTerms } from "@features/app/slice";
import { useRootNavigation, useRootRoute } from "@src/stacks";
import { DecodedIdToken, logout, useLoginMutation } from "@src/features/auth";
// import { getPhoneNumbers } from "@src/helpers/getPhoneNumber";
import { getUniqueDeviceId } from "@src/helpers/getUniqueDeviceId";
import { jwtDecode } from "jwt-decode";
import { usePosConfirmMutation } from "@src/features/user";
import routes from "@src/stacks/routes";
import { getPhoneNumbers } from "@src/helpers/getPhoneNumber";

export default function CallbackLogin() {
  const dispatch = useAppDispatch();
  const { params } = useRootRoute<"callback">();
  const [fetchLogin, { isLoading: isLoadingLogin }] = useLoginMutation();
  const [fetchPostConfirm, { isLoading: isLoadingPosConfirm }] =
    usePosConfirmMutation();
  const { navigate } = useRootNavigation();

  const handleLogout = () => {
    dispatch(setAppAuth(false));
    dispatch(setAppTerms(false));
    dispatch(logout());
    navigate(routes.LOGIN_STACK, { screen: routes.LOGIN });
  };

  useEffect(() => {
    const init = async () => {
      try {
        if (params?.code) {
          const externalLoginResponse = await fetchLogin({
            grant_type: "authorization_code",
            client_id: "3uha3pm7nfk5no8kampv4p7jnk",
            code: params?.code,
            redirect_uri: "prevenir://callback",
          });

          if (externalLoginResponse.error) {
            throw new Error(JSON.stringify(externalLoginResponse.error));
          }

          if (
            !externalLoginResponse.data?.id_token ||
            typeof externalLoginResponse.data?.id_token !== "string"
          ) {
            throw new Error("id_token: invalid or missing token");
          }

          const decodedIdToken = jwtDecode<DecodedIdToken>(
            externalLoginResponse.data?.id_token as string
          );
          // TODO: uncomment after valid test
          const phoneNumbers = await getPhoneNumbers();
          const deviceId = await getUniqueDeviceId();

          const userData = {
            id: decodedIdToken.sub,
            name: decodedIdToken.given_name,
            givenName: decodedIdToken.given_name,
            email: decodedIdToken.email,
            tokenId: externalLoginResponse.data?.id_token,
            deviceToken: `${deviceId}`,
            phoneNumbers: phoneNumbers as string[],
            // TODO: Remove after valid test
            // phoneNumbers: ["91 98980-4111"] as string[],
          };

          const posConfirmResponse = await fetchPostConfirm(userData);

          if (posConfirmResponse.data) {
            dispatch(setAppAuth(true));
          } else {
            throw new Error(JSON.stringify(posConfirmResponse.error));
          }
        } else {
          handleLogout();
        }
      } catch (e) {
        Alert.alert(`Erro ao confirmar o usuario`, `${e}`);
        console.error(e);
        handleLogout();
      }
    };

    init();
  }, []);

  return (
    <Wrapper>
      {(isLoadingLogin || isLoadingPosConfirm) && <ActivityIndicator />}
    </Wrapper>
  );
}
