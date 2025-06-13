import ProgressBar from "@src/atoms/progressBar";
import {
  Wrapper,
  IconArrowRight,
  Robot,
  Title,
  Subtitle,
  ButtonOk,
  Content,
} from "./finish.styles";
import useFinish from "./useFinish";

export default function FinishScreen() {
  const { title, subtitle, button, onPress } = useFinish();

  return (
    <Wrapper>
      <ProgressBar step={5} quantity={5} />
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
