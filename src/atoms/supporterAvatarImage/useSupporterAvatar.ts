import { useAppUserImage } from "@src/features/app/selectors";
import { SupporterAvatarProps } from "./supporterAvatar.types";

export default ({ currentImage }: SupporterAvatarProps) => {
  const image = currentImage;

  const userImage = useAppUserImage();

  return {
    image: userImage ?? image,
  };
};
