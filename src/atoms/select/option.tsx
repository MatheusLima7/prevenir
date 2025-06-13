import Button from "../button";
import { Wrapper } from "./option.styles";
import { OptionProps } from "./option.types";

export default function Option({ text, value, onPressOption }: OptionProps) {
  return (
    <Wrapper>
      <Button
        center={true}
        type="gradientOption"
        variant="contain"
        size="xSmall"
        onPress={() => {
          if (onPressOption) {
            onPressOption({
              text,
              value,
            });
          }
        }}
      >
        {text}
      </Button>
    </Wrapper>
  );
}
