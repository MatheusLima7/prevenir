import useRemoveSupporter from "@src/screens/mySupporter/hooks/useRemoveSupporter";
import { useQueryClient } from "@tanstack/react-query";

export default () => {
  const { mutate } = useRemoveSupporter();

  const query = useQueryClient();
  const onDelete = (code: string) => {
    mutate(
      { id: code },
      {
        onSuccess: () => {
          query.invalidateQueries({ queryKey: ["emotionals"] });
        },
      }
    );
  };

  return {
    onDelete,
  };
};
