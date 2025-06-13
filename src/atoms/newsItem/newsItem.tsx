import { convertAmericanDateToBrazilDate } from "@src/utils/date";
import {
  Wrapper,
  Title,
  Description,
  Content,
  Date,
  Row,
} from "./newsItem.styles";
import { NewsItemProp } from "./newsItem.types";
import useNewsItem from "./useNewsItem";

export default function NewsItem({
  title,
  body,
  notificationType,
  publicationDate,
  color,
  targetId,
  readed,
}: NewsItemProp) {
  const { getImage, hasDate, hasImageInLeft, onPress } =
    useNewsItem(notificationType);

  return (
    <Wrapper
      onPress={() => onPress(targetId)}
      type={notificationType}
      color={color.toLowerCase()}
      readed={readed}
    >
      {hasImageInLeft && getImage()}
      <Content>
        <Row>
          <Title type={notificationType}>{title}</Title>
          {hasDate && (
            <Date>{convertAmericanDateToBrazilDate(publicationDate)}</Date>
          )}
        </Row>
        <Description type={notificationType}>{body}</Description>
      </Content>
      {!hasImageInLeft && getImage()}
    </Wrapper>
  );
}
