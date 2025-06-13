import { useState } from "react";
import { useRootNavigation } from "@src/stacks";
import routes from "@src/stacks/routes";
import { useAppTypeUserLoggedAuth } from "@src/features/app/selectors";
import { useDeleteAccountMutation } from "@src/features/user";
import { useUser } from "@src/features/auth";
import { ErrorProps } from "@src/atoms/error/error.types";
import deleteAccountConstants from "./deleteAccount.constants";

export default () => {
  const { description, info, reason, delete_account, items, supporterItems } =
    deleteAccountConstants;

  const [fetchDeleteAccount, { isLoading }] = useDeleteAccountMutation();
  const { navigate } = useRootNavigation();
  const user = useUser();
  const userType = useAppTypeUserLoggedAuth();

  const [errors, setErrors] = useState<ErrorProps[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [text, setText] = useState("");

  const onDeleteAccount = async () => {
    if (!selected) {
      setErrors([
        {
          title: "Atenção",
          text: "Obrigatório selecionar um motivo",
        },
      ]);
    } else if (selected === "99" && text == "") {
      setErrors([
        {
          title: "Atenção",
          text: "Obrigatório preencher descrição de outros",
        },
      ]);
    } else {
      if (user?.key) {
        const response = await fetchDeleteAccount({ userId: user?.key });

        if (!response.error) {
          navigate(routes.USER_ACCOUNT_DELETED);
        }
      }
    }
  };

  const onChange = (val: string) => {
    setSelected(val);
  };

  const hasDescription = selected === "99";

  const onChangeDescription = (str: string) => {
    setText(str);
  };

  const onErrorPress = (i: number) => {
    setErrors(
      [...errors].filter((item, index) => {
        if (index === i) return;
        return item;
      })
    );
  };

  return {
    description,
    reason,
    onChange,
    items: userType === "supporter" ? supporterItems : items,
    hasUser: userType === "user",
    hasDescription,
    onChangeDescription,
    onDeleteAccount,
    delete_account,
    errors,
    info,
    onErrorPress,
    isLoading,
  };
};
