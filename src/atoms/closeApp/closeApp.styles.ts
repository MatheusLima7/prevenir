import Icon from "@react-native-vector-icons/fontawesome6";
import colors from "@src/theme/colors";
import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 25px;
  right: 25px;
`;

export const CustomIcon = styled(Icon).attrs(({ icon }: { icon: string }) => ({
  name: icon,
  size: 28,
  color: colors.xLightDanger,
  iconStyle: "solid",
}))``;
