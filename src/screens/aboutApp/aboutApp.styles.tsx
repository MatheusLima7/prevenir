import Text from "@src/atoms/text";
import colors from "@src/theme/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import DeveloperImage from "@assets/10i9.png";

export const Wrapper = styled(SafeAreaView)`
  background-color: ${colors.lightBlue};
  flex: 1;
  padding: 25px 30px 50px 30px;
  position: relative;
`;

export const Content = styled.View`
  background-color: ${colors.white};
  padding: 20px;
  border-radius: 10px;
  flex: 1;

  shadow-color: ${colors.dark};
  shadow-offset: {
    width: 0px;
    height: 2px;
  }
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;

  elevation: 5;
`;

export const ScrollViewContent = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: "always",
  showsVerticalScrollIndicator: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { flexGrow: 1 },
})``;

export const Title = styled(Text).attrs({
  type: "title",
  size: "medium",
  color: "gray",
})`
  margin-bottom: 25px;
`;

export const Intro = styled(Text).attrs({
  type: "text",
  size: "small",
  color: "gray",
})`
  margin-bottom: 25px;
`;

export const Mission = styled(Text).attrs({
  type: "title",
  size: "small",
  color: "gray",
})`
  margin-bottom: 25px;
`;

export const MissionText = styled(Text).attrs({
  type: "text",
  size: "small",
  color: "gray",
})`
  margin-bottom: 25px;
`;

export const Resources = styled(Text).attrs({
  type: "title",
  size: "small",
  color: "gray",
})`
  margin-bottom: 25px;
`;

export const ListItem = styled(Text).attrs({
  type: "text",
  size: "small",
  color: "gray",
})``;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 60px;
`;

export const Developer = styled(Text).attrs({
  type: "text",
  size: "xMinSmall",
  color: "gray",
})``;

export const Image = styled.Image.attrs({
  source: DeveloperImage,
})`
  margin-left: 7px;
`;
