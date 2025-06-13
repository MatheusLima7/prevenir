import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "@src/theme/colors";
import Button from "@src/atoms/button";
import Text from "@src/atoms/text";

export const Wrapper = styled(SafeAreaView)`
  background-color: ${colors.lightBlue};
  flex: 1;
  padding: 25px 30px 50px 30px;
  justify-content: space-between;
`;

export const RequestPermissionsButton = styled(Button).attrs({
  type: "gradient",
  size: "small",
})``;

export const Content = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Alert = styled.Image``;

export const Title = styled(Text).attrs({
  type: "title",
  size: "large",
  color: "gray",
})`
  margin-bottom: 24px;
`;

export const CustomText = styled(Text).attrs({
  type: "text",
  size: "small",
  color: "gray",
  center: true,
})``;

export const Strong = styled(Text).attrs({
  center: true,
  size: "small",
  type: "title",
  color: "blue",
})``;

export const SimpleText = styled.Text``;

export const Link = styled.TouchableOpacity``;

export const Paragraph = styled(Text).attrs({
  center: true,
  size: "small",
  type: "text",
  color: "gray",
})`
  margin-bottom: 24px;
`;

export const TextContent = styled.Text``;

export const Footer = styled.View``;

export const SkipButton = styled(Button).attrs({
  type: "text",
  size: "small",
  color: "gray",
  center: true,
})``;
