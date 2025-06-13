export type TextInputProps = {
  onSubmitEditing: (text: string) => void;
  placeholder: string;
  onChange: (text: string) => void;
  disabled?: boolean;
  value?: string;
  focus?: boolean;
  keyboardType?: "numeric";
};

export type TextInputStyleProps = {
  focus: boolean;
  disabled?: boolean;
};
