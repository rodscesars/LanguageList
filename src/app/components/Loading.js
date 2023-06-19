import * as React from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

const Loading = () => {
  const theme = useTheme();

  return (
    <View style={{ alignItems: 'center' }}>
      <Text
        variant="labelLarge"
        style={{ marginBottom: 10, color: theme.colors.secondary }}
      >
        Aguarde, estamos carregando os seus dados...
      </Text>
      <ActivityIndicator
        animating={true}
        color={theme.colors.primary}
        size="large"
      />
    </View>
  );
};

export default Loading;
