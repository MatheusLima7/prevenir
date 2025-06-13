import Icon from "@react-native-vector-icons/fontawesome6";
import {
  Wrapper,
  IconArrowRight,
  Robot,
  Title,
  CustomButton,
  Content,
  Subtitle,
  Strong,
  Paragraph,
  CustomButtonNo,
  CustomButtonYes,
  Box,
} from "./psychoactiveSubstanceUse.styles";
import usePsychoactiveSubstanceUse from "./usePsychoactiveSubstanceUse";
import SelectDate from "@src/atoms/selectDate";

export default function PsychoactiveSubstanceUse() {
  const {
    title,
    subtitle,
    button_nope,
    button_yes,
    onPress,
    next_button,
    onRejectPress,
    onConfirmPress,
    answer,
    isDisabledButton,
  } = usePsychoactiveSubstanceUse();

  const selectedNo = answer === false;
  const selectedYes = answer === true;

  return (
    <Wrapper>
      <Content>
        <Robot />
        <Title>{title}</Title>
        <Subtitle>
          {subtitle.map((item, index) => {
            if (item.strong) {
              return <Strong key={index}>{item.text}</Strong>;
            }
            return <Paragraph key={index}>{item.text}</Paragraph>;
          })}
        </Subtitle>
        <Box>
          <CustomButtonNo
            endIcon={
              selectedNo ? (
                <Icon iconStyle="solid" name="check" size={14} color="#fff" />
              ) : (
                <Icon
                  iconStyle="solid"
                  name="check"
                  size={14}
                  color="transparent"
                />
              )
            }
            selected={selectedNo}
            onPress={onRejectPress}
          >
            {button_nope}
          </CustomButtonNo>

          <CustomButtonYes
            endIcon={
              selectedYes ? (
                <Icon iconStyle="solid" name="check" size={14} color="#fff" />
              ) : (
                <Icon
                  iconStyle="solid"
                  name="check"
                  size={14}
                  color="transparent"
                />
              )
            }
            selected={selectedYes}
            onPress={onConfirmPress}
          >
            {button_yes}
          </CustomButtonYes>
        </Box>
        <SelectDate disabled={!answer} />
        <CustomButton
          style={isDisabledButton ? { opacity: 0.5 } : { opacity: 1 }}
          onPress={onPress}
          endIcon={<IconArrowRight />}
        >
          {next_button}
        </CustomButton>
      </Content>
    </Wrapper>
  );
}
