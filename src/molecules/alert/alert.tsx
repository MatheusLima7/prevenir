import { Wrapper, Message, Title } from "./alert.styles";
import { ModalProps } from "./alert.types";
import CloseApp from "@src/atoms/closeApp/closeApp";

export default function Alert({ onClose, message, title }: ModalProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Message>{message}</Message>
      <CloseApp onClose={onClose} />
    </Wrapper>
  );
}
