import colors from "@src/theme/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Wrapper = styled(SafeAreaView)`
  background-color: ${colors.lightBlue};
  flex: 1;
  align-items: center;
`;

export const Container = styled.View`
  margin: 0px 0 0px 0;
  padding: 0 10px 0 10px;
  width: 100%;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
