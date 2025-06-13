import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Button from "@src/atoms/button";
import Text from "@src/atoms/text";
import colors from "@src/theme/colors";
import { View } from "react-native";

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.lightBlue};
`;

export const Content = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  padding-bottom: 69px;
`;

export const HeaderText = styled(Text).attrs({
  size: "large",
  type: "boldTitle",
  center: true,
})`
  margin-top: 18px;
  margin-bottom: 4px;
`;
export const DescriptionText = styled(Text).attrs({
  size: "small",
  type: "text",
  center: true,
})``;
export const HighlightedText = styled(Text).attrs({
  color: "blue",
  size: "small",
  type: "boldTitle",
})``;

export const NextButton = styled(Button).attrs({
  type: "gradient",
  size: "small",
})`
  margin-top: 50px;
  border-radius: 10px;
`;
