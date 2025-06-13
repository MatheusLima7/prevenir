import { NavigationContainer } from "@react-navigation/native";
import StackRoot from "./src/stacks/root";
import navigation from "@src/stacks";
import useDeeplink from "@hooks/useDeeplink";
import useFCM from "@src/hooks/useFCM";

function Router() {
  useFCM();
  const { linking } = useDeeplink();
  return (
    <NavigationContainer ref={navigation} linking={linking}>
      <StackRoot />
    </NavigationContainer>
  );
}

export default Router;
