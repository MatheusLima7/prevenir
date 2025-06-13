import Text from "@src/atoms/text";
import { IconArrowRight } from "@src/screens/tellYourHistory/tellYourHistory.styles";
import {
  Content,
  DescriptionText,
  HeaderText,
  Image,
  NextButton,
  Wrapper,
} from "./accountDeleted.styles";
import { useDispatch } from "react-redux";
import { logout } from "@src/features/auth";
import { useEffect } from "react";

const accountDeleteScreenConstants = {
  description:
    "Seu perfil será excluído e você não\n acesserá  mais este aplicativo.\n Você será redirecionada para a telas de\n Login em 1 minuto.",
  leave_button_label: "Sair do aplicativo",
  title: "Perfil Excluido",
};

export default function AccountDeleted() {
  const { description, leave_button_label, title } =
    accountDeleteScreenConstants;

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(logout()), 60000);
  }, []);

  return (
    <Wrapper>
      <Content>
        <Image />
        <HeaderText>{title}</HeaderText>
        <DescriptionText>{description}</DescriptionText>
        <NextButton
          size="large"
          type="gradient"
          onPress={() => dispatch(logout())}
          endIcon={<IconArrowRight />}
        >
          <Text size="small" type="boldTitle">
            {leave_button_label}
          </Text>
        </NextButton>
      </Content>
    </Wrapper>
  );
}
