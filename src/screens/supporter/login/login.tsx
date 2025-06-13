import Logo from "@src/atoms/logo";
import { Wrapper, Content, Body, CustomButton } from "./login.styles";
import useLogin from "./useLogin";
import useNeedToHelp from "./useNeedToHelp";
import useReceivedInvite from "./useReceivedInvite";
import useWelcome from "./useWelcome";
import Welcome from "@src/molecules/welcome";
import NeedToHelp from "@src/atoms/needToHelp";
import ReceivedInvite from "@src/molecules/receivedInvite";
import LogoStateGovernment from "@src/atoms/logoStateGovernment";
import Icon from "@react-native-vector-icons/fontawesome6";

export default function LoginScreen() {
  const { title, text } = useWelcome();
  const { onLogInPress, text_button } = useLogin();
  const { need_to_help, press_here } = useNeedToHelp();
  const { are_you_being_monitored, log_in, onReceivedInvitePress } =
    useReceivedInvite();

  return (
    <Wrapper>
      <Content>
        <Logo />

        <Body>
          <Welcome title={title} text={text} />

          <CustomButton
            endIcon={
              <Icon
                name="chevron-right"
                size={20}
                color="#fff"
                iconStyle="solid"
              />
            }
            onPress={onLogInPress}
          >
            {text_button}
          </CustomButton>

          <NeedToHelp title={need_to_help} subtitle={press_here} />

          <ReceivedInvite
            title={are_you_being_monitored}
            subtitle={log_in}
            onPress={onReceivedInvitePress}
          />
        </Body>

        <LogoStateGovernment />
      </Content>
    </Wrapper>
  );
}
