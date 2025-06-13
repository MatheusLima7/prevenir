import Button from "@src/atoms/button";
import { Wrapper } from "./onboarding.styles";
import Icon from "@react-native-vector-icons/fontawesome6";

import CustomCarousel from "@src/molecules/carousel";
import useOnBoarding from "./useOnBoarding";
import useItems from "./useItems";
import colors from "@src/theme/colors";

export default function OnBoardingScreen() {
  const { items } = useItems();
  const { button, onPress } = useOnBoarding();

  return (
    <Wrapper>
      <CustomCarousel items={items} />
      <Button
        type="gradient"
        size="small"
        onPress={onPress}
        endIcon={
          <Icon
            name="chevron-right"
            size={20}
            color={colors.white}
            iconStyle="solid"
          />
        }
      >
        {button}
      </Button>
    </Wrapper>
  );
}
