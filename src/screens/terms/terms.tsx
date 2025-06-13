import Button from "@src/atoms/button";
import { Wrapper, Content, Title, CustomText, Strong } from "./terms.styles";
import { Subtitle } from "./subtitle";
import termsConstants from "./terms.constants";
import Icon from "@react-native-vector-icons/evil-icons";
import useTerms from "./useTerms";

export default function TermsScreen() {
  const {
    title,
    subtitle,
    paragraph_01,
    intro,
    topic_01,
    paragraph_03,
    paragraph_04,
    topic_02,
    paragraph_05,
    topic_03,
    paragraph_06,
    topic_04,
    paragraph_07,
    article,
    topic_05,
    paragraph_08,
    paragraph_09,
    paragraph_10,
    paragraph_11,
    topic_06,
    paragraph_12,
    topic_07,
    accept_terms,
    accept,
    paragraph_13_part1,
    paragraph_13_part2,
    not_continue,
  } = termsConstants;

  const { handleTitle, onPressAccept, onPressReject } = useTerms();

  return (
    <Wrapper>
      <Content>
        <Title>{handleTitle(title)}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <CustomText>{intro}</CustomText>
        <Subtitle>{topic_01}</Subtitle>
        <CustomText>{paragraph_01}</CustomText>
        <Subtitle>{topic_02}</Subtitle>
        <CustomText>{paragraph_03}</CustomText>
        <CustomText>{paragraph_04}</CustomText>
        <CustomText>{paragraph_05}</CustomText>
        <Subtitle>{topic_03}</Subtitle>
        <CustomText>{paragraph_06}</CustomText>
        <Subtitle>{topic_04}</Subtitle>
        <CustomText>{paragraph_07}</CustomText>
        <CustomText size="small" type="text">
          {article}
        </CustomText>

        <Subtitle>{topic_05}</Subtitle>
        <CustomText>{paragraph_08}</CustomText>
        <CustomText>{paragraph_09}</CustomText>
        <CustomText>{paragraph_10}</CustomText>
        <CustomText>{paragraph_11}</CustomText>
        <Subtitle>{topic_06}</Subtitle>
        <CustomText>{paragraph_12}</CustomText>
        <Subtitle>{topic_07}</Subtitle>
        <CustomText>
          {paragraph_13_part1} <Strong>{accept}</Strong>
          {paragraph_13_part2}
        </CustomText>
      </Content>
      <Button
        center={false}
        type="gradient"
        size="small"
        onPress={onPressAccept}
        endIcon={<Icon name="like" size={40} color="#fff" />}
      >
        {accept_terms}
      </Button>
      <Button center={true} type="text" size="small" onPress={onPressReject}>
        {not_continue}
      </Button>
    </Wrapper>
  );
}
