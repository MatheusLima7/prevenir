import styled from "styled-components/native";
import Text from "../text";
import colors from "@src/theme/colors";
import Icon from "@react-native-vector-icons/fontawesome6";

export const Wrapper = styled.View`
  border-left-width: 7px;
  border-styled: solid;
  border-color: ${colors.danger};
  padding-left: 20px;
  background-color: ${colors.white};
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  position: relative;
  z-index: 999;
  elevation: 5;
`;

export const Title = styled(Text).attrs({
  type: "title",
  size: "small",
})``;

export const Subtitle = styled(Text).attrs({
  type: "text",
  size: "small",
})``;

export const ContentIcon = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 10px;
  top: 10px;
  justify-content: center;
  align-items: center;
`;

export const CloseIcon = styled(Icon).attrs({
  name: "xmark",
  size: 12,
  color: colors.gray,
  iconStyle: "solid",
})``;
