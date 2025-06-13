import { Surname } from "./userSurname.styles";
import { UserSurnameProps } from "./userUsername.types";
import useUserSurname from "./useUserSurname";

export { Surname } from "./userSurname.styles";

export default function UserSurname({ size }: UserSurnameProps) {
  const { surname } = useUserSurname();
  return <Surname size={size}>{surname}</Surname>;
}
