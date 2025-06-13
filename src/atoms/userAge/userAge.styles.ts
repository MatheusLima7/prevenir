import styled from "styled-components/native";
import Text from "../text";
import colors from "@src/theme/colors";

export const Wrapper = styled(Text).attrs(
  ({ color }: { color?: keyof typeof colors }) => ({
    type: "title",
    size: "xMedium",
    color: color ? color : "blue",
  })
)``;
