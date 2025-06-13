import Card from "@src/atoms/card";
import { Wrapper } from "./frequentlyAskedQuestions.styles";
import ToggleItem from "@src/atoms/toggleItem";
import useFrequentlyAskedQuestions from "./useFrequentlyAskedQuestions";
import { ActivityIndicator } from "react-native";

export default function FrequentlyAskedQuestions() {
  const { items, isLoading } = useFrequentlyAskedQuestions();

  return (
    <Wrapper>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Card>
          {items.map((item, index) => (
            <ToggleItem
              lastItem={index === items.length - 1}
              key={index}
              question={item.question}
            >
              {item.asnwer}
            </ToggleItem>
          ))}
        </Card>
      )}
    </Wrapper>
  );
}
