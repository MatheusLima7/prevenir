import { useState } from "react";

export default () => {
  const [open, setOpen] = useState(false);

  const toggleItem = () => {
    setOpen(!open);
  };

  return {
    toggleItem,
    open,
  };
};
