import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Searchbar
      style={{ marginBottom: 12 }}
      placeholder="Pesquisar"
      onChangeText={(text) => setSearchQuery(text)}
      value={searchQuery}
    />
  );
};

export default SearchBar;
