import Input from "@src/atoms/input";
import {
  Wrapper,
  Topic,
  TextContent,
  Strong,
  Paragraph,
  ScrollViewContent,
  NextButton,
  IconArrowRight,
} from "./form.styles";
import useForm from "./useForm";
import { TextInput } from "react-native";
import ProviderKeyboard from "@src/atoms/keyboard";
import ProgressBar from "@src/atoms/progressBar";

export default function Form() {
  const { data, inputRefs, setData, next_button, onPress } = useForm();
  const { step, topic, texts, fields } = data;

  return (
    <ProviderKeyboard>
      <Wrapper>
        <ProgressBar step={step} quantity={4} />
        <ScrollViewContent>
          {topic && (
            <Topic>
              {step}. {topic}
            </Topic>
          )}
          {texts.map((paragraph, i: number) => {
            return (
              <TextContent key={i}>
                {paragraph.map((item, index) => {
                  if (item.strong) {
                    return <Strong key={index}>{item.value}</Strong>;
                  }
                  return <Paragraph key={index}>{item.value}</Paragraph>;
                })}
              </TextContent>
            );
          })}

          {fields.map((item, index) => {
            return (
              <Input
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                key={index}
                onSubmitEditing={() => {
                  if (index == 2) {
                    (inputRefs?.current?.[index + 2] as TextInput).focus();
                  } else {
                    (inputRefs?.current?.[index + 1] as TextInput).focus();
                  }
                }}
                onChange={(text: string) =>
                  setData({ text, field: item.field })
                }
                {...item}
              />
            );
          })}
        </ScrollViewContent>
        <NextButton onPress={onPress} endIcon={<IconArrowRight />}>
          {next_button}
        </NextButton>
      </Wrapper>
    </ProviderKeyboard>
  );
}
