import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  Switch,
  View,
} from 'react-native';

const data = [
  {id: 0, name: 'cafe.exe', isFavorite: true},
  {id: 1, name: 'KafaKafe', isFavorite: false},
  {id: 2, name: 'BugG', isFavorite: false},
  {id: 3, name: 'Rock`n Code', isFavorite: true},
  {id: 4, name: 'do(drink)', isFavorite: false},
  {id: 5, name: 'esc', isFavorite: false},
];

const App = () => {
  const [cafeList, setCafeList] = useState(data);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  useEffect(() => {
    console.log('liste degisti'), [cafeList];
  });

  function onFavoritesChange(isFavoriteSelected) {
    setShowOnlyFavorites(isFavoriteSelected);
    isFavoriteSelected
      ? setCafeList(cafeList.filter(cafe => cafe.isFavorite))
      : setCafeList(data);
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={{margin: 10}}>
        <Text>Show Only Favorites</Text>
        <Switch value={showOnlyFavorites} onValueChange={onFavoritesChange} />
      </View>
      <FlatList
        data={cafeList}
        renderItem={({item}) => <Text style={{fontSize: 25}}>{item.name}</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default App;
