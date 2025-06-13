import MessageItem from "@src/atoms/messageItem";
import {
  Options,
  Wrapper,
  Messages,
  ScrollViewContent,
} from "./periodicQuestionnaire.styles";
import { MessageItemProps } from "@src/atoms/messageItem/messageItem.types";
import usePeriodicQuestionnaire from "./usePeriodicQuestionnaire";
import Select from "@src/atoms/select";
import { ActivityIndicator } from "react-native";

export default function PeriodicQuestionnaire() {
  const { messages, onPress, loading, isFinished } = usePeriodicQuestionnaire();

  return (
    <Wrapper>
      <ScrollViewContent>
        <Messages>
          {messages.map((item: MessageItemProps, index: number) => {
            return (
              <MessageItem
                isRobot={item.isRobot}
                key={index}
                message={item.message}
                image={item.image}
              />
            );
          })}
          {loading && <ActivityIndicator />}
        </Messages>
        <Options>
          <Select onPress={onPress} loading={loading} isFinished={isFinished} />
        </Options>
      </ScrollViewContent>
    </Wrapper>
  );
}
