import Logo from "@src/atoms/logo";
import {
  UpdateButton,
  Wrapper,
  DownloadImage,
  Content,
  Cellphone,
  Row,
  Title,
  Subtitle,
  CustomText,
  Strong,
} from "./updateApp.styles";
import DownloadIcon from "@assets/download.png";
import CellphoneImage from "@assets/cellphone.png";
import useUpdateApp from "./useUpdateApp";

export default function updateAppScreen() {
  const { update_text, onPress, title, subtitle, text, update_now } =
    useUpdateApp();
  return (
    <Wrapper>
      <Logo />

      <Content>
        <Row>
          <Cellphone source={CellphoneImage} />
          <Title>{title}</Title>
        </Row>
        <Subtitle>{subtitle}</Subtitle>
        <CustomText>
          {text}
          <Strong>
            {`"`}
            {update_now}
            {`"`}
          </Strong>
        </CustomText>
      </Content>

      <UpdateButton
        onPress={onPress}
        endIcon={<DownloadImage source={DownloadIcon} />}
      >
        {update_text}
      </UpdateButton>
    </Wrapper>
  );
}
