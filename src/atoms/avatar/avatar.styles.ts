import colors from "@src/theme/colors";
import styled from "styled-components/native";
import { TypeAvatarProps } from "./avatar.types";

export const Image = styled.Image`
  ${({ type }: { type: TypeAvatarProps }) =>
    type === "big"
      ? `
    width: 120px;
    height: 120px;
    border-radius: 120px;
  `
      : `
    width: 70px;
    height: 70px;
    border-radius: 70px;
  `}

  border: solid 5px ${colors.blue};
`;
