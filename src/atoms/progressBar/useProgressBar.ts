import { ProgressBarProps } from "./progressBar.types";

export default ({ quantity, step }: ProgressBarProps) => {
  const progress = (100 / quantity) * step;

  return {
    progress,
  };
};
