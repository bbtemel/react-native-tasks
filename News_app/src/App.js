import React from 'react';
import {SafeAreaView, StyleSheet, FlatList, Text} from 'react-native';
import NewsCard from './components/NewsCard/';
import NewsBanner from './components/NewsBanner/';

import news_data from './news_data.json';

const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => <NewsBanner />}
        keyExtractor={(item, index) => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
  },
});

export default App;
