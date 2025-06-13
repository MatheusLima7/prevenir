import { ChangedSelectedArg } from "@src/atoms/supportedItem/supportedItem.types";

export type SupportedItemProps = {
  name: string;
  phone: string;
  id: string;
  supported: boolean;
  onChangeSelecteds: (obj: ChangedSelectedArg) => void;
  value?: "sim" | "não" | null;
};

export type SelectedProps = {
  id: string;
  value: string | null;
};
