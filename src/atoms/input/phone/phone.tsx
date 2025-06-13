import { forwardRef, useState } from "react";
import { MaskedTextInputProps } from "react-native-advanced-input-mask";
import { Mask } from "./phone.styles";
import { PhoneInputProps } from "./phone.types";
import colors from "@src/theme/colors";

const Phone = forwardRef<MaskedTextInputProps, PhoneInputProps>(
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
        mask="([00])[00000]-[0000]"
        onSubmitEditing={onSubmitEditing}
        placeholder="(XX)XXXXX-XXXX"
        keepPlaceholderPartially
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
        placeholderTextColor={colors.neutralLightBlue}
        returnKeyType="next"
      />
    );
  }
);

Phone.displayName = "Phone";

export default Phone;
