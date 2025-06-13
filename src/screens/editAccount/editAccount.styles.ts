import Icon from "@react-native-vector-icons/fontawesome6";
import Button from "@src/atoms/button";
import colors from "@src/theme/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Wrapper = styled(SafeAreaView)`
  background-color: ${colors.lightBlue};
  flex: 1;
  padding: 25px 30px 50px 30px;
  position: relative;
`;

export const ScrollViewContent = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: "always",
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
})`
  flex: 1;
`;

export const UpdateButton = styled(Button).attrs({
  type: "gradient",
  size: "small",
})`
  margin-bottom: 15px;
`;

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
