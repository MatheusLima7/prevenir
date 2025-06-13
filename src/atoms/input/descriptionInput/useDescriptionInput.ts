import { useState } from "react";
import descriptionInputConstants from "./descriptionInput.constants";

export default () => {
  const [text, setText] = useState("");
  const [focus, setFocus] = useState(false);
  const { ACCESSIBILITY_LABEL: accessibilityLabel } = descriptionInputConstants;

  const onChangeText = (text: string) => {
    setText(text);
  };

  return {
    onChangeText,
    text,
    focus,
    setFocus,
    accessibilityLabel,
  };
};
