import { TextInput } from "react-native";
import { MaskedTextInputProps } from "react-native-advanced-input-mask";

type TextProps = {
  value: string;
  strong: boolean;
};

export type FieldProps = {
  field: string;
  type: "text" | "cpf" | "date";
  placeholder: string;
  name: string;
  disabled?: boolean;
  value?: string;
  focus?: boolean;
};

export type FormSchemaProps = {
  step: number;
  type: "form" | "question";
  topic: string;
  texts: TextProps[][];
  fields: FieldProps[];
};

export type DataProps = {
  text: string;
  field: string;
};

export type FormData = {
  birthday?: string;
  surname?: string;
  social_name?: string;
};

export type InputRefProps = TextInput | MaskedTextInputProps | null;
