import { ColorType } from "@src/theme/colors";

export type DescriptionInputProps = {
  onSubmitEditing?: (text: string) => void;
  placeholder?: string;
  onChange: (text: string) => void;
  disabled?: boolean;
  bgColor?: ColorType;
};

export type DescriptionInputStyleProps = {
  focus: boolean;
  disabled?: boolean;
};
