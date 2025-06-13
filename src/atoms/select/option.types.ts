export type SelectedOption = {
  text: string;
  value: string;
};

export type OptionProps = {
  text: string;
  value: string;
  onPressOption?: (selectedOption: SelectedOption) => void;
};
