import styled from "styled-components/native";
import Text from "../text";
import colors from "@src/theme/colors";
import { SupporterAvatarProps } from "./supporterAvatar.types";

export const Wrapper = styled.View<SupporterAvatarProps>`
  ${({ type }: SupporterAvatarProps) =>
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
  background-color: ${colors.extraLightBlue};
  border: solid 5px ${colors.gradient};
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

export const Name = styled(Text).attrs({
  type: "title",
  size: "large",
  color: "blue",
})``;
