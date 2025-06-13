import styled from "styled-components/native";
import { MaskedTextInput } from "react-native-advanced-input-mask";
import colors from "@src/theme/colors";
import { TextInputStyleProps } from "../textInput/textInput.types";

export const Mask = styled(MaskedTextInput)`
  width: 100%;
  height: 50px;
  background-color: ${colors.white};
  margin: 7px 0;
  padding: 14px;
  color: ${colors.neutralDarkBlue};
  ${({ focus, disabled }: TextInputStyleProps) => {
    return focus && !disabled
      ? `
      background-color: ${colors.white};
    `
      : `
      background-color: ${colors.white}50;
    `;
  }}
`;
