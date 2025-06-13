import { Image } from "./avatar.styles";
import { AvatarProps } from "./avatar.types";

export default function Avatar({ image, type, style }: AvatarProps) {
  return (
    <Image
      style={style}
      type={type}
      source={typeof image === "string" ? { uri: image } : image}
    />
  );
}
