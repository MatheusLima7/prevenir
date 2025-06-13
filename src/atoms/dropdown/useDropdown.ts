import { useEffect, useState } from "react";
import dropdownConstants from "./dropdown.constants";
import { DropDownProps } from "./dropdown.types";

export default ({ onChange }: DropDownProps) => {
  const { options, defaultOption } = dropdownConstants;

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    id: "",
    value: "",
    name: "",
  });

  useEffect(() => {
    setSelected(defaultOption);
  }, []);

  const onPress = () => {
    setOpen(!open);
  };

  const onItemPress = (id: string, value: string, name: string) => {
    setSelected({
      id,
      value,
      name,
    });

    onChange(id, value, name);

    setOpen(false);
  };

  return {
    options,
    onPress,
    open,
    setOpen,
    selected,
    onItemPress,
  };
};
