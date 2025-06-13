import { Image } from "react-native";
import routes from "@src/stacks/routes";
import { useRootNavigation } from "@src/stacks";
import HeartsShinning from "@assets/hearts-shinning.png";
import Text from "@src/atoms/text";
import { IconArrowRight } from "@src/screens/tellYourHistory/tellYourHistory.styles";
import {
  Content,
  DescriptionText,
  HeaderText,
  HighlightedText,
  NextButton,
  Wrapper,
} from "./introScreen.styles";

export default function IntroScreen() {
  const { navigate } = useRootNavigation();
  return (
    <Wrapper>
      <Content>
        <Image source={HeartsShinning} />
        <HeaderText>Quem está com você na sua recuperação?</HeaderText>
        <DescriptionText>
          Sabe aquela pessoa que realmente deseja teu bem? Seja um{" "}
          <HighlightedText>vizinho, um parente, um amigo.</HighlightedText>{" "}
          Agora é o momento de você cadastrar{" "}
          <HighlightedText>seu apoiador</HighlightedText> que vai te ajudar nos
          momentos mais dificil desta jornada!
        </DescriptionText>

        <NextButton
          size="large"
          type="gradient"
          onPress={() => navigate(routes.MY_SUPPORTER_ADD_SUPPORTER)}
          endIcon={<IconArrowRight />}
        >
          <Text size="small" type="boldTitle">
            Cadastrar um apoiador
          </Text>
        </NextButton>
      </Content>
    </Wrapper>
  );
}
