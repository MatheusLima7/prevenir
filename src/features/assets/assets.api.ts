import { createApi } from "@reduxjs/toolkit/query/react";
import Config from "react-native-config";
import {
  ApiAssetResponse,
  ApiGetUrlsResponse,
  GerUrlsArg,
  UpdateImageArg,
  UploadAssetArg,
} from "./assets.types";
import reAuthBaseQuery from "@src/helpers/reAuthBaseQuery";

const assetsApi = createApi({
  reducerPath: "assetsApi",
  baseQuery: reAuthBaseQuery(""),
  endpoints: (build) => ({
    uploadAsset: build.mutation<ApiAssetResponse, UploadAssetArg>({
      query: (arg) => {
        const { file, url } = arg;

        return {
          url: `${url}`,
          method: "PUT",
          body: file,
          headers: {
            "Content-Type": file.type,
          },
        };
      },
    }),
    updateImageInBackend: build.mutation<ApiAssetResponse, UpdateImageArg>({
      query: (arg) => {
        const { imageUrl, url, userId } = arg;

        return {
          url: `${url}/users/user/${userId}/image`,
          method: "PUT",
          body: {
            imageUrl,
          },
        };
      },
    }),
    getUrls: build.mutation<ApiGetUrlsResponse, GerUrlsArg>({
      query: (body) => {
        return {
          url: `${Config.API_URL}/media/mounturl`,
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export default assetsApi;
