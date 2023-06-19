import * as React from 'react';
import { Card, Text } from 'react-native-paper';

const CardList = ({ resource_id, updated_at, value }) => {
  let date = new Date(updated_at);
  const formattedDate = date.toLocaleString();

  return (
    <Card mode="elevated">
      <Card.Title title="Recurso:" subtitle={resource_id} />
      <Card.Content>
        <Text variant="bodyMedium" style={{ marginBottom: 10 }}>
          {'Valor: ' + value}
        </Text>
        <Text variant="bodyMedium">Última atualização: {formattedDate}</Text>
      </Card.Content>
    </Card>
  );
};

export default CardList;
