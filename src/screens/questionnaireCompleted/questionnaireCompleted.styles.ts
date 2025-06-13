import Text from "@src/atoms/text";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import HeartImage from "@assets/two-hearts.png";
import colors from "@src/theme/colors";
import Icon from "@react-native-vector-icons/fontawesome6";
import Button from "@src/atoms/button";

export const Wrapper = styled(SafeAreaView)`
  background-color: ${colors.lightBlue};
  flex: 1;
  padding: 25px 30px 50px 30px;
  position: relative;
  justify-content: space-between;
`;

export const Heart = styled.Image.attrs({
  source: HeartImage,
})`
  margin: 0 auto;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled(Text).attrs({
  type: "title",
  size: "large",
  color: "gray",
  center: true,
})`
  margin-bottom: 10px;
`;

export const Subtitle = styled(Text).attrs({
  type: "text",
  size: "xSmall",
  color: "gray",
  center: true,
})`
  width: 290px;
  margin: 0 auto;
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
