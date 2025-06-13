import Text from "@src/atoms/text";
import colors from "@src/theme/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import LockImg from "@assets/lock.png";
import Icon from "@react-native-vector-icons/fontawesome6";
import Button from "@src/atoms/button";

export const Wrapper = styled(SafeAreaView)`
  background-color: ${colors.lightBlue};
  flex: 1;
  padding: 40px 10px 50px 10px;
  position: relative;
  justify-content: space-between;
`;

export const Header = styled.View`
  padding: 0 30px;
`;

export const LockIcon = styled.Image.attrs({
  source: LockImg,
})`
  margin-right: 15px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 35px;
`;

export const Title = styled(Text).attrs({
  size: "large",
  type: "title",
  color: "gray",
})``;

export const TextContent = styled.Text`
  margin-bottom: 24px;
`;

export const Paragraph = styled(Text).attrs({
  size: "small",
  type: "text",
  color: "gray",
})`
  margin-bottom: 25px;
`;

export const Strong = styled(Text).attrs({
  center: true,
  size: "small",
  type: "title",
  color: "blue",
})`
  margin-bottom: 25px;
`;

export const IconArrowRight = styled(Icon).attrs({
  name: "chevron-right",
  size: 20,
  color: colors.white,
  iconStyle: "solid",
})``;

export const CustomButton = styled(Button).attrs({
  type: "gradient",
  size: "small",
})``;

export const WrapperButton = styled.View`
  margin: 0 25px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 3px 6px;
`;
