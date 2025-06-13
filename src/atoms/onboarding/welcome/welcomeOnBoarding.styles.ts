import Text from "@src/atoms/text";
import styled from "styled-components/native";

export const Wrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
})`
  padding: 20px;
`;

export const TextContent = styled.Text`
  margin-bottom: 24px;
`;

export const Paragraph = styled(Text).attrs({
  center: true,
  size: "small",
  type: "text",
  color: "gray",
})`
  margin-bottom: 24px;
`;

export const Strong = styled(Text).attrs({
  center: true,
  size: "small",
  type: "title",
  color: "blue",
})`
  margin-bottom: 24px;
`;
