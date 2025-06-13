import { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import routes from "../routes";
import { ParamList } from "../types";
import Home from "@src/screens/supporter/home";
import Feed from "@src/screens/supporter/feed";
import HelpMe from "@src/screens/supporter/helpMe";
import useScreenOptions from "./useScreenOptions";
import MenuTab from "../menuTab";
import TabBarButton from "@src/atoms/tabBarButton";
import Profile from "@src/screens/user/profile";
import HeaderScreen from "@src/atoms/headerScreen";

const headerStyle = { height: 120 };
const headerRightContainerStyle = { paddingRight: 20 };

const { Navigator, Screen } = createBottomTabNavigator<ParamList>();

const RootTabSupporter: FC = () => {
  const screenOptions = useScreenOptions();

  return (
    <>
      <Navigator screenOptions={screenOptions}>
        <Screen
          name={routes.HOME}
          component={Home}
          options={{
            tabBarButton: (props) => (
              <TabBarButton {...props} name="home" title="Home" />
            ),
            title: "Home",
            headerShown: false,
            headerStyle,
            headerRightContainerStyle,
          }}
        />
        <Screen
          name={routes.FEED}
          component={Feed}
          options={{
            headerStyle,
            title: "Feed",
            header: () => <HeaderScreen title="Feed" />,
            tabBarButton: (props) => (
              <TabBarButton {...props} name="feed" title="Feed" />
            ),
          }}
        />
        <Screen
          name={routes.ASK_FOR_HELP}
          component={HelpMe}
          options={{
            tabBarButton: (props) => (
              <TabBarButton {...props} name="help_me" title="Pedir ajuda" />
            ),
            title: "Pedir Ajuda",
            headerStyle,
            headerRightContainerStyle,
          }}
        />
        <Screen
          name={routes.PROFILE}
          component={Profile}
          options={{
            tabBarButton: (props) => (
              <TabBarButton {...props} name="user" title="Perfil" />
            ),
            header: () => <HeaderScreen title="Meu Perfil" />,
            headerShown: true,
            title: "Perfil",
            headerStyle,
            headerRightContainerStyle,
          }}
        />

        <Screen
          name={routes.MENU}
          component={MenuTab}
          options={{
            tabBarButton: (props) => (
              <TabBarButton {...props} name="menu" title="Menu" />
            ),
            headerShown: false,
          }}
        />
      </Navigator>
    </>
  );
};

export default RootTabSupporter;

export const ROOT_TAB_SUPPORTER = "root_tab_supporter";
