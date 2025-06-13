import {
  Wrapper,
  Paragraph,
  Strong,
  TextContent,
} from "./callingForHelp.styles";
import useCallingForHelpOnBoarding from "./useCallingForHelpOnBoarding";
import { ReactNode } from "react";

export default function CallingForHelp(): ReactNode {
  const { texts } = useCallingForHelpOnBoarding();
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
