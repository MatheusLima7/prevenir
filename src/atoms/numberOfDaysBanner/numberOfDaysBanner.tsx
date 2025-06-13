import {
  Banner,
  Wrapper,
  Title,
  Subtitle,
  Congratulations,
  Image,
  Content,
  Box,
} from "./numberOfDaysBanner.styles";
import useNumberOfDaysBanner from "./useNumberOfDaysBanner";

export default function NumberOfDaysBanner() {
  const { last_reward, persistence, congratulations } = useNumberOfDaysBanner();
  return (
    <Wrapper>
      <Box>
        <Image />
        <Banner>
          <Content>
            <Title>{last_reward}</Title>
            <Subtitle>{persistence}</Subtitle>
            <Congratulations>{congratulations}</Congratulations>
          </Content>
        </Banner>
      </Box>
    </Wrapper>
  );
}
