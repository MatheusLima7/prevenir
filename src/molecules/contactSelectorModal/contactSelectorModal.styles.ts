import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #fff;
  padding: 16px;
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
