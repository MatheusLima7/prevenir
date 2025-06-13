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
