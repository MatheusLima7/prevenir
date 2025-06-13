import { FC } from "react";
import routes from "../routes";
import Feed from "@src/screens/user/feed";
import HeaderScreen from "@src/atoms/headerScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ParamList } from "../types";
import FeedDetail from "@src/screens/feedDetail";

const { Navigator, Screen } = createNativeStackNavigator<ParamList>();

const MenuTab: FC = () => {
  return (
    <>
      <Navigator>
        <Screen
          name={routes.FEED}
          component={Feed}
          options={{
            title: "Feed",
            header: () => <HeaderScreen title="Feed" />,
          }}
        />
        <Screen
          name={routes.DETAIL_FEED}
          component={FeedDetail}
          options={{
            header: () => <HeaderScreen title="Detalhes do post" />,
            headerShown: true,
          }}
        />
      </Navigator>
    </>
  );
};

export default MenuTab;

export const MENU_TAV = "menu_tab";
