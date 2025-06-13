import { ReceivedInviteProps } from "./receivedInvite.types";
import { Wrapper, Subtitle, Title, Link } from "./receivedInvite.styles";

export default function ReceivedInvite({
  title,
  subtitle,
  onPress,
}: ReceivedInviteProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Link onPress={onPress}>
        <Subtitle>{subtitle}</Subtitle>
      </Link>
    </Wrapper>
  );
}
