import { Wrapper, Bar } from "./progressBar.styles";
import { ProgressBarProps } from "./progressBar.types";
import useProgressBar from "./useProgressBar";

export default function ProgressBar({ step, quantity }: ProgressBarProps) {
  const { progress } = useProgressBar({ step, quantity });

  return (
    <Wrapper>
      <Bar progress={progress} />
    </Wrapper>
  );
}
