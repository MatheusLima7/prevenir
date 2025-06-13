import {
  Wrapper,
  Welcome,
  ScrollViewContent,
  Message,
  Description,
  IconArrowRight,
  HistoryButton,
  Header,
  CustomUser,
} from "./home.styles";
import Username from "@src/atoms/username";
import useHome from "./useHome";
import OpportunityBanner from "@src/atoms/opportunityBanner";
import NotificationBadge from "@src/atoms/notificationBadge";
import SupporterAvatarImage from "@src/atoms/supporterAvatarImage";
import { useIsFocused } from "@react-navigation/native";
import UserAvatar from "@assets/user.jpg";
import { ImageSourcePropType } from "react-native";

export default function Home() {
  const { welcome, message, text_button, onPress, name, currentImage } =
    useHome();
  const isFocused = useIsFocused();
  return isFocused ? (
    <Wrapper>
      <ScrollViewContent>
        <Header>
          <NotificationBadge />
          <SupporterAvatarImage type="small" currentImage={currentImage} />
          <CustomUser image={UserAvatar as ImageSourcePropType} />
        </Header>
        <Welcome>{welcome}</Welcome>
        <Username />
        <HistoryButton onPress={onPress} endIcon={<IconArrowRight />}>
          {text_button} {name}
        </HistoryButton>
        <OpportunityBanner />
        <Description>
          {message.map((item, index) => {
            return <Message key={index}>{item.text}</Message>;
          })}
        </Description>
      </ScrollViewContent>
    </Wrapper>
  ) : null;
}
