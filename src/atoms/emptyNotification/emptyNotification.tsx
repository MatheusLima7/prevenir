import { Wrapper, Image, Title, Subtitle } from "./emptyNotification.styles";
import useEmptyNotification from "./useEmptyNotification";

export default function EmptyNotification() {
  const { title, description } = useEmptyNotification();
  return (
    <Wrapper>
      <Image />
      <Title>{title}</Title>
      <Subtitle>{description}</Subtitle>
    </Wrapper>
  );
}
