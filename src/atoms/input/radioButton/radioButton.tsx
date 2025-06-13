import { RadioComponent, Wrapper, Label, Selected } from "./radioButton.styles";
import { RadioButtonProps } from "./radioButton.types";
import useRadioButton from "./useRadioButton";

export default function RadioButton(props: RadioButtonProps) {
  const { selected, onPress, items } = useRadioButton(props);

  return (
    <>
      {items.map((item, index) => (
        <Wrapper key={index} onPress={() => onPress(item.value)}>
          <RadioComponent>
            {selected === item?.value && <Selected />}
          </RadioComponent>
          <Label>{item?.label}</Label>
        </Wrapper>
      ))}
    </>
  );
}
