import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Button from "@src/atoms/button";
import Text from "@src/atoms/text";
import colors from "@src/theme/colors";
import { View } from "react-native";
import { TextInputStyleProps } from "@src/atoms/input/textInput/textInput.types";

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.lightBlue};
`;

export const Content = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 31px;
  padding-bottom: 69px;
`;

export const FieldGroup = styled(View)`
  background-color: ${colors.lightBlue};
  width: 100%;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 42px;
  background-color: ${colors.white};
  margin: 7px 0;
  padding: 9px 13px;
  border-radius: 6px;
  color: ${colors.neutralDarkBlue};
  ${({ disabled }: TextInputStyleProps) => {
    return !disabled
      ? `
      background-color: ${colors.white};
    `
      : `
      background-color: ${colors.white}80;
    `;
  }}
`;

export const HighlightedClickText = styled(Text).attrs({
  color: "blue",
  size: "small",
  type: "boldTitle",
})``;

export const DescriptionText = styled(Text).attrs({
  size: "small",
  type: "text",
  center: true,
})`
  margin-top: 8px;
`;

export const HighlightedText = styled(Text).attrs({
  color: "lightDanger",
  size: "small",
  type: "boldTitle",
})``;

export const NextButton = styled(Button).attrs({
  type: "gradient",
  size: "small",
})`
  border-radius: 10px;
`;
