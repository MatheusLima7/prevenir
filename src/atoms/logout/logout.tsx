import { CustomIcon, Name, Wrapper } from "./logout.styles";
import useLogout from "./useLogout";

export default function Logout() {
  const { logout, onPress } = useLogout();
  return (
    <Wrapper onPress={onPress}>
      <CustomIcon icon="arrow-right-from-bracket" />
      <Name>{logout}</Name>
    </Wrapper>
  );
}
