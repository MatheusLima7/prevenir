import colors from "@src/theme/colors";
import styled from "styled-components/native";

export const Wrapper = styled.View``;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.neutralDarkBlue,
  autoFocus: true,
  multiline: true,
  numberOfLines: 4,
  textAlignVertical: "top",
})`
  width: 100%;
  height: 105px;
  margin: 0px 0 20px 0;
  padding: 14px;
  border: solid 1px ${colors.darkGray}33;
  border-radius: 8px;
`;
