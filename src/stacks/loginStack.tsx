import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/user/login";
import SupporterLoginScreen from "../screens/supporter/login";
import { ParamList } from "./types";
import routes from "./routes";

const LoginStackNav = createNativeStackNavigator<ParamList>();

export default function LoginStack() {
  return (
    <LoginStackNav.Navigator screenOptions={{ headerShown: false }}>
      <LoginStackNav.Screen
        key={routes.LOGIN}
        name={routes.LOGIN}
        initialParams={{
          title: routes.LOGIN,
        }}
        component={LoginScreen}
      />
      <LoginStackNav.Screen
        key={routes.SUPPORTER_LOGIN}
        name={routes.SUPPORTER_LOGIN}
        initialParams={{
          title: routes.SUPPORTER_LOGIN,
        }}
        component={SupporterLoginScreen}
      />
    </LoginStackNav.Navigator>
  );
}
