export type ChangedSelectedArg = {
  id: string;
  value: string;
  name: string;
  phone: string;
};

export type SupportedItemsProps = {
  onChangeSelecteds: (obj: ChangedSelectedArg) => void;
  hasButton?: boolean;
};
