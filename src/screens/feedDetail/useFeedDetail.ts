import { useFeedQuery } from "@src/features/feed";

export default (code: string) => {
  const { data, isLoading, status } = useFeedQuery(code);

  if (status === "rejected") {
    return {
      isLoading,
      data: null,
    };
  }

  return {
    data: data?.response.data || null,
    isLoading,
  };
};
