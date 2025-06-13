import Bell from "@assets/bell.png";
import colors from "@src/theme/colors";
import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  position: absolute;
  right: 0px;
  top: 0px;
  padding-top: 10px;
`;

export const Image = styled.Image.attrs({
  source: Bell,
})``;

export const Badge = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: ${colors.lightDanger};
  position: absolute;
  top: 7px;
  right: 10px;
  z-index: 99;
`;
