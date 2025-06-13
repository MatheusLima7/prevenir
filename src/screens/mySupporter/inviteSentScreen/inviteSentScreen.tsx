import { Image } from "react-native";
import { useRootNavigation } from "@src/stacks";
import routes from "@src/stacks/routes";
import { IconArrowRight } from "@src/screens/tellYourHistory/tellYourHistory.styles";
import Text from "@src/atoms/text";
import {
  Content,
  DescriptionText,
  HeaderText,
  NextButton,
  Wrapper,
} from "./inviteSentScreen.styles";
import Envelop from "@assets/envelop.png";

export default function InviteSentScreen() {
  const { navigate } = useRootNavigation();
  return (
    <Wrapper>
      <Content>
        <Image source={Envelop} />
        <HeaderText>Convite enviado!</HeaderText>
        <DescriptionText>
          Agora basta você aguardar. Se as informações estiverem corretas o seu
          apoio poderá entrar em nosso aplicativo e continuar o cadastro e
          validar as informações!
        </DescriptionText>

        <NextButton
          size="large"
          type="gradient"
          onPress={() => navigate(routes.MY_SUPPORTER_SUPPORTERS_LIST)}
          endIcon={<IconArrowRight />}
        >
          <Text size="small" type="boldTitle">
            Lista dos meus apoiadores
          </Text>
        </NextButton>
      </Content>
    </Wrapper>
  );
}
