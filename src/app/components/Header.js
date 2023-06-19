import * as React from 'react';
import { Appbar, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = () => {
  const theme = useTheme();
  return (
    <Appbar.Header statusBarHeight={170}>
      <Appbar.Content title="Lista de Traduções" />
      <Appbar.Action icon="leaf-circle" />
    </Appbar.Header>
  );
};

export default Header;
