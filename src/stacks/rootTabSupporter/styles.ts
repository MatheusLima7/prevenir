import Text from "@src/atoms/text";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export default StyleSheet.create({
  tabBarItemStyle: {
    height: 48,
    alignSelf: "center",
  },
});

export const Button = styled.TouchableOpacity``;

export const TextTabBar = styled(Text).attrs({
  type: "text",
  size: "xMinSmall",
  color: "gray",
})`
  margin-top: 18px;
`;
