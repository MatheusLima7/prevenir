import Text from "@src/atoms/text";
import colors from "@src/theme/colors";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  background-color: ${colors.white};
  width: 320px;
  height: 120px;
  top: 50%;
  left: 50%;
  margin-left: -160px;
  margin-top: -60px;
  position: absolute;
  padding: 30px 0;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.View`
  align-items: flex-end;
  margin-right: 30px;
  margin-top: 40px;
`;

export const Message = styled(Text).attrs({
  type: "text",
  size: "small",
  color: "gray",
})``;

export const Title = styled(Text).attrs({
  type: "title",
  size: "medium",
  color: "gray",
})``;
