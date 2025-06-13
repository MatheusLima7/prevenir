import { Wrapper, Title, Strong } from "./header.styles";
import useHeader from "./useHeader";

export default function Header() {
  const { questionaire, date } = useHeader();

  return (
    <Wrapper>
      <Title>
        {questionaire}: <Strong>{date}</Strong>
      </Title>
    </Wrapper>
  );
}
