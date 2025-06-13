import Icon from "@react-native-vector-icons/fontawesome6";
import colors from "@src/theme/colors";
import styled from "styled-components/native";
import Text from "@atoms/text";

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  padding: 20px 0;
  align-items: center;
`;

export const CustomIcon = styled(Icon).attrs(({ icon }: { icon: string }) => ({
  name: icon,
  size: 22,
  color: colors.blue,
  iconStyle: "solid",
}))``;

export const Name = styled(Text).attrs({
  type: "title",
  size: "small",
  color: "gray",
})`
  margin-left: 10px;
`;
