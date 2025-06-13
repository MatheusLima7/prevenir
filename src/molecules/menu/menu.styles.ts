import colors from "@src/theme/colors";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  background-color: ${colors.white};
  width: 100%;
  height: auto;
  top: 0px;
  left: 0px;
  position: absolute;
  padding: 30px 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Row = styled.View`
  align-items: flex-end;
  margin-right: 30px;
  margin-top: 40px;
`;
