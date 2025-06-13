import { ReactNode } from "react";

export type ToggleItemProps = {
  children: ReactNode;
  question: string;
  lastItem: boolean;
};

export type IconProps = {
  open: boolean;
};

export type HeaderProps = {
  lastItem: boolean;
};
