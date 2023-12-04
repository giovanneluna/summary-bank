import styled, { useTheme } from "styled-components/native";

export const Box = styled.View`
  border: 2px solid ${({ color }) => color};
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: column;
  width: 75%;
`;
export const Title = styled.Text`
  font-size: 22px;
  color: ${() => useTheme().COLORS.WHITE};
`;
export const Description = styled.Text`
  font-size: 18px;
  color: ${() => useTheme().COLORS.WHITE};
`;
export const Value = styled.Text`
  font-size: 16px;
  color: ${() => useTheme().COLORS.WHITE};
  margin-top: 12px;
  justify-content: flex-end;
`;
