import {
  Wrapper,
  Paragraph,
  Strong,
  TextContent,
} from "./emotionalSupport.styles";
import { EMOTIONAL_SUPPORT } from "./general.constants";
import useEmotionalSupportOnBoarding from "./useEmotionalSupportOnBoarding";
import { ReactNode } from "react";

export default function EmotionalSupport(): ReactNode {
  const { texts } = useEmotionalSupportOnBoarding();
  return (
    <Wrapper testID={EMOTIONAL_SUPPORT}>
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
