import { Image } from "react-native-image-crop-picker";
import uuid from "react-native-uuid";

import {
  useGetUrlsMutation,
  useUpdateImageInBackendMutation,
  useUploadAssetMutation,
} from "@features/assets";
import { UploadedImageProps } from "./profile.types";
import Config from "react-native-config";
import { useUser } from "@src/features/auth";
import { setAppUserImage } from "@src/features/app/slice";
import { useAppDispatch } from "@src/store/hooks";

export default () => {
  const [uploadAsset] = useUploadAssetMutation();
  const [getUrls] = useGetUrlsMutation();
  const dispatch = useAppDispatch();

  const [updatedImageInBackend] = useUpdateImageInBackendMutation();

  const user = useUser();

  const uploadImage = async (
    image: Image
  ): Promise<UploadedImageProps | null> => {
    const tempFile = {
      id: uuid.v4().toString(),
      uri: image.path,
      name: `${image.filename}`,
      type: image.mime,
    };

    let response = null;
    const urls = await getUrls({
      fileName: "sirius-black.jpeg",
      fileType: "image/jpeg",
      storageTarget: "users",
    });
    response = urls?.data?.response?.data;

    const toUploadFile = response?.toUploadFile;
    const toSaveFileUrl = response?.toSaveFileUrl;
    if (toUploadFile) {
      const uploaded = await uploadAsset({
        file: tempFile,
        url: toUploadFile,
      });

      if (toSaveFileUrl) {
        dispatch(setAppUserImage(toSaveFileUrl));
        await updatedImageInBackend({
          imageUrl: toSaveFileUrl,
          url: `${Config.API_URL}`,
          userId: `${user?.key}`,
        });
      }

      if ("data" in uploaded) {
        const id = uploaded.data?.id;
        const url = uploaded.data?.url;
        if (id && url) {
          return { id, url: `${toSaveFileUrl}` };
        }
      }
    }

    return null;
  };

  return { uploadImage };
};
