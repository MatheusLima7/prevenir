import EmptyNotification from "@src/atoms/emptyNotification";
import { Container, Wrapper, List } from "./notifications.styles";
import useNotifications from "./useNotifications";
import NewsItem from "@src/atoms/newsItem";
import { NewsItemProp } from "@src/atoms/newsItem/newsItem.types";
import MoreDetails from "@src/atoms/moreDetails";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { useAppDispatch } from "@src/store/hooks";
import { clearNotifications } from "@src/features/notifications/notifications.slice";

export default function Notifications() {
  const { news } = useNotifications();
  const dispatch = useAppDispatch();

  function useResetScreenOnBlur() {
    useFocusEffect(
      useCallback(() => {
        return () => {
          dispatch(clearNotifications());
        };
      }, [clearNotifications])
    );
  }

  useResetScreenOnBlur();

  const renderNewsItem = ({ item }: { item: NewsItemProp }) => (
    <NewsItem key={item.targetId} {...item} />
  );
  return (
    <Wrapper>
      <Container>
        <List
          ListEmptyComponent={<EmptyNotification />}
          ListFooterComponent={<>{news.length > 0 && <MoreDetails />}</>}
          keyExtractor={(item: NewsItemProp) => item.targetId.toString()}
          data={news}
          renderItem={renderNewsItem}
        />
      </Container>
    </Wrapper>
  );
}
