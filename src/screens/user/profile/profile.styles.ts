import Icon from "@react-native-vector-icons/fontawesome6";
import Button from "@src/atoms/button";
import Text from "@src/atoms/text";
import colors from "@src/theme/colors";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import ImageCamera from "@assets/prime_camera.png";

export const Wrapper = styled(SafeAreaView)`
  background-color: ${colors.lightBlue};
  flex: 1;
  padding: 25px 30px 50px 30px;
`;

export const Avatar = styled.View`
  position: relative;
  width: 70px;
  height: 70px;
`;

export const SupporterAvatar = styled.View`
  position: relative;
  width: 120px;
  height: 120px;
  justify-content: center;
  align-items: center;
`;

export const ScrollViewContent = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: "always",
  showsVerticalScrollIndicator: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { flexGrow: 1 },
})``;

export const Header = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const UserInfo = styled.Text``;

export const Data = styled.View`
  max-width: 250px;
  margin: 0 auto;
`;

export const Separator = styled(Text).attrs({
  type: "title",
  size: "xMedium",
  color: "gray",
})``;

export const Title = styled(Text).attrs({
  type: "title",
  size: "xMedium",
  color: "blue",
  center: true,
})``;

export const Row = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: center;
`;

export const Col = styled.View`
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  flex: 1;
`;

export const Answer = styled(Text).attrs({
  type: "title",
  size: "xMedium",
  color: "xDarkGray",
  center: true,
})``;

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

export const TextButton = styled(Button).attrs({
  type: "text",
  size: "small",
  center: true,
  color: "lightDanger",
})`
  margin-top: 15px;
`;

export const EditButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0px;
  width: 40px;
  height: 40px;
  z-index: 999;
  right: 0px;
`;

export const GrandientEditImage = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  colors: [colors.blue, colors.gradient],
})`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;

export const Camera = styled.Image.attrs({
  source: ImageCamera,
})``;
