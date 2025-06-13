import React from "react";
import Modal from "react-native-modal";
import {
  Actions,
  CancelButton,
  Container,
  DeleteBackgroundButton,
  DeleteButton,
  HighlightedText,
  Title,
} from "./deleteSupporterModal.styles";
import { DescriptionText } from "@src/screens/mySupporter/introScreen/introScreen.styles";
import Text from "@src/atoms/text";

interface DeleteSupporterModalProps<T extends { name: string }> {
  data: T;
  isVisible: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export const DeleteSupporterModal = <T extends { name: string }>({
  isVisible,
  onClose,
  onDelete,
  data,
}: DeleteSupporterModalProps<T>) => {
  const handleDelete = () => {
    onDelete();
    onClose();
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <Container>
        <Title>Excluir apoiador?</Title>
        <DescriptionText>
          Você tem certeza que deseja deletar este apoio que você tem aqui em
          nosso app?
        </DescriptionText>
        <HighlightedText>{data?.name}</HighlightedText>
        <Actions>
          <CancelButton onPress={onClose}>
            <Text size="xSmall" type="text" center color="gray">
              Cancelar
            </Text>
          </CancelButton>
          <DeleteButton onPress={handleDelete}>
            <DeleteBackgroundButton
              colors={["#EB4824", "#E53E5E"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text size="small" type="boldTitle" color="white">
                Deletar
              </Text>
            </DeleteBackgroundButton>
          </DeleteButton>
        </Actions>
      </Container>
    </Modal>
  );
};
