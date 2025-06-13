import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { loadSupporterState } from "@src/features/supporters/supportersSlice";
import { RootState } from "@src/store/reducers";

import IntroScreen from "@src/screens/mySupporter/introScreen/introScreen";
import AddSupporterScreen from "@src/screens/mySupporter/addSupporterScreen/addSupporterScreen";
import InviteSentScreen from "@src/screens/mySupporter/inviteSentScreen/inviteSentScreen";
import SupportersListScreen from "@src/screens/mySupporter/supportersListScreen/supportersListScreen";

import routes from "../routes";
import { ParamList } from "../types";
import HeaderScreen from "@src/atoms/headerScreen";
import { useAppTypeUserLoggedAuth } from "@src/features/app/selectors";
import SupportedListScreen from "@src/screens/supporter/supportedList";

const { Navigator, Screen } = createNativeStackNavigator<ParamList>();

const MySupporterTab: FC = () => {
  const dispatch = useDispatch();
  const hasRegistered = useSelector(
    (state: RootState) => state.supporters.hasRegistered
  );
  const [loaded, setLoaded] = useState(false);

  const typeUser = useAppTypeUserLoggedAuth();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch<any>(loadSupporterState()).then(() => setLoaded(true));
  }, [dispatch]);

  if (!loaded) return null;

  return (
    <Navigator>
      {hasRegistered ? (
        <>
          <Screen
            name={routes.MY_SUPPORTER_SUPPORTERS_LIST}
            component={
              typeUser === "user" ? SupportersListScreen : SupportedListScreen
            }
            options={{
              title: typeUser === "user" ? "Meus Apoiadores" : "Meus Apoiados",
              header: () => (
                <HeaderScreen
                  title={
                    typeUser === "user" ? "Meus Apoiadores" : "Meus Apoiados"
                  }
                />
              ),
              headerShown: true,
            }}
          />
          <Screen
            name={routes.MY_SUPPORTER_ADD_SUPPORTER}
            component={AddSupporterScreen}
            options={{
              title: "Cadastrar apoiador",
              header: () => <HeaderScreen title="Cadastrar apoiador" />,
              headerShown: true,
            }}
          />
          <Screen
            name={routes.MY_SUPPORTER_INVITE_SENT}
            component={InviteSentScreen}
            options={{
              title: "Meus Apoiadores",
              header: () => <HeaderScreen title="Meus Apoiadores" />,
              headerShown: true,
            }}
          />
        </>
      ) : (
        <>
          <Screen
            name={routes.MY_SUPPORTER}
            component={IntroScreen}
            options={{
              title: "Meus Apoiadores",
              header: () => <HeaderScreen title="Meus Apoiadores" />,
              headerShown: true,
            }}
          />
          <Screen
            name={routes.MY_SUPPORTER_ADD_SUPPORTER}
            component={AddSupporterScreen}
            options={{
              title: "Cadastrar apoiador",
              header: () => <HeaderScreen title="Cadastrar apoiador" />,
              headerShown: true,
            }}
          />
          <Screen
            name={routes.MY_SUPPORTER_INVITE_SENT}
            component={InviteSentScreen}
            options={{
              title: "Meus Apoiadores",
              header: () => <HeaderScreen title="Meus Apoiadores" />,
              headerShown: true,
            }}
          />
          <Screen
            name={routes.MY_SUPPORTER_SUPPORTERS_LIST}
            component={SupportersListScreen}
            options={{
              title: "Meus Apoiadores",
              header: () => <HeaderScreen title="Meus Apoiadores" />,
              headerShown: true,
            }}
          />
        </>
      )}
    </Navigator>
  );
};

export default MySupporterTab;
