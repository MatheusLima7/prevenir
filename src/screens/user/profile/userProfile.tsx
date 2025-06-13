import Username from "@src/atoms/username";
import {
  Col,
  Data,
  Row,
  Separator,
  Title,
  UserInfo,
  Wrapper,
  Answer,
  CustomButton,
  IconArrowRight,
  TextButton,
  ScrollViewContent,
  Avatar,
  GrandientEditImage,
  EditButton,
  Camera,
  Header,
} from "./profile.styles";
import UserAvatar from "@src/atoms/userAvatar";
import UserAge from "@src/atoms/userAge";
import Address from "@src/atoms/address";
import UserSurname from "@src/atoms/userSurname";
import { UserProfileProps } from "./profile.types";

export default function UserProfile({
  surname,
  gender,
  unit,
  triggers,
  registered,
  gender_answer,
  trigers_items,
  onPress,
  onLocalPress,
  edit_button,
  locals,
  labelCount,
  onDeletePress,
  delete_account,
  onEditAvatar,
  currentImage,
}: UserProfileProps) {
  return (
    <Wrapper>
      <ScrollViewContent>
        <Header>
          <Avatar>
            <UserAvatar currentImage={currentImage} />
            <EditButton onPress={onEditAvatar}>
              <GrandientEditImage>
                <Camera />
              </GrandientEditImage>
            </EditButton>
          </Avatar>
          <Data>
            <Row>
              <UserInfo>
                <Username size={"xMedium"} />
                <Separator> - </Separator>
                <UserAge />
              </UserInfo>
            </Row>
            <Row>
              <UserInfo>
                <Title>{surname}</Title>
                <UserSurname />
              </UserInfo>
            </Row>
            <Row>
              <Address />
            </Row>
          </Data>
        </Header>
        <Row>
          <Col>
            <Title>{gender}</Title>
            <Answer>{gender_answer}</Answer>
          </Col>
          <Col>
            <Title>{unit}</Title>
            <Answer>{registered}</Answer>
          </Col>
        </Row>
        <Row>
          <Col>
            <Title>{triggers}</Title>
            {trigers_items.map((trigger: string, index: number) => (
              <Answer key={index}>
                {index + 1}. {trigger}
              </Answer>
            ))}
          </Col>
        </Row>

        <CustomButton onPress={onPress} endIcon={<IconArrowRight />}>
          {edit_button}
        </CustomButton>
        <CustomButton onPress={onLocalPress} endIcon={<IconArrowRight />}>
          {locals} {labelCount}
        </CustomButton>
        <TextButton onPress={onDeletePress}>{delete_account}</TextButton>
      </ScrollViewContent>
    </Wrapper>
  );
}
