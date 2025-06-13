import { isAndroid } from "@src/config/metrics";
import styled from "styled-components/native";

export const KeyboardView = styled.KeyboardAvoidingView.attrs(() => ({
  behavior: isAndroid ? "height" : "padding",
}))`
  flex: 1;
`;
