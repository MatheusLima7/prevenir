export type ApiAsset = {
  url: string;
  id: string;
};

export type ApiAssetResponse = ApiAsset;

export type UploadAssetArg = {
  file: {
    id: string;
    name: string;
    type: string;
    uri: string;
  };
  url: string;
};

export type UpdateImageArg = {
  imageUrl: string;
  url: string;
  userId: string;
};

export type GerUrlsArg = {
  fileName: string;
  fileType: string;
  storageTarget: string;
};

export type ApiGetUrls = {
  toSaveFleUrl?: string;
  toUploadFile: string;
  toSaveFileUrl?: string;
};

export type ApiGetUrlsResponse = { response: { data: ApiGetUrls } };
