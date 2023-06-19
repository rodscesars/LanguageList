import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

const ErrorView = ({ loadResources }) => {
  const theme = useTheme();

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ marginBottom: 5, color: theme.colors.secondary }}>
        Oops, ocorreu um erro!
      </Text>
      <Button
        mode="contained"
        buttonColor={theme.colors.error}
        onPress={() => {
          loadResources();
        }}
      >
        Tentar novamente
      </Button>
    </View>
  );
};

export default ErrorView;
