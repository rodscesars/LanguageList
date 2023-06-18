import * as React from 'react';
import { FlatList, Text, View } from 'react-native';
import { getResources } from '../../services/ResourceLoader';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectResources,
  setResources,
} from '../../../features/resources/resourcesSlice';

const useResourceLoader = () => {
  const [status, setStatus] = React.useState('loading');
  const dispatch = useDispatch();

  const loadResources = () => {
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

const renderItem = ({ item }) => (
  <View>
    <Text>{item.resource.resource_id}</Text>
    <Text>{item.resource.updated_at}</Text>
    <Text>{item.resource.value}</Text>
  </View>
);

export default function Home() {
  const { status, loadResources } = useResourceLoader();
  const resources = useSelector(selectResources);

  React.useEffect(() => {
    loadResources();
  }, []);

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }
  if (status === 'error') {
    return <Text>Oops!</Text>;
  }
  if (status === 'success') {
    return (
      <>
        <FlatList
          data={resources}
          renderItem={renderItem}
          ItemSeparatorComponent={<Text>------------</Text>}
        />
      </>
    );
  }
  throw new Error('invalid status');
}
