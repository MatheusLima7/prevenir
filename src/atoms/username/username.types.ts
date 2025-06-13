import typography from "@src/theme/typography";

export type UserNameProps = {
  sufix?: string;
  size?: keyof typeof typography.size;
};
