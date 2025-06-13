import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Button from "@src/atoms/button";
import Text from "@src/atoms/text";
import colors from "@src/theme/colors";
import { View } from "react-native";
import NoNotification from "@assets/no-notification.png";

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.green};
`;

export const Content = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding: 0 31px;
  padding-bottom: 40px;
`;

export const Image = styled.Image.attrs({
  source: NoNotification,
})`
  width: 217px;
  height: 205px;
`;

export const HeaderText = styled(Text).attrs({
  center: true,
  color: "white",
  size: "xTwoLarge",
  type: "boldTitle",
})`
  margin-top: 32px;
  margin-bottom: 24px;
`;
export const DescriptionText = styled(Text).attrs({
  center: true,
  color: "white",
  size: "xMedium",
  type: "title",
})`
  letter-spacing: 0;
  text-align: center;
  line-height: 18px;
`;

export const HighlightedText = styled(Text).attrs({
  color: "blue",
  size: "small",
  type: "title",
})``;

export const NextButton = styled(Button).attrs({
  type: "gradient",
  size: "small",
})`
  margin-top: 103px;
  border-radius: 10px;
`;
