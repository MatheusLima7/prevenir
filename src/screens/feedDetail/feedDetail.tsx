import Feed from "@src/molecules/feedDetail";
import { Wrapper } from "./feedDetail.styles";
import useFeedDetail from "./useFeedDetail";
import { ScrollView } from "react-native";
import { CommonProps } from "@src/stacks/types";

export default function FeedDetail({
  route,
}: {
  route?: { params: CommonProps };
}) {
  const { data, isLoading } = useFeedDetail(route?.params?.code as string);

  return (
    <ScrollView
      keyboardShouldPersistTaps={"always"}
      showsVerticalScrollIndicator
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Wrapper>
        <Feed isLoading={isLoading} {...data} />
      </Wrapper>
    </ScrollView>
  );
}
