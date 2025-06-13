import colors from "@src/theme/colors";
import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

export const Item = styled.View`
  flex: 1;
  position: relative;
`;

export const Image = styled.Image``;

export const HelpIcon = styled(LinearGradient).attrs({
  colors: [colors.blue, colors.mediumBlue],
})`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -15px;
  left: -40px;
`;
