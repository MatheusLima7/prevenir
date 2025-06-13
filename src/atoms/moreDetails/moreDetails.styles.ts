import styled from "styled-components/native";
import Text from "../text";
import OnPress from "@assets/on-press.png";

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  margin-bottom: 70px;
`;

export const Image = styled.Image.attrs({
  source: OnPress,
})`
  width: 32px;
  height: 32px;
`;

export const Title = styled(Text).attrs({
  type: "title",
  size: "small",
  color: "lightDanger",
})``;
