export type RadioButtonProps = {
  onChange: (val: string) => void;
  testID?: string;
  items: RadioProps[];
};

export type RadioProps = {
  id: string;
  value: string;
  label: string;
};
