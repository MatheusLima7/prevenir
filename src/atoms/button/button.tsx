import colors from "@src/theme/colors";
import {
  Gradient,
  Wrapper,
  CustomText,
  GradientText,
  GradientIcon,
} from "./button.styles";
import { ButtonProps } from "./button.types";

export default function Button({
  children,
  type,
  size,
  onPress,
  mode,
  endIcon,
  center = false,
  variant,
  style,
  isAlignLeft,
  isAlignRight,
  color,
  isGradientStyledOption,
  disabled,
  isShortAnswer,
}: ButtonProps) {
  const hasGradient = type === "gradient";
  const hasGreenGradient = type === "greenGradient";
  const hasGradientOption = type === "gradientOption";
  const hasGradientDanger = type === "gradientDanger";
  const hasAnyGradient =
    hasGradient || hasGreenGradient || hasGradientOption || hasGradientDanger;

  const renderIcon = !!endIcon && endIcon;

  let baseColors = hasGreenGradient
    ? [colors.darkGreen, colors.green]
    : [colors.blue, colors.gradient];

  if (hasGradientOption) {
    baseColors = [colors.purple, colors.xLightDanger];
  }

  if (hasGradientDanger) {
    baseColors = [colors.lightDanger, colors.darkDanger];
  }

  const customColors = [...baseColors];

  return (
    <Wrapper
      testId="button"
      onPress={onPress}
      type={type}
      size={size}
      mode={mode}
      style={style}
      hasGradient={hasAnyGradient}
      disabled={disabled}
    >
      {(hasGradient ||
        hasGreenGradient ||
        hasGradientOption ||
        hasGradientDanger) && (
        <Gradient
          hasGradientOption={
            hasGradientOption || hasGradientDanger || isGradientStyledOption
          }
          variant={variant}
          style={style}
          mode={mode}
          colors={customColors}
          isShortAnswer={isShortAnswer}
          hasIcon={!!renderIcon}
        >
          <GradientText center={center} size={size} mode={mode}>
            {children}
          </GradientText>
          {renderIcon && (
            <GradientIcon isShortAnswer={isShortAnswer}>
              {renderIcon}
            </GradientIcon>
          )}
        </Gradient>
      )}

      {!hasGradient && (
        <>
          <CustomText
            center={center}
            size={size}
            isAlignLeft={isAlignLeft}
            isAlignRight={isAlignRight}
            color={
              color !== undefined ? color : type == "text" ? "gray" : "white"
            }
          >
            {children}
          </CustomText>
          {renderIcon}
        </>
      )}
    </Wrapper>
  );
}
