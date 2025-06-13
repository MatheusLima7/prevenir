import Icon from "@react-native-vector-icons/fontawesome6";
import colors from "@src/theme/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const CloseIcon = styled(Icon).attrs({
  name: "xmark",
  size: 16,
  color: colors.gray,
  iconStyle: "solid",
})``;

export const Wrapper = styled(SafeAreaView)`
  background-color: ${colors.lightBlue};
  flex: 1;
  padding: 25px 30px 50px 30px;
  position: relative;
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  top: 50px;
  right: 20px;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;
