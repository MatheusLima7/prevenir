import Icon from "@react-native-vector-icons/fontawesome6";
import Text from "@src/atoms/text";
import colors from "@src/theme/colors";
import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const RadioComponent = styled.View`
  height: 24px;
  width: 24px;
  border-radius: 12px;
  border-width: 2px;
  border-color: ${colors.lightGray};
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled(Text).attrs({
  size: "small",
  type: "text",
  color: "gray",
})``;

export const Selected = styled(Icon).attrs({
  name: "check",
  size: 16,
  color: colors.green,
  iconStyle: "solid",
})``;
