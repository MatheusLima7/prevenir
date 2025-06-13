import { useRootNavigation } from "@src/stacks";
import { Wrapper, IconArrowLeft } from "./headerGoBack.styles";

export default function HeaderGoBack() {
  const { goBack } = useRootNavigation();

  return (
    <Wrapper onPress={() => goBack()}>
      <IconArrowLeft />
    </Wrapper>
  );
}
