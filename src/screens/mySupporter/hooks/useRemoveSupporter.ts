import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { DeleteSupporterPayload } from "../mySupporter.types";
import api from "@src/services/api";
import { useIdToken, useToken } from "@src/features/auth";
import { jwtDecode } from "jwt-decode";

const removeSupporter = async (
  payload: DeleteSupporterPayload,
  token: string
): Promise<string> => {
  try {
    const { data } = await api.delete(
      `/emotionals/${payload?.supportedId}/${payload?.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    }

    throw error;
  }
};

export default function useRemoveSupporter() {
  const token = useToken();
  const idToken = useIdToken();
  const supportedId = (jwtDecode<unknown>(idToken as string) as { key: string })
    .key;

  return useMutation({
    mutationFn: (payload: DeleteSupporterPayload) =>
      removeSupporter({ ...payload, supportedId }, token as string),
  });
}
