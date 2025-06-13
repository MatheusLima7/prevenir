import { useState } from "react";
import { CheckboxProps } from "./checkbox.types";
import radioButtonConstants from "./checkbox.constants";

export default (props: CheckboxProps) => {
  const [selected, setSelected] = useState(false);

  const { selectedTestID } = radioButtonConstants;

  const { label, onChange, testID } = props;

  const onPress = () => {
    const option = !selected;
    setSelected(option);
    onChange(option);
  };

  return {
    selected,
    setSelected,
    onPress,
    label,
    testID,
    selectedTestID,
  };
};
