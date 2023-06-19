import * as React from 'react';
import {
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  View,
  SafeAreaView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getResources } from '../../services/ResourceLoader';
import {
  selectLanguageIds,
  selectModuleIds,
  selectResources,
  setResources,
} from '../../../features/resources/resourcesSlice';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import CardList from '../../components/Card';
import Separator from '../../components/Separator';
import ErrorView from '../../components/ErrorView';
import RNPickerSelect from 'react-native-picker-select';

const renderCard = ({ item }) => (
  <CardList
    resource_id={item.resource.resource_id}
    updated_at={item.resource.updated_at}
    value={item.resource.value}
  />
);

const useResourceLoader = () => {
  const [status, setStatus] = React.useState('loading');
  const dispatch = useDispatch();

  const loadResources = () => {
    setStatus('loading');
    getResources()
      .then((fileUri) => fetch(fileUri))
      .then((res) => res.json())
      .then((data) => {
        dispatch(setResources(data));
        setStatus('success');
      })
      .catch((err) => {
        console.log(err);
        setStatus('error');
      });
  };

  return {
    loadResources,
    status,
  };
};

export default function Home() {
  const { status, loadResources } = useResourceLoader();
  const resources = useSelector(selectResources);
  const languageIds = useSelector(selectLanguageIds);
  const moduleIds = useSelector(selectModuleIds);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedLanguage, setSelectedLanguage] = React.useState('');
  const [selectedModule, setSelectedModule] = React.useState('');

  React.useEffect(() => {
    loadResources();
  }, []);

  const languageOptions = languageIds.map((item) => ({
    label: item.toUpperCase(),
    value: item,
  }));

  const moduleOptions = moduleIds.map((item) => ({
    label: item.toUpperCase(),
    value: item,
  }));

  const filterResources = (resources, text, language_id, module_id) => {
    let filteredResources = resources;

    if (text || language_id || module_id) {
      filteredResources = resources.filter((item) => {
        if (language_id && item.resource.language_id !== language_id) {
          return false;
        }

        if (module_id && item.resource.module_id !== module_id) {
          return false;
        }

        if (
          text &&
          !item.resource.value.toLowerCase().includes(text.toLowerCase())
        ) {
          return false;
        }

        return true;
      });
    }

    return filteredResources;
  };

  const filteredResources = filterResources(
    resources,
    searchQuery,
    selectedLanguage,
    selectedModule,
  );

  if (status === 'loading') {
    return <Loading />;
  }
  if (status === 'error') {
    return <ErrorView loadResources={loadResources} />;
  }
  if (status === 'success') {
    return (
      <KeyboardAvoidingView behavior="padding">
        <SafeAreaView>
          <Header />
          <View style={styles.container}>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 5,
                justifyContent: 'center',
              }}
            >
              <RNPickerSelect
                items={languageOptions}
                value={selectedLanguage}
                onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
                placeholder={{ label: 'Selecione uma língua', value: null }}
                style={{
                  inputIOS: styles.inputStyle,
                  inputAndroid: styles.inputStyle,
                }}
              />
              <RNPickerSelect
                items={moduleOptions}
                value={selectedModule}
                onValueChange={(itemValue) => setSelectedModule(itemValue)}
                placeholder={{ label: 'Selecione um módulo', value: null }}
                style={{
                  inputIOS: styles.inputStyle,
                  inputAndroid: styles.inputStyle,
                }}
                useNativeAndroidPickerStyle={false}
              />
            </View>
            <FlatList
              style={{ padding: 20 }}
              data={filteredResources}
              renderItem={renderCard}
              keyExtractor={(item) =>
                `${item.resource.language_id}-${item.resource.module_id}-${item.resource.value}-${item.resource.updated_at}`
              }
              ItemSeparatorComponent={<Separator />}
            />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
  throw new Error('invalid status');
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
  },
  inputStyle: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    fontSize: 12,
    color: 'black',
    margin: 5,
    width: 140,
  },
});
