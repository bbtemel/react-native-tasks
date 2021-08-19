import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
} from 'react-native';
import ContentCard from './components/ContentCard';

import store_content from './store_content.json';

const App = () => {
  const renderContent = ({item}) => <ContentCard content={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <FlatList
        ListHeaderComponent={() => {
          return (
            <TextInput
              style={styles.textinput}
              onChangeText={() => {}}
              value={'Ara...'}
            />
          );
        }}
        data={store_content}
        renderItem={renderContent}
        numColumns="2"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'purple',
  },
  textinput: {
    color: 'gray',
    backgroundColor: '#eceff1',
    margin: 10,
    marginBottom: 5,
    borderRadius: 10,
  },
});

export default App;
