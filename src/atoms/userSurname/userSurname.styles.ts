import styled from "styled-components/native";
import Text from "../text";
import { UserSurnameProps } from "./userUsername.types";

export const Surname = styled(Text).attrs(({ size }: UserSurnameProps) => ({
  type: "title",
  size: size ? size : "xMedium",
  color: "gray",
}))``;
