import {
  Wrapper,
  IconArrowRight,
  Robot,
  Title,
  Subtitle,
  ButtonOk,
  Content,
} from "./tellYourHistory.styles";
import useTellYourHistory from "./useTellYourHistory";

export default function TellYourHistoryScreen() {
  const { title, subtitle, button, onPress } = useTellYourHistory();

  return (
    <Wrapper>
      <Content>
        <Robot />
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Content>
      <ButtonOk onPress={onPress} endIcon={<IconArrowRight />}>
        {button}
      </ButtonOk>
    </Wrapper>
  );
}
