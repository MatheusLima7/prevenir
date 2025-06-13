import colors from "@src/theme/colors";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  height: 10px;
  background-color: ${colors.darkGray};
  border-radius: 8px;
`;

export type ProgressBarProps = {
  progress: number;
};

export const Bar = styled.View<ProgressBarProps>`
  ${({ progress }: ProgressBarProps) => progress && `width: ${progress}%;`}
  height: 10px;
  background-color: ${colors.blue};
  border-radius: 8px;
`;
