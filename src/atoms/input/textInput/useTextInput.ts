import { useEffect, useState } from "react";
import textInputConstants from "./textInput.constants";

export default (value?: string) => {
  const [text, setText] = useState("");
  const { ACCESSIBILITY_LABEL: accessibilityLabel } = textInputConstants;

  const onChangeText = (text: string) => {
    setText(text);
  };

  useEffect(() => {
    if (value) {
      setText(value);
    }
  }, [value]);

  return {
    onChangeText,
    text,
    accessibilityLabel,
  };
};
