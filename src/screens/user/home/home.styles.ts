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
  contentContainerStyle: { flexGrow: 1 },
})``;

export const Welcome = styled(Text).attrs({
  type: "text",
  size: "medium",
  color: "gray",
})`
  margin-top: 10px;
`;

export const Description = styled.Text`
  margin-top: 15px;
`;

export const Message = styled(Text).attrs({
  type: "text",
  size: "small",
  color: "gray",
  center: true,
})`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Strong = styled(Text).attrs({
  type: "title",
  size: "small",
  color: "gray",
})``;
