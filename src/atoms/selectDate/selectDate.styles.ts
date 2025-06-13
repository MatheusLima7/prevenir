import colors from "@src/theme/colors";
import styled from "styled-components/native";
import Text from "../text";
import Icon from "@react-native-vector-icons/fontawesome6";

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
  background-color: ${colors.white};
  padding: 15px 20px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 0 0;
`;

export const Title = styled(Text).attrs(({ filled }: { filled: boolean }) => ({
  size: "small",
  type: "title",
  color: filled ? "blue" : "lightDanger",
}))``;

export const CalendarIcon = styled(Icon).attrs(
  ({ filled }: { filled: boolean }) => ({
    name: "calendar-days",
    size: 24,
    color: filled ? colors.blue : colors.lightDanger,
    iconStyle: "solid",
  })
)``;
