import colors from "@src/theme/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Wrapper = styled(SafeAreaView)`
  background-color: ${colors.lightBlue};
  flex: 1;
  padding: 25px 30px 50px 30px;
  justify-content: space-between;
  width: 100%;
`;

export const ScrollViewContent = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: "always",
  showsVerticalScrollIndicator: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { flexGrow: 1 },
})``;

export const Options = styled.View``;

export const Messages = styled.View`
  flex: 1;
`;
