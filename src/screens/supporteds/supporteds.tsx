import SupportedItem from "@src/atoms/supportedItem";
import {
  Paragraph,
  Row,
  Strong,
  TextContent,
  Title,
  Wrapper,
  LockIcon,
  Header,
  List,
} from "./supporteds.styles";
import { SupportedItemProps } from "./supporteds.types";
import useOpenSupport from "./useSupporteds";

export default function Supporteds() {
  const { texts, title, supportedItems, onChangeSelecteds } = useOpenSupport();

  const renderNewsItem = ({ item }: { item: SupportedItemProps }) => (
    <SupportedItem
      key={item.id}
      {...item}
      onChangeSelecteds={onChangeSelecteds}
      hasButton={false}
    />
  );

  return (
    <Wrapper>
      <Header>
        <Row>
          <LockIcon />
          <Title>{title}</Title>
        </Row>

        {texts.map((paragraph, i) => {
          return (
            <TextContent key={i}>
              {paragraph.map((item, index) => {
                if (item.strong) {
                  return <Strong key={index}>{item.text}</Strong>;
                }
                return <Paragraph key={index}>{item.text}</Paragraph>;
              })}
            </TextContent>
          );
        })}
      </Header>

      <List
        keyExtractor={(item: SupportedItemProps) => item.id}
        data={supportedItems}
        renderItem={renderNewsItem}
      />
    </Wrapper>
  );
}
