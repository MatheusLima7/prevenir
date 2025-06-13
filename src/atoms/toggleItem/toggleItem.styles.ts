import styled from "styled-components/native";
import Text from "../text";
import colors from "@src/theme/colors";
import Icon from "@react-native-vector-icons/fontawesome6";
import { HeaderProps, IconProps } from "./toggleItem.types";

export const Wrapper = styled.TouchableOpacity`
  overflow: hidden;
`;

export const Header = styled.View`
  margin-top: 25px;
  ${({ lastItem }: HeaderProps) => (!lastItem ? "margin-bottom: 25px;" : "")}
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled(Text).attrs({
  type: "title",
  size: "small",
  color: "gray",
})`
  flex: 1;
`;

export const Content = styled(Text).attrs({
  type: "text",
  size: "small",
  color: "gray",
})`
  margin-bottom: 25px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${colors.gray}80;
  margin: 0;
`;

export const IconArrow = styled(Icon).attrs<IconProps>(
  ({ open }: IconProps) => ({
    name: open ? "chevron-down" : "chevron-left",
    size: 20,
    color: colors.gray + "80",
    iconStyle: "solid",
  })
)`
  margin-left: 25px;
`;
