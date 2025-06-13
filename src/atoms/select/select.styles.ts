import styled from "styled-components/native";
import Text from "../text";
import Button from "../button";
import Icon from "@react-native-vector-icons/fontawesome6";
import colors from "@src/theme/colors";

export const Wrapper = styled.View`
  jistify-content: flex-end;
`;

export const Title = styled(Text).attrs({
  type: "subtitle",
  size: "xMedium",
  color: "blue",
  center: true,
})`
  margin-bottom: 10px;
`;

export const ButtonOk = styled(Button).attrs({
  type: "gradient",
  size: "small",
})``;

export const IconArrowRight = styled(Icon).attrs({
  name: "chevron-right",
  size: 20,
  color: colors.white,
  iconStyle: "solid",
})``;
