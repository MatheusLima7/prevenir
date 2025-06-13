import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import routes from "./routes";

export type CommonProps = {
  title?: string;
  screen?: string;
  code?: string;
  params?: {
    code?: string;
  };
};

export type ParamList = {
  [routes.LOGIN_STACK]?: CommonProps;
  [routes.LOGIN]?: CommonProps;
  [routes.ONBOARDING]?: CommonProps;
  [routes.PRIVATED_STACK]?: CommonProps;
  [routes.SUPPORTER_LOGIN]?: CommonProps;
  [routes.USER_TERMS]?: CommonProps;
  [routes.CALLBACK]?: CommonProps;
};

type Keyof<T extends object> = Extract<keyof T, string>;

export type RootRouteProp<
  RouteName extends keyof ParamList = Keyof<ParamList>,
> = RouteProp<ParamList, RouteName>;

export type RouterProps = {
  title: keyof ParamList;
  route: keyof ParamList;
};

export type RootStackNavigationProp = NativeStackNavigationProp<ParamList>;

export interface Route {
  title: string;
  route: Route;
  url?: string;
}
