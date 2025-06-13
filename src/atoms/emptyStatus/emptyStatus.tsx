import { Wrapper, Image, Title, Subtitle } from "./emptyStatus.styles";

type EmptyStatusProps = {
  title: string;
  description: string;
};
export default function EmptyStatus({ title, description }: EmptyStatusProps) {
  return (
    <Wrapper>
      <Image />
      <Title>{title}</Title>
      <Subtitle>{description}</Subtitle>
    </Wrapper>
  );
}
