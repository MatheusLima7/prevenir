import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "@src/theme/colors";

export const Wrapper = styled(SafeAreaView)`
  background-color: ${colors.lightBlue};
  flex: 1;
  padding: 25px 30px 50px 30px;
  justify-content: center;
  align-items: center;
`;
