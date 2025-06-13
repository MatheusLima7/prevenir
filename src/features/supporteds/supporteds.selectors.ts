import { useAppSelector } from "@store/hooks";

export const useSupporteds = () =>
  useAppSelector(({ supporteds }) => supporteds);
