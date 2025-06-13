import styled from "styled-components/native";
import Text from "../../atoms/text";
import { scale } from "@src/config/metrics";

export const Wrapper = styled.View`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: ${scale(30)}px;
`;

export const Subtitle = styled(Text).attrs({
  type: "title",
  size: "small",
  color: "blue",
})``;

export const Title = styled(Text).attrs({
  type: "text",
  size: "small",
})``;

export const Link = styled.TouchableOpacity``;
