import {
  Wrapper,
  IconArrowRight,
  Robot,
  Title,
  ButtonOk,
  Content,
  TextContent,
  Strong,
  Paragraph,
} from "./newQuestionnaire.styles";
import useNewQuestionnaire from "./useNewQuestionnaire";

export default function NewQuestionnaire() {
  const { title, subtitle, button, onPress } = useNewQuestionnaire();
  return (
    <Wrapper>
      <Content>
        <Robot />
        <Title>{title}</Title>
        <TextContent>
          {subtitle.map((item, index) => {
            if (item.strong) {
              return <Strong key={index}>{item.text}</Strong>;
            }
            return <Paragraph key={index}>{item.text}</Paragraph>;
          })}
        </TextContent>
      </Content>
      <ButtonOk onPress={onPress} endIcon={<IconArrowRight />}>
        {button}
      </ButtonOk>
    </Wrapper>
  );
}
