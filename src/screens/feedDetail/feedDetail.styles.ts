import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "@src/theme/colors";

export const Wrapper = styled(SafeAreaView)`
  background-color: ${colors.lightBlue};
  flex: 1 0 0;
  padding: 12px;
  justify-content: flex-start;
  align-items: center;
`;
