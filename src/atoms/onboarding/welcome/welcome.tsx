import {
  Wrapper,
  Paragraph,
  Strong,
  TextContent,
} from "./welcomeOnBoarding.styles";
import useWelcomeOnBoarding from "./useWelcomeOnBoarding";
import { ReactNode } from "react";

export default function WelcomeOnBoarding(): ReactNode {
  const { texts } = useWelcomeOnBoarding();
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
