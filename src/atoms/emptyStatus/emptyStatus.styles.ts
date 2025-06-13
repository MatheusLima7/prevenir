import styled from "styled-components/native";
import Text from "../text";
import EmptyImage from "@assets/robot-sad.png";

export const Wrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.Image.attrs({
  source: EmptyImage,
})`
  width: 217px;
  height: 205px;
`;

export const Title = styled(Text).attrs({
  type: "title",
  size: "large",
  color: "gray",
})`
  margin-top: 7px;
`;

export const Subtitle = styled(Text).attrs({
  type: "text",
  size: "xSmall",
  color: "gray",
  center: true,
})`
  width: 290px;
  margin: 7px auto;
`;
