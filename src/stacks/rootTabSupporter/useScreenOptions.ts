import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import styles from "./styles";
import colors from "@src/theme/colors";

const screenOptions: BottomTabNavigationOptions = {
  tabBarShowLabel: true,
  tabBarInactiveTintColor: colors.gray,
  tabBarItemStyle: styles.tabBarItemStyle,
  headerTitleAlign: "center",
};

const DEFAULT_TAB_BAR_HEIGHT = 70;

export default () => {
  const insets = useSafeAreaInsets();
  const height = insets.bottom + DEFAULT_TAB_BAR_HEIGHT;

  return {
    ...screenOptions,
    tabBarStyle: { height },
  };
};
