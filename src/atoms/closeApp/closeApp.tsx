import { CustomIcon, Wrapper } from "./closeApp.styles";
import { CloseAppProps } from "./closeApp.types";

export default function CloseApp({ onClose }: CloseAppProps) {
  return (
    <Wrapper onPress={onClose}>
      <CustomIcon icon="xmark" />
    </Wrapper>
  );
}
