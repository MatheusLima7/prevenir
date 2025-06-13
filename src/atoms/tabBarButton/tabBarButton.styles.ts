import styled from "styled-components/native";
import Text from "../text";

export const Button = styled.TouchableOpacity`
  height: 24px;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const TextTabBar = styled(Text).attrs(
  ({ isActive }: { isActive: boolean }) => ({
    type: "title",
    size: "xMinSmall",
    color: isActive ? "blue" : "gray",
  })
)`
  margin-top: 18px;
  align-items: center;
  justify-content: center;
  height: 24px;
  line-height: 24px;
`;
