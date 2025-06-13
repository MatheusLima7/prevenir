import { useAppSelector } from "@store/hooks";

export const useFeeds = () => useAppSelector(({ feeds }) => feeds);
export const useFeed = () => useAppSelector(({ feed }) => feed);
