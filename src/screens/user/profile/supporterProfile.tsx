import Username from "@src/atoms/username";
import {
  Col,
  Data,
  Row,
  Title,
  UserInfo,
  Wrapper,
  Answer,
  CustomButton,
  IconArrowRight,
  TextButton,
  ScrollViewContent,
  GrandientEditImage,
  EditButton,
  Camera,
  SupporterAvatar,
} from "./profile.styles";
import UserAge from "@src/atoms/userAge";
import Address from "@src/atoms/address";
import { UserProfileProps } from "./profile.types";
import useSupporterProfile from "./useSupporterProfile";
import SupporterAvatarImage from "@src/atoms/supporterAvatarImage";

export default function SupporterProfile({
  gender,
  gender_answer,
  onPress,
  edit_button,
  onDeletePress,
  delete_account,
  onEditAvatar,
  currentImage,
}: UserProfileProps) {
  const { forever, age_text } = useSupporterProfile();

  return (
    <Wrapper>
      <ScrollViewContent>
        <Data>
          <Row>
            <SupporterAvatar>
              <SupporterAvatarImage type="big" currentImage={currentImage} />
              <EditButton onPress={onEditAvatar}>
                <GrandientEditImage>
                  <Camera />
                </GrandientEditImage>
              </EditButton>
            </SupporterAvatar>
          </Row>
          <Row>
            <UserInfo>
              <Username size={"medium"} />
            </UserInfo>
          </Row>
          <Row>
            <Address />
          </Row>

          <Row>
            <Col>
              <Title>{age_text}</Title>
              <Answer>
                <UserAge color="xDarkGray" />
              </Answer>
            </Col>
            <Col>
              <Title>{gender}</Title>
              <Answer>{gender_answer}</Answer>
            </Col>
          </Row>
        </Data>

        <CustomButton onPress={onPress} endIcon={<IconArrowRight />}>
          {edit_button}
        </CustomButton>
        <TextButton onPress={onDeletePress}>
          {delete_account} {forever}
        </TextButton>
      </ScrollViewContent>
    </Wrapper>
  );
}
