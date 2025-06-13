import ProviderKeyboard from "@src/atoms/keyboard";

import StepContent from "./stepContent";
import useStep from "./useStep";

export default function StepScreen() {
  const { steps } = useStep();

  return (
    <ProviderKeyboard>
      {steps.map((step, index) => {
        if (!step?.currentStep) return null;

        return <StepContent key={index} index={index} step={step} />;
      })}
    </ProviderKeyboard>
  );
}
