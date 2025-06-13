import Icon from "@react-native-vector-icons/fontawesome6";
import colors from "@src/theme/colors";
import styled from "styled-components/native";
import Text from "../text";

export const Content = styled.View`
  position: relative;
`;

export const Options = styled.TouchableOpacity`
  position: absolute;
  top: -290px;
  width: 100%;
`;

export const Wrapper = styled.TouchableOpacity`
  position: relative;

  width: 100%;
  height: 50px;
  background-color: ${colors.white};
  margin: 7px 0;
  padding: 14px;

  flex-direction: row;
  justify-content: space-between;
`;

export const Name = styled(Text).attrs({
  type: "text",
  size: "small",
})``;

export const IconArrowDown = styled(Icon).attrs({
  name: "chevron-down",
  size: 16,
  color: colors.gray,
  iconStyle: "solid",
})``;

export const IconArrowUp = styled(Icon).attrs({
  name: "chevron-up",
  size: 16,
  color: colors.gray,
  iconStyle: "solid",
})``;
