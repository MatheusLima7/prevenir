import { forwardRef } from "react";
import { Wrapper, Input } from "./descriptionInput.styles";
import { DescriptionInputProps } from "./descriptionInput.types";
import useDescriptionInput from "./useDescriptionInput";
import { TextInput as TextInputRN } from "react-native";
import colors from "@src/theme/colors";

const DescriptionInput = forwardRef<TextInputRN, DescriptionInputProps>(
  ({ onSubmitEditing, placeholder, onChange, disabled, bgColor }, ref) => {
    const { text, onChangeText, setFocus, accessibilityLabel, focus } =
      useDescriptionInput();

    const style = !disabled
      ? {
          backgroundColor: bgColor ? colors[bgColor] : colors.lightBlue,
        }
      : {
          backgroundColor: bgColor ? colors[bgColor] : `${colors.lightBlue}80`,
        };

    return (
      <Wrapper>
        <Input
          focus={focus}
          style={style}
          ref={ref}
          placeholder={placeholder}
          value={disabled ? "" : text}
          onChangeText={(text: string) => {
            onChange(text);
            onChangeText(text);
          }}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          accessibilityLabel={accessibilityLabel}
          onSubmitEditing={onSubmitEditing}
          returnKeyType="next"
          blurOnSubmit={false}
          editable={!disabled}
        />
      </Wrapper>
    );
  }
);

DescriptionInput.displayName = "DescriptionInput";

export default DescriptionInput;
