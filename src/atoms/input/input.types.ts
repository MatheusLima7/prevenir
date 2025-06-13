import { TextInput as TextInputRN } from "react-native";

export type InputTypeProps =
  | "text"
  | "cpf"
  | "date"
  | "phone"
  | "dropdown"
  | "numeric"
  | "zip_code";

export type InputProps = {
  name: string;
  field: string;
  type: InputTypeProps;
  onSubmitEditing: () => void;
  placeholder: string;
  onChange: (text: string, extracted?: string) => void;
  ref: React.Ref<TextInputRN>;
  disabled?: boolean;
  value?: string;
  focus?: boolean;
};
