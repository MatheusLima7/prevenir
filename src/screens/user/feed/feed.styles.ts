import colors from "@src/theme/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Wrapper = styled(SafeAreaView)`
  background-color: ${colors.lightBlue};
  flex: 1;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { flexGrow: 1 },
})`
  flex: 1;
  width: 100%;
  padding: 12px;
`;
