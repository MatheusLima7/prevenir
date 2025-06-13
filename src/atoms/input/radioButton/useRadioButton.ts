import { useState } from "react";
import { RadioButtonProps } from "./radioButton.types";

export default (props: RadioButtonProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  const { onChange, items } = props;

  const onPress = (val: string) => {
    setSelected(val);
    onChange(val);
  };

  return {
    selected,
    setSelected,
    onPress,
    items,
  };
};
