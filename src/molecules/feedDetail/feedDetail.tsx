import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import capitalize from "lodash.capitalize";
import {
  Image,
  Title,
  Wrapper,
  Content,
  Card,
  Shadow,
  HighlightedText,
  BodyText,
} from "./feedDetail.styles";
import useFeedDetail from "./useFeedDetail";

import ShadowPng from "@assets/shadow.png";
import { NormalizedFeedDetailData } from "@src/features/feed";
import { ActivityIndicator } from "react-native";
import EmptyStatus from "@src/atoms/emptyStatus";
import emptyStatusConstants from "@src/atoms/emptyStatus/emptyStatus.constants";

dayjs.locale("pt-br");

export default function FeedDetail({
  isLoading = true,
  ...data
}: Partial<NormalizedFeedDetailData & { isLoading: boolean }>) {
  const { MORE_INFO, MORE_INFO_DESCRIPTION } = useFeedDetail();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (!data || Object.keys(data).length === 0) {
    const { POSTS } = emptyStatusConstants;
    return <EmptyStatus {...POSTS} />;
  }

  const { description, images, publicationDate, title, userName, userNumbers } =
    data;
  const renderImages = () =>
    (images || []).length > 0 &&
    images?.map((image, idx) => <Image key={idx} source={{ uri: image }} />);

  return (
    <Wrapper>
      <Card>
        {renderImages()}
        <Content>
          <Title>{title}</Title>
          <HighlightedText
            fontSize={12}
            lineHeight={30}
            style={{ textAlign: "center", marginBottom: 10 }}
          >
            {publicationDate &&
              `${dayjs(publicationDate).format("DD/MM/YYYY")} - ${capitalize(dayjs(publicationDate).format("dddd"))}`}
          </HighlightedText>
          <BodyText fontSize={12} style={{ marginBottom: 9 }}>
            {description}
          </BodyText>
          {userNumbers && userName && (
            <>
              <HighlightedText
                fontSize={16}
                lineHeight={30}
                style={{ marginBottom: 9 }}
              >
                {MORE_INFO}
              </HighlightedText>
              <BodyText style={{ marginBottom: 16 }}>
                {MORE_INFO_DESCRIPTION}
              </BodyText>
              <HighlightedText fontSize={12} lineHeight={14}>
                {`${userNumbers?.toString()?.replace(",", " | ")} - ${userName}`}
              </HighlightedText>
            </>
          )}
        </Content>
      </Card>
      <Shadow source={ShadowPng} resizeMode="stretch" />
    </Wrapper>
  );
}
