import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import Text from "@src/atoms/text";

export default StyleSheet.create({
  tabBarItemStyle: {
    height: 48,
    alignSelf: "center",
  },
});

export const Button = styled.TouchableOpacity``;

export const TextTabBar = styled(Text).attrs({
  type: "title",
  size: "xMinSmall",
  color: "gray",
})`
  margin-top: 18px;
`;
