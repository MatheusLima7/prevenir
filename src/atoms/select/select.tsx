import Option from "./option";
import { Wrapper, Title, ButtonOk, IconArrowRight } from "./select.styles";
import useSelect from "./useSelect";
import { SelectProps } from "./select.types";

export default function Select({ onPress, loading, isFinished }: SelectProps) {
  const {
    choose,
    options,
    onPressOption,
    isFinishedQuestions,
    finished_answers,
    isLoading,
    onFinish,
  } = useSelect({
    onPress,
  });

  return (
    <Wrapper>
      {!loading && !isLoading && (
        <>
          {!isFinishedQuestions && <Title>{choose}</Title>}
          {isFinished && isFinishedQuestions ? (
            <ButtonOk onPress={onFinish} endIcon={<IconArrowRight />}>
              {finished_answers}
            </ButtonOk>
          ) : (
            <>
              {options.map((option, index) => (
                <Option
                  key={index}
                  text={option.text}
                  value={option.value}
                  onPressOption={onPressOption}
                />
              ))}
            </>
          )}
        </>
      )}
    </Wrapper>
  );
}
