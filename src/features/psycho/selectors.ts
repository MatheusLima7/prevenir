import { useAppSelector } from "@store/hooks";

export const usePsychoSelectedDate = () =>
  useAppSelector(({ psycho: { selectedDate } }) => selectedDate);
