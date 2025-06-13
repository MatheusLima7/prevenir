import assetsApi from "./assets.api";

export { default as assetsApi } from "./assets.api";

export * from "./assets.types";

export const {
  useUploadAssetMutation,
  useGetUrlsMutation,
  useUpdateImageInBackendMutation,
} = assetsApi;
