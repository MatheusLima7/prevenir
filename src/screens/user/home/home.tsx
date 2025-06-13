import UserAvatar from "@src/atoms/userAvatar";
import {
  Wrapper,
  Welcome,
  ScrollViewContent,
  Message,
  Description,
  Strong,
} from "./home.styles";
import Username from "@src/atoms/username";
import useHome from "./useHome";
import PersistenceBanner from "@src/atoms/persistenceBanner";
import NumberOfDaysBanner from "@src/atoms/numberOfDaysBanner";
import OpportunityBanner from "@src/atoms/opportunityBanner";
import NotificationBadge from "@src/atoms/notificationBadge";
import { useIsFocused } from "@react-navigation/native";

export default function Home() {
  const isFocused = useIsFocused();
  const { welcome, message } = useHome();
  return isFocused ? (
    <Wrapper>
      <ScrollViewContent>
        <NotificationBadge />
        <UserAvatar />
        <Welcome>{welcome}</Welcome>
        <Username sufix={"!"} />
        <PersistenceBanner />
        <NumberOfDaysBanner />
        <OpportunityBanner />
        <Description>
          {message.map((item, index) => {
            if (item?.strong) {
              return <Strong key={index}>{item.text}</Strong>;
            }

            return <Message key={index}>{item.text}</Message>;
          })}
        </Description>
      </ScrollViewContent>
    </Wrapper>
  ) : null;
}
