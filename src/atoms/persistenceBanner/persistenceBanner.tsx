import {
  Banner,
  Wrapper,
  Title,
  Subtitle,
  Congratulations,
  Image,
  Content,
  TrophyBG,
} from "./persistenceBanner.styles";
import usePersistenceBanner from "./usePersistenceBanner";

export default function PersistenceBanner() {
  const {
    last_reward,
    persistence,
    congratulations,
    persevered,
    no_prize,
    dont_worry,
    onPress,
  } = usePersistenceBanner();
  return (
    <Wrapper>
      <Banner>
        <TrophyBG>
          <Image />
        </TrophyBG>
        <Content onPress={onPress}>
          {persevered ? (
            <>
              <Title>{last_reward}</Title>
              <Subtitle>{persistence}</Subtitle>
              <Congratulations>{congratulations}</Congratulations>
            </>
          ) : (
            <>
              <Title>{no_prize}</Title>
              <Congratulations>{dont_worry}</Congratulations>
            </>
          )}
        </Content>
      </Banner>
    </Wrapper>
  );
}
