import { InputProps, InputTypeProps } from "./input.types";
import { TextInput as TextInputRN } from "react-native";
import TextInput from "./textInput";
import Cpf from "./cpf";
import { MaskedTextInputProps } from "react-native-advanced-input-mask";
import { WrapperCpf } from "./input.styles";
import Date from "./date";
import Phone from "./phone";
import DropDown from "../dropdown";
import ZipCode from "./zip_code";

type InputRefType<T extends boolean> = T extends true
  ? MaskedTextInputProps
  : TextInputRN;

export default (props: InputProps) => {
  const { onSubmitEditing, placeholder, onChange, disabled, value, focus } =
    props;

  const getComponent = (
    type: InputTypeProps,
    ref: React.Ref<
      InputRefType<MaskedTextInputProps extends true ? true : false>
    >
  ) => {
    switch (true) {
      case type === "cpf":
        return (
          <WrapperCpf>
            <Cpf
              ref={ref as React.Ref<MaskedTextInputProps>}
              onSubmitEditing={onSubmitEditing}
              onChange={onChange}
              disabled={disabled}
              value={value}
            />
          </WrapperCpf>
        );

      case type === "zip_code":
        return (
          <ZipCode
            ref={ref as React.Ref<MaskedTextInputProps>}
            onSubmitEditing={onSubmitEditing}
            onChange={onChange}
            disabled={disabled}
            value={value}
          />
        );

      case type === "date":
        return (
          <Date
            ref={ref as React.Ref<MaskedTextInputProps>}
            onSubmitEditing={onSubmitEditing}
            onChange={onChange}
            disabled={disabled}
          />
        );

      case type === "phone":
        return (
          <Phone
            ref={ref as React.Ref<MaskedTextInputProps>}
            onSubmitEditing={onSubmitEditing}
            onChange={onChange}
            disabled={disabled}
          />
        );
      case type === "numeric":
        return (
          <TextInput
            ref={ref}
            onSubmitEditing={onSubmitEditing}
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
            value={value}
            focus={focus}
            keyboardType="numeric"
          />
        );

      case type === "dropdown":
        return <DropDown onChange={onChange} />;

      case type === "text":
        return (
          <TextInput
            ref={ref}
            onSubmitEditing={onSubmitEditing}
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
            value={value}
            focus={focus}
          />
        );

      default:
    }
  };

  return {
    getComponent,
  };
};
