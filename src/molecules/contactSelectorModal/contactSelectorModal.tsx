import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import Contacts from "react-native-contacts";
import Modal from "react-native-modal";
import {
  Container,
  Item,
  Name,
  Phone,
  Title,
} from "./contactSelectorModal.styles";
import EmptyStatus from "@src/atoms/emptyStatus";

type Contact = {
  recordID: string;
  displayName: string | null;
  phoneNumbers: { number: string }[];
};

interface ContactSelectorModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSelect: (contact: { name: string | null; phoneNumber: string }) => void;
}

export const ContactSelectorModal: React.FC<ContactSelectorModalProps> = ({
  isVisible,
  onClose,
  onSelect,
}) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isVisible) fetchContacts();
  }, [isVisible]);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const permission = await Contacts.requestPermission();
      if (permission === "authorized") {
        const list = await Contacts.getAll();
        const filtered = list.filter((c) => c.phoneNumbers.length > 0);
        setContacts(filtered);
      }
    } catch (err) {
      console.warn("Erro ao buscar contatos:", err);
    }
    setLoading(false);
  };

  const handleSelect = (contact: Contact) => {
    const name = contact.displayName || null;
    const phone = contact.phoneNumbers[0]?.number || "";
    onSelect({ name, phoneNumber: phone });
    onClose();
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <Container>
        <Title>Selecione um contato</Title>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={contacts}
            keyExtractor={(item) => item.recordID}
            renderItem={({ item }) => (
              <Item onPress={() => handleSelect(item)}>
                <Name>{item.displayName}</Name>
                <Phone>{item.phoneNumbers[0]?.number || "Sem número"}</Phone>
              </Item>
            )}
            ListEmptyComponent={
              <EmptyStatus
                title="Sem Contatos"
                description="Adicione contatos em sua lista de contatos"
              />
            }
          />
        )}
      </Container>
    </Modal>
  );
};
