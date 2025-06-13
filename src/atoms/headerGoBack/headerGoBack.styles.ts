import Icon from "@react-native-vector-icons/fontawesome6";
import colors from "@src/theme/colors";
import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity``;

export const IconArrowLeft = styled(Icon).attrs({
  name: "chevron-left",
  size: 14,
  color: colors.blue,
  iconStyle: "solid",
})`
  margin-right: 15px;
`;
