import { SupportedItemProps } from "@src/screens/openSupport/openSupport.types";
import {
  Row,
  Name,
  Phone,
  Wrapper,
  CustomNegativeButton,
  Col,
  ContentButton,
  CustomButton,
  PhoneIcon,
} from "./supportedItem.styles";
import useSupportedItem from "./useSupportedItem";
import Card from "../card";
import Icon from "@react-native-vector-icons/fontawesome6";

export default function SupportedItem({
  name,
  id,
  phone,
  value,
  hasButton,
  onChangeSelecteds,
}: SupportedItemProps) {
  const {
    text_button_yes,
    text_button_no,
    onPositivePress,
    onNegativePress,
    onPress,
  } = useSupportedItem({ onChangeSelecteds, hasButton });

  return (
    <Wrapper onPress={onPress}>
      <Card isFull={true}>
        <Row>
          <Col>
            <Name>{name}</Name>
            <Row>
              <PhoneIcon />
              <Phone>{phone}</Phone>
            </Row>
          </Col>
          {hasButton && (
            <>
              <ContentButton>
                <CustomNegativeButton
                  onPress={() => onNegativePress(id, name, phone)}
                  endIcon={
                    value == "não" && (
                      <Icon
                        iconStyle="solid"
                        name="check"
                        size={18}
                        color="white"
                      />
                    )
                  }
                >
                  {text_button_no}
                </CustomNegativeButton>
              </ContentButton>
              <ContentButton>
                <CustomButton
                  onPress={() => onPositivePress(id, name, phone)}
                  endIcon={
                    value == "sim" && (
                      <Icon
                        iconStyle="solid"
                        name="check"
                        size={18}
                        color="white"
                      />
                    )
                  }
                >
                  {text_button_yes}
                </CustomButton>
              </ContentButton>
            </>
          )}
        </Row>
      </Card>
    </Wrapper>
  );
}
