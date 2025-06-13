import styled from "styled-components/native";
import { TextProps } from "./text.types";
import typography, { SizeType, TextType } from "../../theme/typography";
import colors, { ColorType } from "../../theme/colors";

export const Wrapper = styled.Text<Partial<TextProps>>`
  ${({ size }: TextProps) => typography.size[size as SizeType]};
  ${({ type }: TextProps) => typography.type[type as TextType]};
  ${({ color }: TextProps) => `color: ${colors[color as ColorType]}`};
  ${({ center }: TextProps) => (center ? `text-align: center;` : "")}
  display: flex;
`;
