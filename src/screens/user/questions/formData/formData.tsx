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
  ContentError,
} from "./formData.styles";
import useForm from "./useFormData";
import ProviderKeyboard from "@src/atoms/keyboard";
import ProgressBar from "@src/atoms/progressBar";
import Error from "@src/atoms/error";

export default function FormDataScreen() {
  const {
    data,
    inputRefs,
    onChange,
    next_button,
    onPress,
    onSubmitEditing,
    errors,
    onErrorPress,
  } = useForm();
  const { step, topic, texts, fields } = data;

  return (
    <ProviderKeyboard>
      <Wrapper>
        <ProgressBar step={step} quantity={5} />
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
                onSubmitEditing={() => onSubmitEditing(index)}
                onChange={(text: string) => onChange(text, item.field)}
                {...item}
              />
            );
          })}
        </ScrollViewContent>
        <NextButton onPress={onPress} endIcon={<IconArrowRight />}>
          {next_button}
        </NextButton>
      </Wrapper>
      <ContentError>
        {errors.map((error, index) => (
          <Error
            key={"error-" + index}
            title={error.title}
            text={error.text}
            onPress={() => onErrorPress(index)}
          />
        ))}
      </ContentError>
    </ProviderKeyboard>
  );
}
