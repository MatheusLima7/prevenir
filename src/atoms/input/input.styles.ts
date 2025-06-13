import styled from "styled-components/native";
import Text from "../text";

export const Wrapper = styled.View``;

export const Label = styled(Text).attrs(
  ({ disabled }: { disabled?: boolean }) => ({
    type: "text",
    size: "small",
    color: disabled ? "neutralLightBlue" : "neutralDarkBlue",
  })
)``;

export const WrapperCpf = styled.View``;
