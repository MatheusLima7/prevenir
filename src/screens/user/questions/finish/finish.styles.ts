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
  padding: 25px 30px 50px 30px;
`;

export const Content = styled.View`
  padding: 0 30px 0 30px;
  align-items: center;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

export const ButtonOk = styled(Button).attrs({
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
  margin-bottom: 20px;
`;

export const Title = styled(Text).attrs({
  size: "large",
  type: "title",
  color: "gray",
  center: true,
})`
  margin-bottom: 10px;
`;

export const Subtitle = styled(Text).attrs({
  size: "small",
  type: "text",
  color: "gray",
  center: true,
})``;
