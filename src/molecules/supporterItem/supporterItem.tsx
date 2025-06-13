import {
  Wrapper,
  Content,
  Shadow,
  Card,
  PhoneNumber,
  Status,
  Name,
  HighlightedText,
  Actions,
  ClickableIcon,
  Image,
  PhoneNumberContent,
} from "./supporterItem.styles";
import ShadowPng from "@assets/shadow.png";
import TrashIcon from "@assets/trash.png";
import PhoneFill from "@assets/phone-fill.png";
import useSupporterItem from "./useSupporterItem";
import { useState } from "react";
import { DeleteSupporterModal } from "../deleteSupporterModal/deleteSupporterModal";
import { Supporter } from "@src/screens/mySupporter/mySupporter.types";

export default function SupporterItem({
  id,
  mentorName: name,
  mentorPhoneNumber: phone,
  status,
}: Supporter) {
  const { onDelete } = useSupporterItem();

  const [contactModalVisible, setContactModalVisible] = useState(false);

  const normalizedStatus = () => {
    switch (status) {
      case "REQUESTED":
        return "Convite enviado";

      case "ACTING":
        return "Convite aceito";

      default:
        break;
    }
  };

  return (
    <Wrapper>
      <Card>
        <Content>
          <Name>{name}</Name>
          <PhoneNumberContent>
            <Image source={PhoneFill} />
            <PhoneNumber>{phone}</PhoneNumber>
          </PhoneNumberContent>
          <Status>
            <HighlightedText>Status: </HighlightedText>
            {normalizedStatus()}
          </Status>
        </Content>
        <Actions>
          <ClickableIcon onPress={() => setContactModalVisible(true)}>
            <Image source={TrashIcon} />
          </ClickableIcon>
        </Actions>
      </Card>
      <Shadow source={ShadowPng} resizeMode="stretch" />
      <DeleteSupporterModal
        data={{ name }}
        isVisible={contactModalVisible}
        onClose={() => setContactModalVisible(false)}
        onDelete={() => onDelete(id)}
      />
    </Wrapper>
  );
}
