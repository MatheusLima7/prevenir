import colors from "@src/theme/colors";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  background-color: ${colors.white};
  border-radius: 10px;
  shadow-color: ${colors.dark};
  shadow-offset: 0px -2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;

  padding: 22px;

  ${({ isFull }: { isFull: boolean }) => (isFull ? ` width: 100%; ` : ``)}
`;
