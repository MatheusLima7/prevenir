import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import colors from "@src/theme/colors";
import Button from "@src/atoms/button";
import Text from "@src/atoms/text";

export const Wrapper = styled(SafeAreaView)`
  background-color: ${colors.lightBlue};
  flex: 1;
  padding: 25px 30px 50px 30px;
  justify-content: space-between;
`;

export const UpdateButton = styled(Button).attrs({
  type: "gradient",
  size: "small",
})``;

export const Content = styled.View``;

export const DownloadImage = styled.Image``;

export const Cellphone = styled.Image``;

export const Row = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
`;

export const Title = styled(Text).attrs({
  size: "xLarge",
  color: "gray",
  type: "title",
})`
  margin-left: 20px;
  flex: 1;
`;

export const Subtitle = styled(Text).attrs({
  size: "small",
  color: "gray",
  type: "title",
})`
  margin-bottom: 25px;
`;

export const CustomText = styled(Text).attrs({
  size: "small",
  color: "gray",
  type: "text",
})``;

export const Strong = styled(Text).attrs({
  size: "small",
  color: "gray",
  type: "title",
})``;
