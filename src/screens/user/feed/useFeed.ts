import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useToken } from "@src/features/auth";
import { Feed, FeedsData, FeedsResponse } from "@src/features/feed";
import Config from "react-native-config";

export const PAGE_SIZE = 10;

const fetchUnits = async ({
  pageParam = 1,
  token = "",
}): Promise<FeedsResponse<FeedsData>> => {
  const size = PAGE_SIZE * pageParam;

  const { data } = await axios.get<FeedsResponse<FeedsData>>(
    `${Config.API_URL}/feeds?start=0&size=${size}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return { ...data, pageCount: pageParam };
};

export default function useFeeds() {
  const token = useToken();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching: isLoading,
    isError,
    error,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["feeds"],
    queryFn: (params) => fetchUnits({ ...params, token: token as string }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const totalItems = lastPage.response.total;
      const currentlyLoaded = lastPage.response.data.length;
      return currentlyLoaded < totalItems ? lastPage.pageCount + 1 : undefined;
    },
    refetchOnWindowFocus: false,
  });

  const feeds: Feed[] = data?.pages[data.pages.length - 1]?.response.data ?? [];

  const loadMoreResults = () => {
    if (hasNextPage) {
      fetchNextPage().catch((err) => {
        console.error("Erro ao carregar mais resultados:", err);
      });
    }
  };

  return {
    feeds,
    loadMoreResults,
    loadingMore: isFetchingNextPage,
    isLoading,
    isError,
    error,
    refetch,
  };
}
