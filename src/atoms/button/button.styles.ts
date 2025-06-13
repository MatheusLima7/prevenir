import styled from "styled-components/native";
import { ButtonProps } from "./button.types";
import colors from "../../theme/colors";
import typography, { SizeType } from "../../theme/typography";
import LinearGradient from "react-native-linear-gradient";
import Text from "../text";
import { isAndroid } from "@src/config/metrics";

export const Wrapper = styled.TouchableOpacity<Partial<ButtonProps>>`
  display: flex;
  ${({ hasGradient }: ButtonProps) =>
    hasGradient
      ? `
    padding: 0px 0px;
    `
      : `padding: 0 30px;`}
  border-radius: 7px;
  flex-direction: row;
  color: ${colors.white};
  justify-content: space-evenly;
  align-itens: center;

  ${({ mode }: ButtonProps) => {
    switch (true) {
      case mode == "full":
        return `
                    width: 100%;
                    height: 60px;

                    @media (min-width: 601px) {
                        width: auto;
                        margin: 0 auto;
                    }


                `;

      default:
        return `
                    width: auto;
                `;
    }
  }}

  ${({ size }: ButtonProps) => typography.size[size as SizeType]};

  ${({ type }: ButtonProps) => {
    switch (true) {
      case type == "filled":
        return `
                    background-color: ${colors.darkBlue};
                    border-radius: 7px;
                    align-items: center;
                `;

      case type == "outline":
        return `
                    background-color: transparent;
                    border-radius: 7px;
                    color: ${colors.darkBlue};
                    border: solid 1px ${colors.darkBlue};
                    justify-content: center;
                    `;

      case type == "text":
        return `
                    color: ${colors.gray};
                    height: 40px;
                    align-items: center;    
                                  `;
      default:
        return `
                    color: ${colors.gray};

        `;
    }
  }}

  ${({ disabled }: ButtonProps) =>
    disabled
      ? `
      opacity: 0.5;
    `
      : `
    
    `}
`;

export const Icon = styled.View`
  width: 40px;
  justify-content: center;
  align-items: center;
`;

export const Gradient = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})<{ variant?: "contain" | "full"; hasIcon: boolean }>`
  display: flex;
  flex-direction: row;

  ${({ variant }: { variant?: "contain" | "full" | "normal" }) => {
    switch (true) {
      case variant === "normal":
        return `
          width: auto;
          margin: 10px 0px 0 0px;`;

      case variant === "contain":
        return `
          width: 100%;
          margin: 10px 0px 0 0px;`;

      default:
        return ` 
          width: 100%;
          margin: 20px auto 0 auto;`;
    }
  }}

  ${({ hasGradientOption }: { hasGradientOption: boolean }) =>
    hasGradientOption
      ? `
    ${
      isAndroid
        ? `
      height: auto;
      padding: 16px;
    `
        : `
      height: 60px;
    `
    }
  `
      : `
    height: 60px;
  `}
  align-items: center;
  justify-content: space-between;
  border-radius: 7px;
  left: 0;

  ${({ mode }: ButtonProps) => {
    switch (true) {
      case mode == "full":
        return `
                    width: 100%;
                    height: 60px;

                    @media (min-width: 601px) {
                        width: auto;
                        margin: 0 auto;
                    }


                `;
      case mode == "normal":
        return `
                    width: auto;
                    padding: 13px 34px;
                `;

      default:
        return `
                `;
    }
  }}

  ${({ isShortAnswer }: { isShortAnswer?: boolean }) =>
    isShortAnswer
      ? `
          width: auto;
          padding: 13px 7px 13px 34px;
          `
      : ``}

  ${({ hasIcon }: { hasIcon?: boolean }) =>
    !hasIcon
      ? `
          width: auto;
          padding: 13px 34px;
          `
      : ``}
`;

export const CustomText = styled(Text).attrs({
  type: "title",
})`
  width: 100%;
  ${({ isAlignRight }: ButtonProps) =>
    isAlignRight ? "text-align: right;" : ""}
  ${({ isAlignLeft }: ButtonProps) => (isAlignLeft ? "text-align: left;" : "")}
`;

export const GradientText = styled(Text).attrs({
  type: "title",
  color: "white",
})`
  ${({ mode }: { mode: "full" | "normal" }) =>
    mode != "normal"
      ? `
   margin-left: 15px;
  `
      : ""}

  ${({ center }: { center: boolean }) =>
    center
      ? `
    width: 100%;
    margin-left: 0px;
  `
      : ""}
`;

export const GradientIcon = styled.View`
  ${({ isShortAnswer }: { isShortAnswer: boolean }) =>
    isShortAnswer
      ? `
    margin-left: 8px;
  `
      : `
    margin-right: 15px;
  `}
`;
