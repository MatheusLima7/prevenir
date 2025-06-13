import { useRef, useState } from "react";
import editAccountConstants from "./editAccount.constants";
import { TextInput } from "react-native";
import { InputRefProps } from "../user/questions/formData/formData.types";
import { DataProps, FormData } from "./editAccount.types";
import { ErrorProps } from "@src/atoms/error/error.types";
import { isValidDateAndNotFuture } from "@src/utils/date";

export default () => {
  const { fields, update_button } = editAccountConstants;
  const inputRefs = useRef<InputRefProps[]>([]);
  const [open, setOpen] = useState(false);

  const onPress = () => {
    const isValid = validate();
    if (isValid) {
      setOpen(true);
    }
  };

  const onSubmitEditing = (index: number) => {
    if (index == 6) {
      (inputRefs?.current?.[index + 3] as TextInput)?.focus();
    } else {
      (inputRefs?.current?.[index + 1] as TextInput)?.focus();
    }
  };

  const [form, setForm] = useState<FormData>({
    social_name: "",
    surname: "",
    zip_code: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
    phone: "",
    date_of_birth: "",
    gender: "",
  });

  function isValidTextField(required: boolean, text: string, length?: number) {
    const conditional = required ? text.length >= 0 : text.length > 0;
    if (conditional) {
      if (text.length < (length ?? 2)) {
        return "min-error";
      }
      if (text.length > 20) {
        return "max-error";
      }
    }

    return "no-error";
  }

  const setData = ({ text, field }: DataProps) => {
    setForm({ ...form, [field]: text });
  };

  const onChange = (text: string, field: string) => setData({ text, field });

  const [errors, setErrors] = useState<ErrorProps[]>([]);

  const onErrorPress = (i: number) => {
    setErrors(
      [...errors].filter((item, index) => {
        if (index === i) return;
        return item;
      })
    );
  };

  const validate = () => {
    const createErrors = [];

    const social_name = isValidTextField(false, form?.social_name ?? "");
    const surname = isValidTextField(false, form?.surname ?? "");
    const zip_code = isValidTextField(true, form?.zip_code ?? "");
    const neighborhood = isValidTextField(true, form?.neighborhood ?? "");
    const city = isValidTextField(true, form?.city ?? "", 3);
    const street = isValidTextField(true, form?.street ?? "");
    const number = isValidTextField(true, form?.number ?? "");

    if (["min-error"].includes(social_name)) {
      createErrors.push({
        title: "Nome Social Inválido",
        text: `Nome Social deve ter no mínimo duas letras. 👋`,
        position: 10,
      });
    }

    if (["min-error", "max-error"].includes(surname)) {
      createErrors.push({
        title: "Apelido Inválido",
        text: `Apelido deve ter no ${surname === "min-error" ? "mínimo duas " : "máximo vinte "}letras. 👋`,
        position: 10,
      });
    }

    if (["min-error"].includes(zip_code)) {
      createErrors.push({
        title: "CEP Inválido",
        text: `É obrigatório preencher o CEP 👋`,
        position: 10,
      });
    }

    if (["min-error"].includes(street)) {
      createErrors.push({
        title: "Rua Inválida",
        text: `É obrigatório preencher a rua 👋`,
        position: 10,
      });
    }

    if (["min-error"].includes(number)) {
      createErrors.push({
        title: "Número Inválido",
        text: `É obrigatório preencher a número 👋`,
        position: 10,
      });
    }

    if (["min-error"].includes(neighborhood)) {
      createErrors.push({
        title: "Bairro Inválido",
        text: `Bairro deve ter no mínimo duas letras. 👋`,
        position: 10,
      });
    }

    if (["min-error"].includes(city)) {
      createErrors.push({
        title: "Cidade Inválida",
        text: `Cidade deve ter no mínimo três letras. 👋`,
        position: 10,
      });
    }

    const date = isValidDateAndNotFuture(form?.date_of_birth ?? "");
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

  return {
    fields,
    onSubmitEditing,
    inputRefs,
    onChange,
    onPress,
    update_button,
    onErrorPress,
    errors,
    open,
    setOpen,
  };
};
