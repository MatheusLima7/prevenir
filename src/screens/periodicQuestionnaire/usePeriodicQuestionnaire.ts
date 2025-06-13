import messageItemConstants from "@src/atoms/messageItem/messageItem.constants";
import { MessageItemProps } from "@src/atoms/messageItem/messageItem.types";
import { useCallback, useEffect, useState } from "react";
import AvatarImage from "@assets/avatar-imagem.png";
import { SelectedOption } from "@src/atoms/select/option.types";
import { NextMessageProps } from "./periodicQuestionnaire.types";

export default () => {
  const [messages, setMessages] = useState<MessageItemProps[]>([]);
  const [loading, setLoading] = useState(false);

  const { messages: msgs, image } = messageItemConstants;

  useEffect(() => {
    const init = () => {
      setLoading(true);

      setTimeout(() => {
        const temp: MessageItemProps[] = [...messages];
        temp.push({
          message: msgs[0],
          image,
          isRobot: true,
        });
        setMessages(temp);
        setLoading(false);
      }, 2000);
    };

    init();
  }, []);

  const nextMessage = useCallback(
    ({ msg, img, isRobot }: NextMessageProps) => {
      setLoading(true);
      setTimeout(() => {
        const newMessages = [...messages];
        newMessages.push({
          message: msg,
          image: img,
          isRobot: isRobot,
        });
        setMessages(newMessages);
        setLoading(false);
      }, 2000);
    },
    [messages]
  );

  const callback = () => {
    if (messages.length != msgs.length) {
      const robotMessages = messages.filter((item) => item.isRobot).length;
      setTimeout(() => {
        nextMessage({ msg: msgs[robotMessages], img: image, isRobot: true });
      }, 500);
    }
  };

  const onPress = (selected: SelectedOption) => {
    nextMessage({ msg: selected.text, img: AvatarImage, isRobot: false });
  };

  useEffect(() => {
    if (!messages[messages.length - 1]?.isRobot) {
      callback();
    }
  }, [messages]);

  return {
    messages,
    onPress,
    loading,
    isFinished:
      messages?.[messages?.length - 1]?.message ===
      "Muito obrigado. Terminamos por hoje!",
  };
};
