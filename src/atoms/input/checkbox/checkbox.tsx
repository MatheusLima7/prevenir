import { RadioComponent, Wrapper, Label, Selected } from "./checkbox.styles";
import useCheckbox from "./useCheckbox";
import { CheckboxProps } from "./checkbox.types";
import { View } from "react-native";

export default function Checkbox(props: CheckboxProps) {
  const { selected, onPress, label, testID, selectedTestID } =
    useCheckbox(props);

  return (
    <Wrapper testID={testID} onPress={onPress}>
      <RadioComponent>
        {selected && (
          <View testID={selectedTestID}>
            <Selected />
          </View>
        )}
      </RadioComponent>
      <Label>{label}</Label>
    </Wrapper>
  );
}
