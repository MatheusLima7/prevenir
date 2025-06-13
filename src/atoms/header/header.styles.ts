import styled from "styled-components/native";
import Text from "../text";

export const Wrapper = styled.View``;

export const Title = styled(Text).attrs({
  type: "title",
  size: "medium",
  color: "gray",
})``;

export const Strong = styled(Text).attrs({
  type: "title",
  size: "medium",
  color: "blue",
})``;
