import Button from "@src/atoms/button";
import { scale } from "@src/config/metrics";
import colors from "@src/theme/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Wrapper = styled(SafeAreaView)`
  background-color: ${colors.lightBlue};
  flex: 1;
  padding: ${scale(25)}px 25px ${scale(20)}px 25px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Body = styled.View`
  margin-top: ${scale(90)}px;
`;

export const CustomButton = styled(Button).attrs({
  mode: "full",
  type: "filled",
  size: "small",
})`
  margin: ${scale(35)}px 0px 0px 0px;
`;
