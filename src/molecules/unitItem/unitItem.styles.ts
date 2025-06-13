import Icon from "@react-native-vector-icons/fontawesome6";
import Button from "@src/atoms/button";
import Text from "@src/atoms/text";
import colors from "@src/theme/colors";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  position: relative;
  align-self: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const Shadow = styled.Image`
  position: absolute;
  width: 107%;
  height: 24px;
  bottom: -16px;
  left: -16px;
  z-index: -1;
`;

export const Card = styled.View`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
`;

export const Content = styled.View`
  width: 100%;
  padding: 0 20px;
  padding-top: 14px;
  padding-bottom: 11px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 125px;
  max-height: 125px;
`;

export const Title = styled(Text).attrs({
  type: "title",
  size: "small",
})`
  margin-bottom: 2px;
  color: ${colors.gray};
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 20px;
`;

export const Description = styled(Text).attrs({
  type: "text",
  size: "small",
})`
  margin-bottom: 2px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0;
  color: ${colors.gray};
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

export const BoldText = styled(Text).attrs({
  type: "text",
  size: "small",
})`
  color: ${colors.gray};
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 16px;
`;
