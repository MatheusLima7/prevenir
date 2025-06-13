import { useRef, useState } from "react";
import questionsConstants from "../questions.constants";
import {
  DataProps,
  FormData,
  FormSchemaProps,
  InputRefProps,
} from "./formData.types";
import { TextInput, TextInputProps } from "react-native";
import { MaskedTextInputProps } from "react-native-advanced-input-mask";
import formConstants from "./formData.constants";
import { setAppFormAnswered } from "@src/features/app/slice";
import { useAppDispatch } from "@src/store/hooks";
import { isValidDateAndNotFuture } from "@src/utils/date";
import { ErrorProps } from "@src/atoms/error/error.types";

export default () => {
  const dispatch = useAppDispatch();
  const data: FormSchemaProps = questionsConstants;
  const inputRefs = useRef<InputRefProps[]>([]);
  const [form, setForm] = useState<FormData>({
    birthday: "",
    surname: "",
    social_name: "",
  });

  const { next_button } = formConstants;
  const [errors, setErrors] = useState<ErrorProps[]>([]);

  const setData = ({ text, field }: DataProps) => {
    setForm({ ...form, [field]: text });
  };

  const isMasked = (
    props: TextInputProps | MaskedTextInputProps
  ): props is MaskedTextInputProps => "mask" in props;

  function isValidTextField(text: string) {
    if (text.length > 0) {
      if (text.length < 2) {
        return "min-error";
      }
      if (text.length > 20) {
        return "max-error";
      }
    }

    return "no-error";
  }

  const validate = () => {
    const surname = isValidTextField(form?.surname ?? "");
    const createErrors = [];

    if (["min-error", "max-error"].includes(surname)) {
      createErrors.push({
        title: "Apelido Inválido",
        text: `Apelido deve ter no ${surname === "min-error" ? "mínimo duas " : "máximo vinte "}letras. 👋`,
        position: 10,
      });
    }

    const social_name = isValidTextField(form?.social_name ?? "");
    if (["min-error"].includes(social_name)) {
      createErrors.push({
        title: "Nome Social Inválido",
        text: `Nome Social deve ter no mínimo duas letras. 👋`,
        position: 10,
      });
    }

    const date = isValidDateAndNotFuture(form?.birthday ?? "");
    if (!date.success) {
      createErrors.push({
        title: date.title,
        text: date.text as string,
        position: 10,
      });
    }

    setErrors(createErrors);

    return createErrors.length === 0;
  };

  const onPress = () => {
    const isValid = validate();
    if (isValid) {
      dispatch(setAppFormAnswered(true));
    }
  };

  const onErrorPress = (i: number) => {
    setErrors(
      [...errors].filter((item, index) => {
        if (index === i) return;
        return item;
      })
    );
  };

  const onSubmitEditing = (index: number) => {
    if (index == 2) {
      (inputRefs?.current?.[index + 2] as TextInput)?.focus();
    } else {
      (inputRefs?.current?.[index + 1] as TextInput)?.focus();
    }
  };

  const onChange = (text: string, field: string) => setData({ text, field });

  return {
    data,
    inputRefs,
    form,
    setData,
    isMasked,
    next_button,
    onPress,
    onSubmitEditing,
    onChange,
    errors,
    setErrors,
    onErrorPress,
  };
};
