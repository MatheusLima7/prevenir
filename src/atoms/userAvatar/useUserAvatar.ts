import UserAvatar from "@assets/user.jpg";
import { UseAvatarProps } from "./useAvatar.types";
import { useAppUserImage } from "@src/features/app/selectors";

export default ({ currentImage }: UseAvatarProps) => {
  const image = currentImage ?? UserAvatar;

  const userImage = useAppUserImage();

  return {
    image: userImage ?? image,
  };
};
