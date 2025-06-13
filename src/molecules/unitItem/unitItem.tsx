import { Unit } from "@src/features/unit";
import {
  Description,
  Image,
  Title,
  Wrapper,
  Content,
  BoldText,
  Card,
  Shadow,
} from "./unitItem.styles";
import useUnitItem from "./useUnitItem";

import ShadowPng from "@assets/shadow.png";

export default function UnitItem({ photo, name, address, email, phone }: Unit) {
  const { EMAIL, PHONE } = useUnitItem();
  return (
    <Wrapper>
      <Card>
        <Image source={{ uri: photo }} />
        <Content>
          <Title>{name}</Title>
          <Description>{address}</Description>
          <Description>
            <BoldText>{EMAIL}</BoldText> {email}
          </Description>
          <Description>
            <BoldText>{PHONE}</BoldText> {phone}
          </Description>
        </Content>
      </Card>
      <Shadow source={ShadowPng} resizeMode="stretch" />
    </Wrapper>
  );
}
