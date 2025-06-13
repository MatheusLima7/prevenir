import {
  Banner,
  Wrapper,
  Title,
  Subtitle,
  Image,
  Content,
  And,
} from "./opportunityBanner.styles";
import useOpportunityBanner from "./useOpportunityBanner";

export default function OpportunityBanner() {
  const { title, opportunity, onPress, and } = useOpportunityBanner();
  return (
    <Wrapper onPress={onPress}>
      <Banner>
        <Content>
          <Title>{title}</Title>
          <Subtitle>
            <And>{`${and} `}</And>
            {opportunity}
          </Subtitle>
        </Content>
        <Image />
      </Banner>
    </Wrapper>
  );
}
