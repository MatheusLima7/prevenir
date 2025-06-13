import styled from "styled-components/native";
import Button from "../button";
import Text from "../text";
import Icon from "@react-native-vector-icons/fontawesome6";
import colors from "@src/theme/colors";
import { ReactNode } from "react";

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
  margin: 0 0 20px 0;
`;

export const CustomButton = styled(Button).attrs(
  ({ endIcon }: { endIcon: ReactNode }) => ({
    type: "gradient",
    size: "small",
    mode: "normal",
    variant: "normal",
    isGradientStyledOption: true,
    isShortAnswer: true,
    endIcon,
  })
)``;

export const CustomNegativeButton = styled(Button).attrs(
  ({ endIcon }: { endIcon: ReactNode }) => ({
    type: "gradientDanger",
    size: "small",
    mode: "normal",
    variant: "normal",
    isGradientStyledOption: true,
    isShortAnswer: true,
    endIcon,
  })
)``;

export const Row = styled.View`
  flex-direction: row;
`;

export const Col = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin-right: 20px;
  justify-content: center;
`;

export const Name = styled(Text).attrs({
  type: "title",
  size: "small",
  color: "gray",
})``;

export const Phone = styled(Text).attrs({
  type: "title",
  size: "xSmall",
  color: "gray",
})``;

export const ContentButton = styled.View`
  width: 100px;
`;

export const IconArrowRight = styled(Icon).attrs({
  name: "chevron-right",
  size: 20,
  color: colors.white,
  iconStyle: "solid",
})``;

export const PhoneIcon = styled(Icon).attrs({
  name: "phone",
  size: 12,
  color: colors.blue,
  iconStyle: "solid",
})`
  margin-top: 3px;
  margin-right: 7px;
`;
