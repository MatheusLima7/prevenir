import colors from "@src/theme/colors";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";
import RobotHeart from "@assets/robot-heart.png";
import Text from "../text";

export const Wrapper = styled.View`
  position: relative;
  margin-top: 30px;
  overflow: visible;
`;

export const Box = styled.View`
  position: relative;
  overflow: visible;
`;

export const Banner = styled(LinearGradient).attrs({
  colors: [colors.purple, colors.xLightDanger],
  useAngle: true,
  angle: 60,
})`
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Image = styled.Image.attrs({
  source: RobotHeart,
})`
  position: absolute;
  bottom: 0px;
  left: 10px;
  z-index: 99;
  width: 130px;
  height: 120px;
`;

export const Content = styled.View`
  justify-content: center;
  width: 100%;
`;

export const Title = styled(Text).attrs({
  type: "title",
  size: "small",
  color: "white",
})`
  margin-top: 10px;
  text-align: right;
  margin-right: 10px;
`;

export const Subtitle = styled(Text).attrs({
  type: "title",
  size: "large",
  color: "white",
})`
  text-align: right;
  margin-right: 10px;
`;

export const Congratulations = styled(Text).attrs({
  type: "title",
  size: "small",
  color: "white",
})`
  margin-bottom: 10px;
  text-align: right;
  margin-right: 10px;
`;
