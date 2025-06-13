import { useRootNavigation } from "@src/stacks";
import routes from "@src/stacks/routes";
import {
  Content,
  DescriptionText,
  HighlightedText,
  List,
  NextButton,
  Wrapper,
} from "./supportersListScreen.styles";
import { IconArrowRight } from "@src/screens/tellYourHistory/tellYourHistory.styles";
import Text from "@src/atoms/text";
import { ActivityIndicator } from "react-native";
import EmptyStatus from "@src/atoms/emptyStatus";
import SupporterItem from "@src/molecules/supporterItem";
import { EmotionalResponse, Supporter } from "../mySupporter.types";
import useListSupporters from "../hooks/useListSupporters";
export default function SupportersListScreen() {
  const { navigate } = useRootNavigation();
  const { data, isLoading } = useListSupporters({
    start: 0,
    size: 10,
  });

  return (
    <Wrapper>
      <Content>
        <List
          data={data?.data}
          refreshing={isLoading}
          ListEmptyComponent={
            isLoading ? (
              <ActivityIndicator />
            ) : (
              <EmptyStatus
                description="Tente novamente mais tarde"
                title="Sem Apoiadores"
              />
            )
          }
          ListFooterComponent={
            <>
              {(data?.data || []).length > 1 && (
                <DescriptionText>
                  * Você chegou ao seu limite de apoiadores. (2 pessoas) Se
                  quiser cadastrar outro{" "}
                  <HighlightedText>você deverá excluir</HighlightedText> um dos
                  apoiadores para que você possa adicionar o novo.
                </DescriptionText>
              )}
            </>
          }
          keyExtractor={(item: Supporter) => item?.mentorId}
          renderItem={({ item }: { item: Supporter }) => (
            <SupporterItem key={item.id} {...item} />
          )}
        />
        {(!isLoading ||
          (data as unknown as EmotionalResponse)?.data.length < 2) && (
          <NextButton
            size="large"
            type="gradient"
            onPress={() => navigate(routes.MY_SUPPORTER_ADD_SUPPORTER)}
            endIcon={<IconArrowRight />}
            disabled={isLoading}
          >
            <Text size="small" type="boldTitle">
              Cadastrar novo apoiador
            </Text>
          </NextButton>
        )}
      </Content>
    </Wrapper>
  );
}
