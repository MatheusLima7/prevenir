import { FC } from "react";

import routes from "../routes";
import { ParamList } from "../types";
import AboutApp from "@src/screens/aboutApp";
import HeaderScreen from "@src/atoms/headerScreen";
import Profile from "@src/screens/user/profile";
import DeleteAccount from "@src/screens/deleteAccount";
import EditAccount from "@src/screens/editAccount";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Locals from "@src/screens/locals";
import Notifications from "@src/screens/notifications";
import FrequentlyAskedQuestions from "@src/screens/flequentlyAskedQuestions";
import Unit from "@src/screens/unit";
import MySupporterTab from "../mySupporterTab";

const { Navigator, Screen } = createNativeStackNavigator<ParamList>();
const MenuTab: FC = () => {
  return (
    <>
      <Navigator>
        <Screen
          name={routes.ABOUT_APP}
          component={AboutApp}
          options={{
            title: "Sobre o App",
            header: () => <HeaderScreen title="Sobre o App" />,
            headerShown: true,
          }}
        />
        <Screen
          name={routes.PROFILE}
          component={Profile}
          options={{
            title: "Meu Perfil",
            header: () => <HeaderScreen title="Meu Perfil" />,
            headerShown: true,
          }}
        />

        <Screen
          name={routes.UNIT}
          component={Unit}
          options={{
            title: "Unidades Prevenir",
            header: () => <HeaderScreen title="Unidades Prevenir" />,
            headerShown: true,
          }}
        />

        <Screen
          name={routes.DELETE_ACCOUNT}
          component={DeleteAccount}
          options={{
            title: "Motivo da exclusão do perfil",
            header: () => <HeaderScreen title="Motivo da exclusão do perfil" />,
            headerShown: true,
          }}
        />
        <Screen
          name={routes.EDIT_ACCOUNT}
          component={EditAccount}
          options={{
            title: "Editar Perfil",
            header: () => <HeaderScreen title="Editar Perfil" />,
            headerShown: true,
          }}
        />
        <Screen
          name={routes.LOCALS}
          component={Locals}
          options={{
            title: "Locais de risco",
            header: () => <HeaderScreen title="Locais de risco" />,
            headerShown: true,
          }}
        />
        <Screen
          name={routes.NOTIFICATIONS}
          component={Notifications}
          options={{
            title: "Notificações",
            header: () => <HeaderScreen title="Notificações" />,
            headerShown: true,
          }}
        />
        <Screen
          name={routes.FREQUENTLY_ASKED_QUESTIONS}
          component={FrequentlyAskedQuestions}
          options={{
            title: "Perguntas Frequentes",
            header: () => <HeaderScreen title="Perguntas Frequentes" />,
            headerShown: true,
          }}
        />
        <Screen
          name={routes.MY_SUPPORTER}
          component={MySupporterTab}
          options={{
            headerShown: false,
          }}
        />
      </Navigator>
    </>
  );
};

export default MenuTab;

export const MENU_TAV = "menu_tab";
