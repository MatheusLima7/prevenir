import { useAppSelector } from "@store/hooks";

export const useNotifications = () =>
  useAppSelector(({ notifications }) => notifications);
