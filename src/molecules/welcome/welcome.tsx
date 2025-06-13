import { WelcomeProps } from "./welcome.types";
import { Wrapper, Title, Subtitle, Org, Content } from "./welcome.styles";

const Welcome = ({ title, text, org }: WelcomeProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>

      <Content>
        <Subtitle>
          {text}
          {` `}
          {!!org && <Org>{org}</Org>}
        </Subtitle>
      </Content>
    </Wrapper>
  );
};

export default Welcome;
