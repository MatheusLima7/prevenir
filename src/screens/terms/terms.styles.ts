import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Text from "@src/atoms/text";
import colors from "@src/theme/colors";

export const Wrapper = styled(SafeAreaView)`
  background-color: ${colors.lightBlue};
  flex: 1;
  padding: 25px 30px 50px 30px;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
})`
  margin-bottom: 20px;
`;

export const Title = styled(Text).attrs({
  size: "large",
  type: "title",
  color: "gray",
})``;

export const CustomSubtitle = styled(Text).attrs({
  size: "medium",
  type: "title",
  color: "gray",
})``;

export const CustomSpace = styled.View`
  margin: 15px 0;
`;

export const CustomText = styled(Text).attrs({
  size: "small",
  type: "text",
  color: "gray",
})``;

export const Strong = styled(Text).attrs({
  size: "small",
  type: "title",
})`
  font-weight: 700;
`;
