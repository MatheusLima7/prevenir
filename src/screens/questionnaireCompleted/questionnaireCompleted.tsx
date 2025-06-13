import {
  ButtonOk,
  Content,
  Heart,
  IconArrowRight,
  Subtitle,
  Title,
  Wrapper,
} from "./questionnaireCompleted.styles";
import useQuestionnaireCompleted from "./useQuestionnaireCompleted";

export default function QuestionnaireCompleted() {
  const { title, subtitle, onPress, go_to_menu } = useQuestionnaireCompleted();

  return (
    <Wrapper>
      <Content>
        <Heart />
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Content>
      <ButtonOk onPress={onPress} endIcon={<IconArrowRight />}>
        {go_to_menu}
      </ButtonOk>
    </Wrapper>
  );
}
