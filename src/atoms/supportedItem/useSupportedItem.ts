import { setAppChosenTheSupporter } from "@src/features/app/slice";
import supportedItemConstants from "./supportedItem.constants";
import { SupportedItemsProps } from "./supportedItem.types";
import { useAppDispatch } from "@src/store/hooks";

export default ({ onChangeSelecteds, hasButton }: SupportedItemsProps) => {
  const dispatch = useAppDispatch();

  const { text_button_yes, text_button_no } = supportedItemConstants;

  const onPositivePress = (id: string, name: string, phone: string) => {
    onChangeSelecteds({ id, value: "sim", name, phone });
  };

  const onNegativePress = (id: string, name: string, phone: string) => {
    onChangeSelecteds({ id, value: "não", name, phone });
  };

  const onPress = () => {
    if (!hasButton) {
      dispatch(setAppChosenTheSupporter(true));
    }
  };

  return {
    text_button_yes,
    text_button_no,
    onPositivePress,
    onNegativePress,
    onPress,
  };
};
