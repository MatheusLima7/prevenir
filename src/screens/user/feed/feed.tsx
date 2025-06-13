import FeedItem from "@src/molecules/feedItem/feedItem";
import { List, Wrapper } from "./feed.styles";
import useFeed, { PAGE_SIZE } from "./useFeed";
import EmptyStatus from "@src/atoms/emptyStatus";
import { ActivityIndicator } from "react-native";
import { Feed as FeedProps } from "@src/features/feed";
import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

export const WINDOW_SIZE = 12;

export default function Feed() {
  const { loadMoreResults, loadingMore, feeds, isLoading, refetch } = useFeed();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [])
  );

  return (
    <Wrapper>
      <List
        data={feeds}
        initialNumToRender={PAGE_SIZE}
        refreshing={isLoading || loadingMore}
        ListEmptyComponent={
          isLoading || loadingMore ? (
            <ActivityIndicator />
          ) : (
            <EmptyStatus
              description="Tente novamente mais tarde"
              title="Sem Feed"
            />
          )
        }
        ListFooterComponent={<>{loadingMore && <ActivityIndicator />}</>}
        maxToRenderPerBatch={PAGE_SIZE}
        onEndReached={loadMoreResults}
        onEndReachedThreshold={0.5}
        windowSize={WINDOW_SIZE}
        keyExtractor={(item: FeedProps) => item?.feedId}
        renderItem={({ item }: { item: FeedProps }) => <FeedItem {...item} />}
      />
    </Wrapper>
  );
}
