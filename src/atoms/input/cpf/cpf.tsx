import { forwardRef, useEffect, useState } from "react";
import { MaskedTextInputProps } from "react-native-advanced-input-mask";
import { Mask } from "./cpf.styles";
import { CpfInputProps } from "./cpf.types";
import colors from "@src/theme/colors";

const Cpf = forwardRef<MaskedTextInputProps, CpfInputProps>(
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
        mask="[000].[000].[000]-[00]"
        onSubmitEditing={onSubmitEditing}
        placeholder="XXX.XXX.XXX-XX"
        keepPlaceholderPartially
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
        returnKeyType="next"
      />
    );
  }
);

Cpf.displayName = "Cpf";

export default Cpf;
