import Avatar from "../avatar";
import { UseAvatarProps } from "./useAvatar.types";
import useUserAvatar from "./useUserAvatar";

export default function UserAvatar({ currentImage }: UseAvatarProps) {
  const { image } = useUserAvatar({ currentImage });
  return <Avatar image={image} />;
}
