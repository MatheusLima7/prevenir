import Text from "@src/atoms/text";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  position: relative;
  align-self: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const Shadow = styled.Image`
  position: absolute;
  width: 106%;
  height: 32px;
  bottom: -18px;
  left: -12px;
  z-index: -1;
`;

export const Card = styled.View`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  padding: 0 20px;
  padding-top: 14px;
  padding-bottom: 17px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Image = styled.Image``;

export const ClickableIcon = styled.TouchableOpacity`
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 14px;
`;

export const Name = styled(Text).attrs({
  color: "gray",
  size: "small",
  type: "boldTitle",
})``;

export const PhoneNumberContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
`;

export const PhoneNumber = styled(Text).attrs({
  color: "gray",
  size: "xSmall",
  type: "boldTitle",
})`
  line-height: 30px;
`;

export const Status = styled(Text).attrs({
  color: "gray",
  size: "xSmall",
  type: "boldTitle",
})``;

export const HighlightedText = styled(Text).attrs({
  color: "blue",
  size: "xSmall",
  type: "boldTitle",
})``;

export const Actions = styled.View`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
