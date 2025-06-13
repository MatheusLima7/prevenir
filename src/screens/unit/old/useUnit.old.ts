import { useEffect } from "react";
import {
  reset,
  Response,
  useUnits,
  useUnitsMutation,
} from "@src/features/unit";

export default () => {
  const [fetchUnits, { isLoading }] = useUnitsMutation();

  const units: Response = useUnits();
  const data = units?.data;
  const pageNumber =
    units?.pageNumber >= 0 ? units?.pageNumber : units?.pageNumber - 1;
  const totalPages = units?.totalPages;

  const lastPage = pageNumber === totalPages;

  useEffect(() => {
    const init = async () => {
      try {
        const response = await fetchUnits({
          start: String(0),
          size: String(5),
        });

        if (response?.error) {
          throw new Error(
            "Error fetching units: " + JSON.stringify(response.error)
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();

    return () => {
      reset();
    };
  }, []);

  const loadMoreResults = async () => {
    if (isLoading || !data?.length || lastPage) {
      return;
    }
    await fetchUnits({
      start: String(0),
      size: String(10),
    });
  };

  return {
    loadMoreResults,
    loadingMore: isLoading,
    units: data,
  };
};
