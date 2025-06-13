import Card from "@src/atoms/card";
import {
  ContentError,
  CustomButton,
  Description,
  IconArrowRight,
  ScrollViewContent,
  Wrapper,
} from "./deleteAccount.styles";
import useDeleteAccount from "./useDeleteAccount";
import RadioButton from "@src/atoms/input/radioButton";
import DescriptionInput from "@src/atoms/input/descriptionInput";
import Error from "@src/atoms/error";
import ProviderKeyboard from "@src/atoms/keyboard";

export default function DeleteAccount() {
  const {
    description,
    reason,
    onChange,
    items,
    hasDescription,
    onChangeDescription,
    onDeleteAccount,
    delete_account,
    errors,
    onErrorPress,
    hasUser,
    info,
    isLoading,
  } = useDeleteAccount();

  return (
    <Wrapper>
      <ProviderKeyboard>
        <ScrollViewContent>
          <Card>
            <Description>
              {description}
              {hasUser ? ` ${info}` : ""}
            </Description>
            <Description>{reason}</Description>
            <RadioButton onChange={onChange} items={items} />
            <DescriptionInput
              disabled={!hasDescription}
              onChange={onChangeDescription}
              bgColor="white"
            />
          </Card>
          <CustomButton
            onPress={onDeleteAccount}
            endIcon={<IconArrowRight />}
            disabled={isLoading}
          >
            {delete_account}
          </CustomButton>
        </ScrollViewContent>
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
      </ProviderKeyboard>
    </Wrapper>
  );
}
