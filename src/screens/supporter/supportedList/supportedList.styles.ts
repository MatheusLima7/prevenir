import colors from "@src/theme/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Wrapper = styled(SafeAreaView)`
  background-color: ${colors.lightBlue};
  flex: 1;
  padding: 25px 30px 50px 30px;
  position: relative;
`;

export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { flexGrow: 1 },
})`
  width: 100%;
`;
