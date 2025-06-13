import styled from "styled-components/native";
import Text from "../text";
import colors from "@src/theme/colors";

export const Wrapper = styled.TouchableOpacity`
  background-color: ${colors.white};
  padding: 12px;

  border-radius: 10px;
  shadow-color: ${colors.dark};
  shadow-offset: 0px -2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;

  margin: 0 7px 5px 7px;
`;

export const OptionName = styled(Text).attrs({
  type: "text",
  size: "small",
})``;
