import {
  ScrollViewContent,
  Topic,
  Wrapper,
  Question,
  NextButton,
  IconArrowRight,
  Option,
  ContentError,
} from "./formQuestions.styles";
import ProgressBar from "@src/atoms/progressBar";
import Checkbox from "@src/atoms/input/checkbox";
import { OptionProps, StepContentProps } from "./formQuestions.types";
import DescriptionInput from "@src/atoms/input/descriptionInput";
import useFormQuestions from "./useFormQuestions";
import { QuestionProps } from "@src/features/form/types";
import Error from "@src/atoms/error";

export default function StepContent({ step, index }: StepContentProps) {
  const {
    next_button,
    onNextPress,
    form,
    setOthersOption,
    onChange,
    countSteps,
    errors,
    onErrorPress,
  } = useFormQuestions(step);

  return (
    <Wrapper key={index}>
      <ProgressBar step={index + 1} quantity={countSteps} />
      <ScrollViewContent>
        {step.questions?.map((item: QuestionProps, i) => {
          const { id: num } = item;
          return (
            <Question key={item?.title + i}>
              <Topic>
                {item?.orderView}) {item?.title}
              </Topic>
              {item.answers.map((answer: OptionProps, i: number) => {
                const getDescriptionComponent = () => (
                  <DescriptionInput
                    disabled={
                      !form[num]?.some(
                        (item: string) => item == answer.answerId.toString()
                      )
                    }
                    onChange={(text: string) => setOthersOption(text, num)}
                  />
                );
                return (
                  <Option key={i}>
                    <Checkbox
                      testID={`${answer.title}-${i}`}
                      label={answer.title}
                      onChange={(val: boolean) =>
                        onChange({
                          val,
                          option: answer,
                          num,
                        })
                      }
                    />
                    {answer.orderView === 99 && getDescriptionComponent()}
                  </Option>
                );
              })}
            </Question>
          );
        })}

        <NextButton onPress={onNextPress} endIcon={<IconArrowRight />}>
          {next_button}
        </NextButton>
      </ScrollViewContent>

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
    </Wrapper>
  );
}
