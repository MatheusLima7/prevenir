import Icon from "@react-native-vector-icons/fontawesome6";
import Button from "@src/atoms/button";
import Text from "@src/atoms/text";
import colors from "@src/theme/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Wrapper = styled(SafeAreaView)`
  background-color: ${colors.lightBlue};
  flex: 1;
`;

export const ScrollViewContent = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: "always",
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { flexGrow: 1 },
})`
  padding: 25px 30px 50px 30px;
`;

export const Description = styled(Text).attrs({
  type: "text",
  size: "small",
  color: "gray",
})`
  margin-bottom: 25px;
`;

export const CustomButton = styled(Button).attrs({
  type: "gradientDanger",
  size: "small",
})`
  margin: 10px 0 50px 0;
`;

export const IconArrowRight = styled(Icon).attrs({
  name: "chevron-right",
  size: 20,
  color: colors.white,
  iconStyle: "solid",
})``;

export const ContentError = styled.View`
  position: absolute;
  bottom: 30px;
  left: 20px;
  right: 20px;
`;
