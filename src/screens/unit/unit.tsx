import UnitItem from "@src/molecules/unitItem/unitItem";
import useUnit from "./useUnit";
import { ActivityIndicator } from "react-native";
import { Unit as UnitProps } from "@src/features/unit";
import { List, Wrapper } from "./unit.styles";
import EmptyUnit from "@src/atoms/emptyUnit";

export const PAGE_SIZE = 3;
export const WINDOW_SIZE = 5;

export default function Unit() {
  const { loadMoreResults, loadingMore, units, isLoading } = useUnit();

  return (
    <Wrapper>
      <List
        data={units}
        initialNumToRender={PAGE_SIZE}
        ListEmptyComponent={
          isLoading || loadingMore ? <ActivityIndicator /> : <EmptyUnit />
        }
        ListFooterComponent={<>{loadingMore && <ActivityIndicator />}</>}
        maxToRenderPerBatch={PAGE_SIZE}
        onEndReached={loadMoreResults}
        onEndReachedThreshold={0.5}
        windowSize={WINDOW_SIZE}
        keyExtractor={(item: UnitProps) => item.unitId.toString()}
        renderItem={({ item }: { item: UnitProps }) => <UnitItem {...item} />}
      />
    </Wrapper>
  );
}
