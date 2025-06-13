import { Wrapper, Image, Title, Subtitle } from "./emptyUnit.styles";
import useEmptyUnit from "./useEmptyUnit";

export default function EmptyUnit() {
  const { title, description } = useEmptyUnit();
  return (
    <Wrapper>
      <Image />
      <Title>{title}</Title>
      <Subtitle>{description}</Subtitle>
    </Wrapper>
  );
}
