import { useAppSelector } from "@store/hooks";

export const useUnits = () => useAppSelector(({ units }) => units);
