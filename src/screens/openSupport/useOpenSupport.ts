import { useEffect, useState } from "react";
import openSupportConstants from "./openSupport.constants";
import { SelectedProps } from "./openSupport.types";
import routes from "@src/stacks/routes";
import { useRootNavigation } from "@src/stacks";

export default () => {
  const { title, texts, text_button, supportedItems } = openSupportConstants;

  const { navigate } = useRootNavigation();

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

  const onPress = () => {
    navigate(routes.SUPPORTEDs);
  };

  return {
    texts,
    title,
    onPress,
    text_button,
    supportedItems: supporteds,
    disabledButton: supporteds.every(
      (item) => item.value == "não" || item.value == null
    ),
    onChangeSelecteds,
  };
};
