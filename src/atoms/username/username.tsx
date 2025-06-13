import { Name } from "./username.styles";
import { UserNameProps } from "./username.types";
import useUsername from "./useUsername";

export default function Username({ sufix, size }: UserNameProps) {
  const { name } = useUsername();
  return (
    <Name size={size}>
      {name}
      {sufix}
    </Name>
  );
}
