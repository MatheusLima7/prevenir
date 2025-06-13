import colors from "@src/theme/colors";
import styled from "styled-components/native";
import Text from "../text";

export const Wrapper = styled.View`
  flex: 1;
`;

export const Body = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 42px;
  margin-top: 24px;
  background-color: ${colors.white};
`;

export const Image = styled.Image`
  margin-right: 18px;
`;

export const Name = styled(Text).attrs({
  type: "title",
  size: "medium",
  color: "gray",
})``;
