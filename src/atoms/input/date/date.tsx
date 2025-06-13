import { forwardRef, useState } from "react";
import { MaskedTextInputProps } from "react-native-advanced-input-mask";
import { Mask } from "./date.styles";
import { DateInputProps } from "./date.types";
import colors from "@src/theme/colors";

const Date = forwardRef<MaskedTextInputProps, DateInputProps>(
  ({ onChange, onSubmitEditing, disabled }, ref) => {
    const [value] = useState("");

    const onChangeText = (formatted: string) => {
      const date = formatted.split("/");

      const formattedDate = `${date[2]}-${date[1]}-${date[0]}`;
      onChange(formattedDate);
    };

    const style = !disabled
      ? {
          backgroundColor: colors.white,
        }
      : {
          backgroundColor: `${colors.white}80`,
        };

    return (
      <Mask
        style={style}
        ref={ref}
        editable={!disabled}
        autocomplete={false}
        mask="[00]/[00]/[0000]"
        onSubmitEditing={onSubmitEditing}
        placeholder="XX/XX/XXXX"
        keepPlaceholderPartially
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
        returnKeyType="next"
        placeholderTextColor={colors.neutralLightBlue}
      />
    );
  }
);

Date.displayName = "Date";

export default Date;
