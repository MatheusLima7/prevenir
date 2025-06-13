export type OptionProps = {
  id: string;
  name: string;
  value: string;
  onPress: (id: string, value: string, name: string) => void;
};
