import { Box, Description, Row, Title, Value } from "./styles";

interface MovimentationCardProps {
  name: string;
  description: string;
  value: number;
  type: boolean;
}

export function MovimentationCard({
  name,
  description,
  value,
  type,
}: MovimentationCardProps) {
  const color = type === true ? "#00875F" : "#AA2834";

  return (
    <Box color={color}>
      <Row>
        <Title>{name}</Title>
        <Description>{description}</Description>
      </Row>
      <Value>R$ {value}</Value>
    </Box>
  );
}
