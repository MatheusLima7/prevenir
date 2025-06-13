import { Wrapper, Name, Image, Body } from "./menuItem.styles";
import { MenuItemProps } from "./menuItem.types";
import useMenuItem from "./useMenuItem";

export default function MenuItem({ text, icon }: MenuItemProps) {
  const {
    isSupporter,
    handleSupporterText,
    isSupportMenuItem,
    getIcon,
    navigateToScreen,
  } = useMenuItem();

  return (
    <Wrapper>
      <Body onPress={() => navigateToScreen(icon)}>
        <Image source={getIcon(icon)} />
        <Name>
          {isSupporter && isSupportMenuItem(text)
            ? handleSupporterText(text)
            : text}
        </Name>
      </Body>
    </Wrapper>
  );
}
