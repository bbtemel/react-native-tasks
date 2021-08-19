import React from 'react';
import styles from './SearchBar.style';
import {View, TextInput} from 'react-native';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Yapılacak..." onChangeText={props.onSearch} />
    </View>
  );
};

export default SearchBar;
