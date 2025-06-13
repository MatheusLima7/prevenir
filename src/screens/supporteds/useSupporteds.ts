import { useEffect, useState } from "react";
import openSupportConstants from "./supporteds.constants";
import { SelectedProps } from "./supporteds.types";

export default () => {
  const { title, texts, supportedItems } = openSupportConstants;

  const [supporteds, setSupporteds] = useState<SelectedProps[]>([]);

  useEffect(() => {
    setSupporteds(supportedItems);
  }, [supportedItems]);

  const onChangeSelecteds = ({ id, value }: SelectedProps) => {
    const temp = [...supporteds];

    const changing = temp.map((item) => {
      if (item.id == id) {
        return { ...item, value: value };
      }
      return { ...item };
    });

    setSupporteds(changing);
  };

  return {
    texts,
    title,
    supportedItems: supporteds,
    onChangeSelecteds,
  };
};
