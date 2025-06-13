import colors from "@src/theme/colors";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";
import Trophy from "@assets/trophy.png";
import Text from "../text";

export const Wrapper = styled.View`
  position: relative;
  margin-top: 15px;
`;

export const Banner = styled(LinearGradient).attrs({
  colors: [colors.purple, colors.xLightDanger],
  useAngle: true,
  angle: 270,
})`
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  height: 90px;
  position: relative;
`;

export const TrophyBG = styled(LinearGradient).attrs({
  colors: [colors.gradient, colors.blue],
})`
  width: 90px;
  height: auto;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 90px;
  border-bottom-right-radius: 90px;
`;

export const Image = styled.Image.attrs({
  source: Trophy,
})``;

export const Content = styled.TouchableOpacity`
  justify-content: center;
`;

export const Title = styled(Text).attrs({
  type: "title",
  size: "small",
  color: "white",
})`
  margin-top: 10px;
  text-align: right;
  margin-right: 20px;
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
  margin-right: 20px;
`;
