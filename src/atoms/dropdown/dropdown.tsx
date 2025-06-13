import {
  Name,
  IconArrowDown,
  Wrapper,
  Content,
  Options,
  IconArrowUp,
} from "./dropdown.styles";
import { DropDownProps } from "./dropdown.types";
import Option from "./option";
import useDropdown from "./useDropdown";

export default function DropDown({ onChange }: DropDownProps) {
  const { options, onPress, selected, onItemPress, open } = useDropdown({
    onChange,
  });

  return (
    <Content>
      <Wrapper onPress={onPress}>
        <Name>{selected.name}</Name>
        {open ? <IconArrowDown /> : <IconArrowUp />}
      </Wrapper>

      {open && (
        <Options>
          {options.map((item, index) => (
            <Option onPress={onItemPress} key={index} {...item} />
          ))}
        </Options>
      )}
    </Content>
  );
}
