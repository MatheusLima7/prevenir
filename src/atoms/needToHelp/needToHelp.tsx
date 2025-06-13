import { NeedToHelpProps } from "./needToHelp.types";
import { Wrapper, Subtitle, Title, Link } from "./needToHelp.styles";
import useNeedToHelp from "./useNeedToHelp";

export default function NeedToHelp({ title, subtitle }: NeedToHelpProps) {
  const { onPress } = useNeedToHelp();

  return (
    <Wrapper>
      <Title>{title} </Title>
      <Link onPress={onPress}>
        <Subtitle>{subtitle}</Subtitle>
      </Link>
    </Wrapper>
  );
}
