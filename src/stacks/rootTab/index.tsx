import { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import routes from "../routes";
import { ParamList } from "../types";
import Home from "@src/screens/user/home";
import HelpMe from "@src/screens/user/helpMe";
import Reward from "@src/screens/user/reward";
import useScreenOptions from "./useScreenOptions";
import MenuTab from "../menuTab";
import FeedTab from "../feedTab";

import TabBarButton from "@src/atoms/tabBarButton";

const headerStyle = { height: 70 };

const { Navigator, Screen } = createBottomTabNavigator<ParamList>();

const RootTab: FC = () => {
  const screenOptions = useScreenOptions();

  return (
    <>
      <Navigator screenOptions={screenOptions}>
        <Screen
          name={routes.HOME}
          component={Home}
          options={{
            title: "Home",
            freezeOnBlur: false,
            headerShown: false,
            headerStyle,
            tabBarButton: (props) => (
              <TabBarButton {...props} name="home" title="Home" />
            ),
          }}
        />
        <Screen
          name={routes.FEED}
          component={FeedTab}
          options={{
            tabBarButton: (props) => (
              <TabBarButton {...props} name="feed" title="Feed" />
            ),
            headerShown: false,
          }}
        />
        <Screen
          name={routes.ASK_FOR_HELP}
          component={HelpMe}
          options={{
            title: "Pedir Ajuda",
            headerStyle,
            tabBarButton: (props) => (
              <TabBarButton {...props} name="help_me" title="Pedir ajuda" />
            ),
          }}
        />
        <Screen
          name={routes.AWARDS}
          component={Reward}
          options={{
            title: "Troféus",
            headerStyle,
            tabBarButton: (props) => (
              <TabBarButton {...props} name="reward" title="Troféus" />
            ),
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

export default RootTab;

export const ROOT_TAB = "root_tab";
