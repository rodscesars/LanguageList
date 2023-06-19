import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/features/store';
import { PaperProvider } from 'react-native-paper';
import Home from './src/app/screens/Home';
import { theme } from './themes/theme';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <StatusBar style="auto" backgroundColor="transparent" translucent />
          <Home />
        </View>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
