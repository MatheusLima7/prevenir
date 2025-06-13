import FeedItem from "@src/molecules/feedItem/feedItem";
import { List, Wrapper } from "./feed.styles";
import useFeed from "./useFeed";
import { FeedItemProps } from "@src/molecules/feedItem/feedItem.types";

export default function Feed() {
  const { items } = useFeed();

  return (
    <Wrapper>
      <List
        data={items}
        ListEmptyComponent={null}
        renderItem={({
          item,
          index,
        }: {
          item: FeedItemProps;
          index: number;
        }) => (
          <FeedItem
            key={index}
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            date={item.date}
          />
        )}
      />
    </Wrapper>
  );
}
