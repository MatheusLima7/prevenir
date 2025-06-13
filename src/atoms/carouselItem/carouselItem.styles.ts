import styled from "styled-components/native";
import Text from "../text";

export const ImageContent = styled.View`
  height: 160px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text).attrs({
  center: true,
  size: "large",
  type: "title",
  color: "gray",
})`
  width: 280px;
  margin: 0 auto;
`;
