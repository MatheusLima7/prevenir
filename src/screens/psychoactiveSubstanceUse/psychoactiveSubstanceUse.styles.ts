import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "@src/theme/colors";
import Button from "@src/atoms/button";
import Icon from "@react-native-vector-icons/fontawesome6";
import { Image } from "react-native";
import Text from "@src/atoms/text";
import RobotImage from "@assets/robot.png";

export const Wrapper = styled(SafeAreaView)`
  background-color: ${colors.lightBlue};
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 35px 30px 50px 30px;
`;

export const Content = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: "always",
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
})`
  flex: 1;
`;

export const Box = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const TextContent = styled.Text`
  margin-bottom: 24px;
  text-align: justify;
`;

export const Strong = styled(Text).attrs({
  center: true,
  size: "small",
  type: "title",
  color: "blue",
})`
  color: ${colors.blue};
`;

export const CustomButtonYes = styled(Button).attrs(
  ({ selected }: { selected: boolean }) => ({
    type: selected ? "greenGradient" : "gradient",
    size: "small",
  })
)``;

export const CustomButtonNo = styled(Button).attrs(
  ({ selected }: { selected: boolean }) => ({
    type: selected ? "greenGradient" : "gradient",
    size: "small",
  })
)``;

export const CustomButton = styled(Button).attrs({
  type: "gradient",
  size: "small",
})``;

export const IconArrowRight = styled(Icon).attrs({
  name: "chevron-right",
  size: 20,
  color: colors.white,
  iconStyle: "solid",
})``;

export const Robot = styled(Image).attrs({
  source: RobotImage,
})`
  margin: 20px auto;
`;

export const Title = styled(Text).attrs({
  size: "large",
  type: "title",
  color: "gray",
  center: true,
})`
  margin-bottom: 25px;
`;

export const Subtitle = styled(Text).attrs({
  size: "small",
  type: "text",
  color: "gray",
  center: true,
})`
  margin-bottom: 20px;
`;

export const Paragraph = styled(Text).attrs({
  size: "small",
  type: "text",
  color: "gray",
})``;
