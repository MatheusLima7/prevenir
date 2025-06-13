import colors from "@src/theme/colors";
import styled from "styled-components/native";
import { TextInputStyleProps } from "./textInput.types";

export const Wrapper = styled.View``;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  background-color: ${colors.white};
  margin: 7px 0;
  padding: 14px;
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
