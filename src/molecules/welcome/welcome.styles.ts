import styled from "styled-components/native";
import Text from "../../atoms/text";
import { scale } from "@src/config/metrics";

export const Wrapper = styled.View`
  text-align: center;
`;

export const Title = styled(Text).attrs({
  type: "title",
  size: "large",
  color: "gray",
  center: true,
})``;

export const Subtitle = styled(Text).attrs({
  type: "text",
  size: "small",
  color: "gray",
  center: true,
})``;

export const Content = styled.View`
  margin-top: ${scale(10)}px;
`;

export const Org = styled(Text).attrs({
  type: "title",
  size: "small",
  color: "gray",
})``;
