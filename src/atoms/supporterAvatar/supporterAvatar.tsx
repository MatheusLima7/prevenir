import { Wrapper, Name } from "./supporterAvatar.styles";
import { SupporterAvatarProps } from "./supporterAvatar.types";
import useSupporterAvatar from "./useSupporterAvatar";

export default function SupporterAvatar({ type }: SupporterAvatarProps) {
  const { letters } = useSupporterAvatar();
  return (
    <Wrapper type={type}>
      <Name>{letters}</Name>
    </Wrapper>
  );
}
