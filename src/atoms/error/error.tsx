import {
  Wrapper,
  Title,
  Subtitle,
  CloseIcon,
  ContentIcon,
} from "./error.styles";
import { ErrorProps } from "./error.types";

export default function Error({ title, text, onPress }: ErrorProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{text}</Subtitle>
      <ContentIcon onPress={onPress}>
        <CloseIcon />
      </ContentIcon>
    </Wrapper>
  );
}
