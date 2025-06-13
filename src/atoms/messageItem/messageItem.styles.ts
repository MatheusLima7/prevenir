import styled from "styled-components/native";
import Text from "../text";
import ArrowLeftImage from "@assets/arrow.png";
import colors from "@src/theme/colors";

export const Wrapper = styled.View<{ isLeft: boolean }>`
  flex-direction: row;
  ${({ isLeft }: { isLeft: boolean }) =>
    isLeft ? "justify-content: flex-start;" : "justify-content: flex-end;"}
  align-items: center;
  padding: 0;
  margin-bottom: 10px;
`;

export const Image = styled.Image``;

export const Message = styled(Text).attrs({
  type: "text",
  size: "xSmall",
  color: "blue",
})`
  background-color: ${colors.extraLightBlue};
  padding: 10px 17px;
  border-radius: 8px;
`;

export const Content = styled.View<{ isRobot: boolean }>`
  position: relative;
  ${({ isRobot }: { isRobot: boolean }) =>
    isRobot ? `margin-left: 20px;` : `margin-right: 20px;`}
  flex: 1;
`;

export const ArrowLeft = styled.Image.attrs({
  source: ArrowLeftImage,
})`
  position: absolute;
  left: -14px;
  top: 5px;
  width: 15px;
  height: 13px;
`;

export const ArrowRight = styled.Image.attrs({
  source: ArrowLeftImage,
})`
  position: absolute;
  right: -14px;
  top: 5px;
  width: 15px;
  height: 13px;
  transform: rotate(180deg);
`;
