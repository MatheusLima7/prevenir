import colors from "@src/theme/colors";
import { Wrapper } from "./userAge.styles";
import useUserAge from "./useUserAge";

export default function UserAge({ color }: { color?: keyof typeof colors }) {
  const { age, text } = useUserAge();
  return (
    <Wrapper color={color}>
      {age} {text}
    </Wrapper>
  );
}
