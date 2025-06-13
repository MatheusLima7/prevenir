import { AxiosError } from "axios";
import { jwtDecode } from "jwt-decode";
import { useIdToken, useToken } from "@src/features/auth";
import api from "@src/services/api";
import { useQuery } from "@tanstack/react-query";
import { EmotionalResponse, EmotionalStatus } from "../mySupporter.types";

interface QueryParams {
  start?: number;
  size?: number;
  orderField?: string;
  publicationDate?: string;
  status?: EmotionalStatus;
}

export default function useListSupporters(params?: QueryParams) {
  const token = useToken();
  const idToken = useIdToken();
  const supportedId = (jwtDecode(idToken as string) as { key: string }).key;

  return useQuery<EmotionalResponse>({
    queryKey: ["emotionals", params],
    queryFn: async () => {
      const searchParams = new URLSearchParams();
      if (params?.start) searchParams.append("start", params.start.toString());
      if (params?.size) searchParams.append("size", params.size.toString());
      if (params?.orderField)
        searchParams.append("orderField", params.orderField);
      if (params?.publicationDate)
        searchParams.append("publicationDate", params.publicationDate);
      if (params?.status) searchParams.append("status", params.status);

      try {
        const response = await api.get<{ response: EmotionalResponse }>(
          `/emotionals/supported/${supportedId}?${searchParams.toString()}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        return response.data.response;
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log("useListSupporters: ", error?.response?.data);
          throw error?.response?.data;
        }

        throw error;
      }
    },
    enabled: !!supportedId,
  });
}
