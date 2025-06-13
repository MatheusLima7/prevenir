import { KeyboardAvoidingViewProps } from "react-native";
import { KeyboardView } from "./keyboard.styles";

const ProviderKeyboard = ({ children }: KeyboardAvoidingViewProps) => {
  return <KeyboardView>{children}</KeyboardView>;
};

export default ProviderKeyboard;
