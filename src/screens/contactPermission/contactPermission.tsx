import {
  RequestPermissionsButton,
  Wrapper,
  Content,
  Alert,
  Title,
  Strong,
  Paragraph,
  TextContent,
  SkipButton,
  Footer,
} from "./permissions.styles";
import Logo from "@src/atoms/logo";
import usePermissions from "./usePermissions";
import Icon from "@react-native-vector-icons/evil-icons";
import AlertImage from "@assets/alert.png";
import { TextItemProps } from "./permissions.types";

export default function ContactPermissionsScreen() {
  const {
    onPress,
    request_permissions,
    skip_request_permissions,
    title,
    text,
    onSkipPress,
  } = usePermissions();

  return (
    <Wrapper>
      <Logo />

      <Content>
        <Alert source={AlertImage} />
        <Title>{title}</Title>
        <TextContent>
          {text.map((item: TextItemProps, index: number) => {
            if (item.permission) {
              return <Strong key={index}>{item.text}</Strong>;
            }
            return <Paragraph key={index}>{item.text}</Paragraph>;
          })}
        </TextContent>
      </Content>

      <Footer>
        <RequestPermissionsButton
          onPress={onPress}
          endIcon={<Icon name="like" size={40} color="#fff" />}
        >
          {request_permissions}
        </RequestPermissionsButton>

        <SkipButton onPress={onSkipPress}>
          {skip_request_permissions}
        </SkipButton>
      </Footer>
    </Wrapper>
  );
}
