import { Wrapper, Label } from "./input.styles";
import { InputProps } from "./input.types";
import useInput from "./useInput";

export default function Input(props: InputProps) {
  const { getComponent } = useInput(props);
  const { name, type, ref, disabled } = props;

  return (
    <Wrapper>
      <Label disabled={disabled}>{name}</Label>
      {getComponent(type, ref)}
    </Wrapper>
  );
}
