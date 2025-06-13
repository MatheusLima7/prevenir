import { ActivityIndicator } from "react-native";
import { List, Wrapper } from "./supportedList.styles";
import EmptyStatus from "@src/atoms/emptyStatus";
import useSupportedList from "./useSupportedList";
import SupporterItem from "@src/molecules/supporterItem";
import { Supporter } from "@src/screens/mySupporter/mySupporter.types";

export default function SupportedListScreen() {
  const { isLoading, supporteds } = useSupportedList();

  return (
    <Wrapper>
      <List
        data={supporteds}
        refreshing={isLoading}
        ListEmptyComponent={
          isLoading ? (
            <ActivityIndicator />
          ) : (
            <EmptyStatus
              description="Tente novamente mais tarde"
              title="Sem Apoiados"
            />
          )
        }
        keyExtractor={(item: Supporter) => item?.mentorId}
        renderItem={({ item }: { item: Supporter }) => (
          <SupporterItem key={item.id} {...item} />
        )}
      />
    </Wrapper>
  );
}
