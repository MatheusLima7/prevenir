import Input from "@src/atoms/input";
import {
  UpdateButton,
  ScrollViewContent,
  Wrapper,
  IconArrowRight,
  ContentError,
} from "./editAccount.styles";
import useEditAccount from "./useEditAccount";
import ProviderKeyboard from "@src/atoms/keyboard";
import Error from "@src/atoms/error";
import Modal from "react-native-modal";
import colors from "@src/theme/colors";
import Alert from "@src/molecules/alert";

export default function EditAccount() {
  const {
    fields,
    onSubmitEditing,
    inputRefs,
    onChange,
    onPress,
    update_button,
    onErrorPress,
    errors,
    open,
    setOpen,
  } = useEditAccount();

  return (
    <ProviderKeyboard>
      <Wrapper>
        <ScrollViewContent>
          {fields.map((item, index) => {
            return (
              <Input
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                key={index}
                onSubmitEditing={() => onSubmitEditing(index)}
                onChange={(text: string) => onChange(text, item.field)}
                {...item}
              />
            );
          })}
        </ScrollViewContent>
        <UpdateButton onPress={onPress} endIcon={<IconArrowRight />}>
          {update_button}
        </UpdateButton>
      </Wrapper>

      <ContentError>
        {errors.map((error, index) => (
          <Error
            key={"error-" + index}
            title={error.title}
            text={error.text}
            onPress={() => onErrorPress(index)}
          />
        ))}
      </ContentError>
      <Modal
        onBackdropPress={() => setOpen(false)}
        backdropColor={colors.xDarkBlue}
        backdropOpacity={0.98}
        animationIn="lightSpeedIn"
        animationOut="lightSpeedOut"
        isVisible={open}
      >
        <Alert
          title="Sucesso"
          message="Usuário alterado com sucesso"
          onClose={() => setOpen(false)}
        />
      </Modal>
    </ProviderKeyboard>
  );
}
