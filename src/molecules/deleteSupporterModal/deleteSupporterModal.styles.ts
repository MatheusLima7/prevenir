import Text from "@src/atoms/text";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #fff;
  padding: 20px 25px;
  border-radius: 12px;
  max-height: 80%;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  text-align: center;
`;

export const Item = styled.TouchableOpacity`
  padding-vertical: 10px;
  border-bottom-width: 0.5px;
  border-color: #ccc;
`;

export const Name = styled.Text`
  font-size: 16px;
`;

export const Phone = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const Actions = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const HighlightedText = styled(Text).attrs({
  color: "darkDanger",
  size: "small",
  type: "boldTitle",
  center: true,
})`
  margin-top: 15px;
  margin-bottom: 27px;
`;

export const DeleteButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 125;
`;

export const CancelButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const DeleteBackgroundButton = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 10px;
`;
