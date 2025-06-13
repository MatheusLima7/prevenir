import Icon from "@react-native-vector-icons/fontawesome6";
import Button from "@src/atoms/button";
import Text from "@src/atoms/text";
import colors from "@src/theme/colors";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  align-self: center;
  background-color: ${colors.white};
  border-radius: 10px;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
`;

export const Shadow = styled.Image`
  position: absolute;
  height: 24px;
  width: 107%;
  bottom: -16px;
  left: -16px;
  z-index: -1;
`;

export const Card = styled.View`
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  z-index: 1;
`;

export const Content = styled.View`
  padding: 17px;
  width: 100%;
`;

export const Image = styled.Image`
  width: 100%;
  height: 125px;
`;

export const Title = styled(Text).attrs({
  type: "title",
  size: "small",
  color: "gray",
})`
  margin-bottom: 12px;
`;

export const Description = styled(Text).attrs({
  type: "text",
  size: "small",
  color: "gray",
  numberOfLines: 3,
})`
  margin-bottom: 15px;
  overflow: "hidden";
`;

export const Date = styled(Text).attrs({
  type: "title",
  size: "small",
  color: "blue",
})``;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DetailsButton = styled(Button).attrs({
  type: "text",
  size: "small",
  color: "blue",
  isAlignRight: true,
})`
  width: 120px;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px;
  self-align: flex-end;
  height: 24px;
  align-items: center;
`;

export const CustomIcon = styled(Icon).attrs({
  name: "chevron-right",
  size: 14,
  color: colors.blue,
  iconStyle: "solid",
})`
  margin-left: 7px;
`;
