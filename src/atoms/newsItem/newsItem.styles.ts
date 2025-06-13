import styled from "styled-components/native";
import Text from "../text";
import { WrapperProps } from "./newsItem.types";
import colors from "@src/theme/colors";

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  padding: 20px 12px;
  border-radius: 10px;
  flex-direction: row;
  align-items: flex-start;
  margin: 10px;
  overflow: hidden;

  ${({ color, readed }: WrapperProps) => {
    switch (true) {
      case readed === true:
        return `background-color: ${colors.gray}50;`;
      case color === "yellow":
        return `
          background-color: ${colors.yellow};
          shadow-color: ${colors.dark};
          shadow-offset: 0px -2px;
          shadow-opacity: 0.25;
          shadow-radius: 3.84px;
          elevation: 5;
        `;
      case color === "green":
        return `
            background-color: ${colors.green};
            shadow-color: ${colors.dark};
            shadow-offset: 0px -2px;
            shadow-opacity: 0.25;
            shadow-radius: 3.84px;
            elevation: 5;
        `;

      default:
        return `
        background-color: ${colors.white};
        shadow-color: ${colors.dark};
        shadow-offset: 0px -2px;
        shadow-opacity: 0.25;
        shadow-radius: 3.84px;
        elevation: 5;
        `;
    }
  }};
`;

export const Title = styled(Text).attrs(({ type }: WrapperProps) => ({
  type: "title",
  size: !(type === "CONGRATULATIONS") ? "smal" : "xSmall",
  color: !(type === "CONGRATULATIONS") ? "gray" : "dark",
}))<WrapperProps>`
  margin-bottom: 10px;
`;

export const Description = styled(Text).attrs(({ type }: WrapperProps) => ({
  type: "text",
  size: "xSmall",
  color: !(type === "CONGRATULATIONS") ? "gray" : "dark",
}))<WrapperProps>``;

export const Image = styled.Image`
  position: absolute;
  right: -22px;
  bottom: 0px;
`;

export const TrophyImage = styled.Image``;

export const Content = styled.View`
  flex: 1;
`;

export const ContentImage = styled.View`
  width: 113px;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`;

export const Date = styled(Text).attrs({
  type: "title",
  size: "xSmall",
  color: "gradient",
})``;
