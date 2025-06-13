import { Wrapper, Paragraph, Strong, TextContent } from "./feed.styles";
import useFeedOnBoarding from "./useFeedOnBoarding";
import { ReactNode } from "react";

export default function Feed(): ReactNode {
  const { texts } = useFeedOnBoarding();
  return (
    <Wrapper>
      {texts.map((paragraph, i) => {
        return (
          <TextContent key={i}>
            {paragraph.map((item, index) => {
              if (item.strong) {
                return <Strong key={index}>{item.text}</Strong>;
              }
              return <Paragraph key={index}>{item.text}</Paragraph>;
            })}
          </TextContent>
        );
      })}
    </Wrapper>
  );
}
