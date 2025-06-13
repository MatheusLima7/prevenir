import { ImageSourcePropType } from "react-native";

export type PickedImageProps = {
  path: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  filename?: string;
  data?: string;
  cropRect?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  sourceURL?: string;
  localIdentifier?: string;
};

export type UploadedImageProps = {
  id: string;
  url: string;
};

export type UserProfileProps = {
  surname: string;
  gender: string;
  unit: string;
  triggers: string;
  registered: string;
  gender_answer: string;
  trigers_items: string[];
  onPress: () => void;
  onLocalPress: () => void;
  edit_button: string;
  locals: string;
  labelCount: string;
  onDeletePress: (id: string) => void;
  delete_account: string;
  onEditAvatar: (id: string) => void;
  currentImage?: ImageSourcePropType | string;
};
