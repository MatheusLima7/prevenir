import { useAppSelector } from "@store/hooks";

export const useUser = () => useAppSelector(({ userApi }) => userApi);
