import { OptionName, Wrapper } from "./option.styles";
import { OptionProps } from "./option.types";

export default function Option({ name, id, onPress, value }: OptionProps) {
  return (
    <Wrapper onPress={() => onPress(id, value, name)}>
      <OptionName>{name}</OptionName>
    </Wrapper>
  );
}
