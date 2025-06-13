export type SelectProps = {
  onPress: (selected: ParameterProps) => void;
  loading?: boolean;
  isFinished?: boolean;
};

export type ParameterProps = {
  text: string;
  value: string;
};
