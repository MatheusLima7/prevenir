import styled from "styled-components/native";
import Text from "../text";
import { UserNameProps } from "./username.types";

export const Name = styled(Text).attrs(({ size }: UserNameProps) => ({
  type: "title",
  size: size ? size : "large",
  color: "gray",
}))``;
