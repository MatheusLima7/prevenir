import SupportedItem from "@src/atoms/supportedItem";
import {
  Paragraph,
  Row,
  Strong,
  TextContent,
  Title,
  Wrapper,
  LockIcon,
  IconArrowRight,
  CustomButton,
  Header,
  List,
  WrapperButton,
} from "./openSupport.styles";
import { SupportedItemProps } from "./openSupport.types";
import useOpenSupport from "./useOpenSupport";

export default function OpenSupport() {
  const {
    texts,
    title,
    text_button,
    onPress,
    supportedItems,
    disabledButton,
    onChangeSelecteds,
  } = useOpenSupport();

  const renderNewsItem = ({ item }: { item: SupportedItemProps }) => (
    <SupportedItem
      key={item.id}
      {...item}
      onChangeSelecteds={onChangeSelecteds}
      hasButton={true}
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

      <WrapperButton>
        <CustomButton
          disabled={disabledButton}
          onPress={onPress}
          endIcon={<IconArrowRight />}
        >
          {text_button}
        </CustomButton>
      </WrapperButton>
    </Wrapper>
  );
}
