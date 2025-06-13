import { forwardRef, useEffect, useState } from "react";
import { MaskedTextInputProps } from "react-native-advanced-input-mask";
import { Mask } from "./zip_code.styles";
import { ZipCodeInputProps } from "./zip_code.types";
import colors from "@src/theme/colors";

const ZipCode = forwardRef<MaskedTextInputProps, ZipCodeInputProps>(
  ({ onChange, disabled, onSubmitEditing, value: val }, ref) => {
    const [value, setValue] = useState("");

    const onChangeText = (formatted: string, extracted: string) => {
      onChange(extracted);
    };

    useEffect(() => {
      if (val) {
        setValue(val);
      }
    }, [val]);

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
      <Mask
        ref={ref}
        style={style}
        editable={!disabled}
        autocomplete={false}
        mask="[00000]-[000]"
        onSubmitEditing={onSubmitEditing}
        placeholder="XXXXX-XXX"
        keepPlaceholderPartially
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
        returnKeyType="next"
      />
    );
  }
);

ZipCode.displayName = "ZipCode";

export default ZipCode;
