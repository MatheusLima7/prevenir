import { useState } from "react";
import { Alert, View } from "react-native";
import { useDispatch } from "react-redux";
import { useRootNavigation } from "@src/stacks";
import routes from "@src/stacks/routes";
import { setHasRegistered } from "@src/features/supporters/supportersSlice";
import { IconArrowRight } from "@src/screens/tellYourHistory/tellYourHistory.styles";
import Text from "@src/atoms/text";
import Button from "@src/atoms/button";
import {
  Content,
  DescriptionText,
  FieldGroup,
  HighlightedClickText,
  HighlightedText,
  Input,
  NextButton,
  Wrapper,
} from "./addSupporterScreen.styles";
import { ContactSelectorModal } from "@src/molecules/contactSelectorModal/contactSelectorModal";
import { CreateSupporterPayload } from "../mySupporter.types";
import useCreateSupporter from "../hooks/useCreateSupporter";
import { formatPhoneNumber } from "@src/utils/formatPhoneNumber";

export default function AddSupporterScreen() {
  const dispatch = useDispatch();
  const { navigate } = useRootNavigation();

  const [name, setName] = useState("");
  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [phone, setPhone] = useState<string>("");

  const { mutateAsync, isPending: isLoading } = useCreateSupporter();

  const handleSelectContact = (contact: {
    name: string | null;
    phoneNumber: string;
  }) => {
    setName(contact.name as string);
    setPhone(contact.phoneNumber);
  };

  const handleSubmit = async () => {
    try {
      if (!name || !phone) {
        Alert.alert("Preencha todos os campos");
        return;
      }

      if (!/^[\s\S]{2,50}$/.test(name)) {
        Alert.alert("Nome inválido", "Deve ter de 2 à 50 caracteres");
        return;
      }
      const payload: CreateSupporterPayload = {
        mentorName: name,
        mentorCellPhone: formatPhoneNumber(phone),
      };

      await mutateAsync(payload, {
        onSuccess: () => {
          dispatch(setHasRegistered(true));
          navigate(routes.MY_SUPPORTER_INVITE_SENT);
        },
        onError: (error) => {
          console.log("error: ", error);
          Alert.alert(
            "Erro",
            "Não foi possível cadastrar o apoiador. Tente novamente."
          );
        },
      });
    } catch (error) {
      // TODO: Remove after valid test
      Alert.alert("Erro ao cadastrar apoiador", `${JSON.stringify(error)}`);
    }
  };

  return (
    <Wrapper>
      <Content>
        <FieldGroup>
          <Text size="small" type="text" color={"neutralDarkBlue"}>
            Nome
          </Text>
          <Input
            placeholder="Digite o nome do Apoiador"
            value={name}
            onChangeText={setName}
          />
        </FieldGroup>
        <Button
          size="xSmall"
          type="text"
          center
          onPress={() => setContactModalVisible(true)}
        >
          <HighlightedClickText>
            {phone.length > 0
              ? phone
              : "Quero pegar o telefone da minha agenda"}
          </HighlightedClickText>
        </Button>
        <View>
          <NextButton
            size="large"
            type="gradient"
            onPress={handleSubmit}
            endIcon={<IconArrowRight />}
            disabled={isLoading}
          >
            <Text size="small" type="boldTitle">
              {isLoading ? "Enviando..." : "Enviar convite"}
            </Text>
          </NextButton>
          <DescriptionText>
            <HighlightedText>ATENÇÃO:</HighlightedText> Quando você cadastrar
            seu apoiador, ele receberá um convite por WHATSAPP no celular. Com o
            convite ele poderá continua o cadastro de aceitar o seu convite, ok?
          </DescriptionText>
        </View>
      </Content>
      <ContactSelectorModal
        isVisible={contactModalVisible}
        onClose={() => setContactModalVisible(false)}
        onSelect={handleSelectContact}
      />
    </Wrapper>
  );
}
