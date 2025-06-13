import {
  NavigationContainerRef,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { ParamList, RootRouteProp, RootStackNavigationProp } from "./types";
import { createRef } from "react";

export const useRootNavigation = () => useNavigation<RootStackNavigationProp>();

export const useRootRoute = <T extends keyof ParamList>() =>
  useRoute<RootRouteProp<T>>();

const navigation = createRef<NavigationContainerRef<ParamList>>();

export const useCallbackRoute = () =>
  useRoute<RouteProp<ParamList, "Callback">>();

export default navigation;
