import Icon from "@react-native-vector-icons/fontawesome6";
import Button from "@src/atoms/button";
import Text from "@src/atoms/text";
import colors from "@src/theme/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Wrapper = styled(SafeAreaView)`
  background-color: ${colors.lightBlue};
  flex: 1;
  padding: 25px 30px 50px 30px;
`;

export const ScrollViewContent = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: "always",
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
})`
  flex: 1;
`;

export const Topic = styled(Text).attrs({
  type: "title",
  size: "xMedium",
  color: "gray",
})`
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const TextContent = styled.Text`
  margin-bottom: 24px;
`;

export const Paragraph = styled(Text).attrs({
  size: "small",
  type: "text",
  color: "gray",
})`
  margin-bottom: 24px;
`;

export const Strong = styled(Text).attrs({
  center: true,
  size: "small",
  type: "title",
  color: "blue",
})`
  margin-bottom: 24px;
`;

export const NextButton = styled(Button).attrs({
  type: "gradient",
  size: "small",
})``;

export const IconArrowRight = styled(Icon).attrs({
  name: "chevron-right",
  size: 20,
  color: colors.white,
  iconStyle: "solid",
})``;

export const ContentError = styled.View`
  position: absolute;
  bottom: 0;
  left: 20px;
  right: 20px;
`;
