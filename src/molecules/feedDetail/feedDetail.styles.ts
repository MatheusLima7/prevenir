import Text from "@src/atoms/text";
import colors from "@src/theme/colors";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  position: relative;
  align-self: center;
  width: 100%;
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
  padding-bottom: 21px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 125px;
  max-height: 125px;
`;

export const Title = styled(Text).attrs({
  type: "title",
  size: "large",
})`
  margin-bottom: 2px;
  color: ${colors.gray};
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 20px;
  text-align: center;
`;

export const Description = styled(Text).attrs({
  type: "text",
  size: "small",
})`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0;
  color: ${colors.gray};
`;

export const HighlightedText = styled(Text).attrs({
  type: "text",
  size: "small",
})(
  (props: { lineHeight: number; fontSize: number }) => `
  color: ${colors.blue};
  font-size: ${props.fontSize || 16}px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: ${props.lineHeight || 16}px;
  font-family: Quicksand-Regular;
`
);

export const BodyText = styled(Text).attrs({
  type: "text",
  size: "small",
})(
  (props: { lineHeight: number; fontSize: number }) => `
  color: ${colors.gray};
  font-size: ${props.fontSize || 14}px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: ${props.lineHeight || 14}px;
  font-family: Quicksand-Regular;
`
);
