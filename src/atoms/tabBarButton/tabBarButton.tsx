import { GestureResponderEvent } from "react-native-modal";
import { TabBarIcon } from "../tabBarIcon";
import { Button, TextTabBar } from "./tabBarButton.styles";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { TabBarButtonProps } from "./tabBarButton.types";
import Modal from "react-native-modal";
import Menu from "@src/molecules/menu";
import colors from "@src/theme/colors";
import { setAppMenu } from "@src/features/app/slice";
import { useAppDispatch } from "@src/store/hooks";
import { useAppMenu } from "@src/features/app/selectors";

export default function TabBarButton(
  props: BottomTabBarButtonProps & TabBarButtonProps
) {
  const dispatch = useAppDispatch();
  const open = useAppMenu();

  const isActive = props.accessibilityState?.selected;
  return (
    <>
      <Button
        {...props}
        onPress={(event: GestureResponderEvent) => {
          if (props.name === "menu") {
            dispatch(setAppMenu(!open));
          } else {
            props.onPress?.(event);
          }
        }}
      >
        <TabBarIcon name={props.name} isActive={isActive} />
        <TextTabBar isActive={isActive}>{props.title}</TextTabBar>
      </Button>

      <Modal
        onBackdropPress={() => dispatch(setAppMenu(false))}
        backdropColor={colors.xDarkBlue}
        backdropOpacity={0.98}
        animationIn="slideInDown"
        animationOut="flipOutY"
        isVisible={open}
      >
        <Menu onClose={() => dispatch(setAppMenu(false))} />
      </Modal>
    </>
  );
}
