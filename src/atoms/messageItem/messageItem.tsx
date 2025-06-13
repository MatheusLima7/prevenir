import {
  Wrapper,
  Image,
  Message,
  ArrowLeft,
  ArrowRight,
  Content,
} from "./messageItem.styles";
import { MessageItemProps } from "./messageItem.types";

export default function MessageItem({
  image,
  message,
  isRobot,
}: MessageItemProps) {
  return (
    <Wrapper isLeft={isRobot}>
      {isRobot && <Image source={image} />}
      <Content isRobot={isRobot}>
        {isRobot && <ArrowLeft />}
        <Message>{message}</Message>
        {!isRobot && <ArrowRight />}
      </Content>
      {!isRobot && <Image source={image} />}
    </Wrapper>
  );
}
