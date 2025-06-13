import { Alert, ImageSourcePropType, Linking } from "react-native";
import { PERMISSIONS, request } from "react-native-permissions";
import ImagePicker, { ImageOrVideo } from "react-native-image-crop-picker";
import { useEffect, useState } from "react";
import useUploadImage from "./useUploadImage";
import { useAppUserImage } from "@src/features/app/selectors";

export default () => {
  const { uploadImage } = useUploadImage();
  const [currentImage, setCurrentImage] = useState<
    ImageSourcePropType | undefined | string
  >(undefined);
  const userImage = useAppUserImage();

  const accessAndUploadImage = async (type: "Camera" | "Picker") => {
    const typeImage: "openCamera" | "openPicker" = `open${type}`;

    try {
      const image: ImageOrVideo = await ImagePicker[typeImage]({
        width: 300,
        height: 300,
        cropping: true,
        mediaType: "photo",
        multiple: false,
      });

      if (image) {
        const path = image?.path;
        if (path) {
          setCurrentImage(path);
        }

        await uploadImage(image);
      }
    } catch {
      Alert.alert("Erro", "Não foi possível acessar a imagem.");
    }
  };

  const onPermissionBlocked = (title: string) =>
    Alert.alert(
      title,
      "Você precisa alterar a permissão nas configurações do seu celular.",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Alterar", onPress: Linking.openSettings },
      ]
    );

  const onEditAvatar = () =>
    Alert.alert(
      "O que deseja fazer?",
      "Você deseja acessar a galeria ou câmera do celular?",
      [
        {
          text: "Câmera",
          onPress: () => {
            request(PERMISSIONS.ANDROID.CAMERA).then((result) => {
              if (result !== "granted")
                onPermissionBlocked("Não temos acesso a sua camera.");
              else accessAndUploadImage("Camera");
            });
          },
        },
        {
          text: "Galeria",
          onPress: () => {
            request(PERMISSIONS.ANDROID.CAMERA).then((result) => {
              if (result !== "granted")
                onPermissionBlocked("Não temos acesso a sua galeria de fotos.");
              else accessAndUploadImage("Picker");
            });
          },
        },
        {
          text: "Cancelar",
          style: "destructive",
        },
      ],
      {
        cancelable: true,
      }
    );

  useEffect(() => {
    if (userImage) {
      setCurrentImage(userImage);
    }
  }, [userImage]);

  return {
    onEditAvatar,
    currentImage,
  };
};
