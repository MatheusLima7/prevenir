import {
  Intro,
  Mission,
  Resources,
  Title,
  Wrapper,
  MissionText as Text,
  Content,
  ListItem,
  Developer,
  Row,
  ScrollViewContent,
  Image,
} from "./aboutApp.styles";
import useAboutApp from "./useAboutApp";

export default function AboutApp() {
  const { title, intro, mission, text, resources, features, developer } =
    useAboutApp();
  return (
    <Wrapper>
      <Content>
        <ScrollViewContent>
          <Title>{title}</Title>
          <Intro>{intro}</Intro>
          <Mission>{mission}</Mission>
          <Text>{text}</Text>
          <Resources>{resources}</Resources>
          {features.map((item, index) => (
            <ListItem key={index}>
              {`●  `}
              {item}
            </ListItem>
          ))}
        </ScrollViewContent>
      </Content>
      <Row>
        <Developer>{developer}</Developer>
        <Image />
      </Row>
    </Wrapper>
  );
}
