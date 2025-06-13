import { Feed } from "@src/features/feed";
import {
  Description,
  Image,
  Title,
  Wrapper,
  Date,
  Content,
  Footer,
  DetailsButton,
  CustomIcon,
  Shadow,
  Card,
} from "./feedItem.styles";
import useFeedItem from "./useFeedItem";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import ShadowPng from "@assets/shadow.png";
import { ImageErrorEventData, NativeSyntheticEvent } from "react-native";

export default function FeedItem({
  publicationDate,
  title,
  description,
  images,
  feedId,
}: Feed) {
  const { see_details, onPress } = useFeedItem();

  const imageUri = images[0];
  const sanitizedDescription = description
    .trim()
    .replace(/\s+$/, "")
    .replace(/\n+/g, " ");

  return (
    <Wrapper>
      <Card>
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            onError={(e: NativeSyntheticEvent<ImageErrorEventData>) => {
              console.log(e?.nativeEvent);
            }}
          />
        )}
        <Content>
          <Title>{title}</Title>
          <Description>{sanitizedDescription}</Description>
          <Footer>
            <Date>{dayjs(publicationDate).format("DD/MM/YYYY")}</Date>
            <DetailsButton
              onPress={() => onPress(feedId)}
              endIcon={<CustomIcon />}
            >
              {see_details}
            </DetailsButton>
          </Footer>
        </Content>
      </Card>
      <Shadow source={ShadowPng} resizeMode="stretch" />
    </Wrapper>
  );
}
