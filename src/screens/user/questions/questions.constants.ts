import { FormSchemaProps } from "./formData/formData.types";

const formSchema: FormSchemaProps = {
  topic: "Dados pessoais",
  type: "form",
  step: 1,
  texts: [
    [
      {
        value:
          "Os campos desativados são informações coletadas diretamente do ",
        strong: false,
      },
      {
        value: "GOV.BR.",
        strong: true,
      },
    ],
  ],
  fields: [
    {
      name: "Nome",
      field: "name",
      type: "text",
      placeholder: "Qual é o seu nome?",
      disabled: true,
      value: "Maria Silva Santos",
    },
    {
      name: "Nome Social",
      field: "social_name",
      type: "text",
      placeholder: "Como você gosta de ser chamado?",
      disabled: false,
      focus: true,
    },
    {
      name: "Apelido",
      field: "surname",
      type: "text",
      placeholder: "Qual é o seu apelido?",
      disabled: false,
    },
    {
      name: "CPF",
      field: "CPF",
      type: "cpf",
      placeholder: "Qual é o seu cpf?",
      disabled: true,
      value: "136.090.000-69",
    },
    {
      name: "Data de Nascimento",
      field: "birthday",
      type: "date",
      placeholder: "Qual é a sua data de nascimento?",
      disabled: false,
    },
  ],
};

export default formSchema;
