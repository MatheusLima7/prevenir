import HeaderGoBack from "../headerGoBack";
import HeaderTitle from "../headerTitle";
import { HeaderScreenProps } from "./headerScreen.types";
import { Wrapper } from "./headerScreen.styles";

export default function HeaderScreen({ title }: HeaderScreenProps) {
  return (
    <Wrapper>
      <HeaderGoBack />
      <HeaderTitle>{title}</HeaderTitle>
    </Wrapper>
  );
}
