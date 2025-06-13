import styled from "styled-components/native";
import Text from "../../atoms/text";
import { scale } from "@src/config/metrics";

export const Wrapper = styled.View`
  text-align: center;
  margin-top: ${scale(55)}px;
  margin-bottom: ${scale(40)}px;
`;

export const Subtitle = styled(Text).attrs({
  type: "title",
  size: "medium",
  color: "blue",
  center: true,
})``;

export const Title = styled(Text).attrs({
  type: "text",
  size: "small",
  center: true,
})``;

export const Link = styled.TouchableOpacity``;
