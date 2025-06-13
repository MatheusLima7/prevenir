import colors from "@src/theme/colors";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";
import HeartsWithBG from "@assets/hearts-with-bg.png";
import Text from "../text";

export const Wrapper = styled.TouchableOpacity`
  position: relative;
  margin-top: 30px;
  overflow: hidden;
  border-radius: 10px;
  height: 90px;
`;

export const Banner = styled(LinearGradient).attrs({
  colors: [colors.purple, colors.xLightDanger],
  useAngle: true,
  angle: 60,
})`
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding: 8px 0px;
  height: 90px;
`;

export const Image = styled.Image.attrs({
  source: HeartsWithBG,
})`
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 99;
  width: 127px;
  height: 90px;
`;

export const Content = styled.View`
  width: 60%;
`;

export const Title = styled(Text).attrs({
  type: "title",
  size: "small",
  color: "white",
})`
  margin-top: 10px;
  text-align: left;
  margin-left: 24px;
`;

export const Subtitle = styled(Text).attrs({
  type: "title",
  size: "xMaxLarge",
  color: "white",
})`
  text-align: left;
  margin-left: 24px;
`;

export const And = styled(Text).attrs({
  type: "title",
  size: "medium",
  color: "white",
})``;
