import { Image, Title, Wrapper } from "./moreDetails.styles";
import useMoreDetails from "./useMoreDetails";

export default function MoreDetails() {
  const { title } = useMoreDetails();
  return (
    <Wrapper>
      <Image />
      <Title>{title}</Title>
    </Wrapper>
  );
}
