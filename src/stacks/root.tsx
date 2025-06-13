import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginStack from "./loginStack";
import { useAppAuth } from "@features/app/selectors";
import PrivatedStack from "./privatedStack";
import { ParamList } from "./types";
import routes from "./routes";
import CallbackLogin from "@src/screens/callbackLogin";
import { useToken } from "@src/features/auth";

const RootStack = createNativeStackNavigator<ParamList>();

const Root = () => {
  let isLogged = useAppAuth();
  const token = useToken();
  isLogged = !!token;

  return (
    <RootStack.Navigator screenOptions={{}}>
      {!isLogged ? (
        <RootStack.Screen
          name={routes.LOGIN_STACK}
          initialParams={{ title: routes.LOGIN_STACK }}
          options={{ headerShown: false }}
          component={LoginStack}
        />
      ) : (
        <RootStack.Screen
          name={routes.PRIVATED_STACK}
          initialParams={{ title: routes.PRIVATED_STACK }}
          options={{ headerShown: false }}
          component={PrivatedStack}
        />
      )}
      {!isLogged && (
        <RootStack.Screen
          key={routes.CALLBACK}
          name={routes.CALLBACK}
          options={{
            headerShown: false,
          }}
          initialParams={{
            title: routes.CALLBACK,
          }}
          component={CallbackLogin}
        />
      )}
    </RootStack.Navigator>
  );
};

export default Root;
