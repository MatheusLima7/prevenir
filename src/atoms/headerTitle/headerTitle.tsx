import { Wrapper } from "./headerTitle.styles";
import { HeaderTitleProps } from "./headerTitle.types";

export default function HeaderTitle({ children }: HeaderTitleProps) {
  return <Wrapper>{children}</Wrapper>;
}
