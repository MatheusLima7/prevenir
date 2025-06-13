import Avatar from "../avatar";
import SupporterAvatar from "../supporterAvatar/supporterAvatar";
import { SupporterAvatarProps } from "./supporterAvatar.types";
import useSupporterAvatar from "./useSupporterAvatar";

export default function SupporterAvatarImage({
  currentImage,
  type,
}: SupporterAvatarProps) {
  const { image } = useSupporterAvatar({ currentImage });
  return (
    <>
      {image ? (
        <Avatar type={type} image={image} />
      ) : (
        <SupporterAvatar type={type} />
      )}
    </>
  );
}
