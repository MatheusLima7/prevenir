import {
  Wrapper,
  Header,
  Content,
  Separator,
  IconArrow,
  Title,
} from "./toggleItem.styles";
import { ToggleItemProps } from "./toggleItem.types";
import useToggleItem from "./useToggleItem";
import Animated, { SlideInUp, SlideOutUp } from "react-native-reanimated";

export default function ToggleItem({
  children,
  question,
  lastItem,
}: ToggleItemProps) {
  const { toggleItem, open } = useToggleItem();

  return (
    <Wrapper onPress={toggleItem}>
      <Header lastItem={lastItem}>
        <Title>{question}</Title>
        <IconArrow open={open} />
      </Header>
      {open && (
        <Animated.View
          entering={SlideInUp.duration(500)}
          exiting={SlideOutUp.duration(500)}
        >
          <Content>{children}</Content>
        </Animated.View>
      )}
      {!lastItem && <Separator />}
    </Wrapper>
  );
}
