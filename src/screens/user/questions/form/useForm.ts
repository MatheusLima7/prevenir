import { useRef, useState } from "react";
import questionsConstants from "../questions.constants";
import { DataProps, FormSchemaProps } from "./form.types";
import { TextInput, TextInputProps } from "react-native";
import { MaskedTextInputProps } from "react-native-advanced-input-mask";
import formConstants from "./form.constants";

export default () => {
  const data: FormSchemaProps = questionsConstants;
  const inputRefs = useRef<(TextInput | MaskedTextInputProps | null)[]>([]);
  const [form, setForm] = useState({});

  const { next_button } = formConstants;

  const setData = ({ text, field }: DataProps) => {
    setForm({ ...form, [field]: text });
  };

  const isMasked = (
    props: TextInputProps | MaskedTextInputProps
  ): props is MaskedTextInputProps => "mask" in props;

  const onPress = () => {};

  return { data, inputRefs, form, setData, isMasked, next_button, onPress };
};
