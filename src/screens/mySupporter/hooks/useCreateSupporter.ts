import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  CreateSupporterPayload,
  CreateSupporterResponse,
  Supporter,
} from "../mySupporter.types";
import api from "@src/services/api";
import { useIdToken } from "@src/features/auth";
import { jwtDecode } from "jwt-decode";

const createSupporter = async (
  payload: CreateSupporterPayload,
  token: string
): Promise<Supporter> => {
  try {
    const { data } = await api.post<CreateSupporterResponse>(
      `/emotionals`,
      { ...payload },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    }

    throw error;
  }
};

export default function useCreateSupporter() {
  const token = useIdToken();
  const idToken = useIdToken();
  const supportedId = (jwtDecode(idToken as string) as { key: string }).key;

  return useMutation({
    mutationFn: (payload: CreateSupporterPayload) =>
      createSupporter({ ...payload, supportedId }, token as string),
  });
}
