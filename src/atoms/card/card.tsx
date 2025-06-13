import { Wrapper } from "./card.styles";
import { CardProps } from "./card.types";

export default function Card({ children, isFull }: CardProps) {
  return <Wrapper isFull={isFull}>{children}</Wrapper>;
}
