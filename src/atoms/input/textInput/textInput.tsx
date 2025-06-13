import { forwardRef } from "react";
import { Wrapper, Input } from "./textInput.styles";
import { TextInputProps } from "./textInput.types";
import useTextInput from "./useTextInput";
import { TextInput as TextInputRN } from "react-native";
import colors from "@src/theme/colors";

const TextInput = forwardRef<TextInputRN, TextInputProps>(
  (
    {
      onSubmitEditing,
      placeholder,
      onChange,
      disabled,
      value,
      focus,
      keyboardType,
    },
    ref
  ) => {
    const { text, onChangeText, accessibilityLabel } = useTextInput(value);

    const style = !disabled
      ? {
          backgroundColor: colors.white,
          placeholderTextColor: colors.neutralLightBlue,
          color: colors.neutralDarkBlue,
        }
      : {
          backgroundColor: `${colors.white}80`,
          placeholderTextColor: colors.neutralLightBlue,
          color: `${colors.neutralDarkBlue}80`,
        };

    return (
      <Wrapper>
        <Input
          style={style}
          ref={ref}
          focus={focus}
          placeholder={placeholder}
          value={text}
          onChangeText={(text: string) => {
            onChange(text);
            onChangeText(text);
          }}
          accessibilityLabel={accessibilityLabel}
          onSubmitEditing={onSubmitEditing}
          returnKeyType="next"
          blurOnSubmit={false}
          editable={!disabled}
          placeholderTextColor={colors.neutralLightBlue}
          keyboardType={keyboardType}
        />
      </Wrapper>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
