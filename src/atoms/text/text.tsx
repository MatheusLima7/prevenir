import { Wrapper } from "./text.styles";
import { TextProps } from "./text.types";

export default function Text({
  children,
  type,
  size,
  color,
  center,
  numberOfLines,
  style,
}: TextProps) {
  return (
    <Wrapper
      testId="text-component"
      color={color}
      type={type}
      size={size}
      center={center}
      style={style}
      numberOfLines={numberOfLines}
    >
      {children}
    </Wrapper>
  );
}
