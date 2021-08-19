import React, {useState} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';

import SearchBar from './components/SearchBar';
import TodoCard from './components/TodoCard';
import TodoList from './components/TodoList';

const App: () => Node = () => {
  const [counter, setCounter] = useState(0);
  const [doList, setdoList] = useState([]);
  const [searchText, setSearchedText] = useState('');
  const [idNum, setIdNum] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);
  const onPress = () => {
    setCounter(counter + 1);
    const newlist = doList;
    const newobj = {id: idNum, title: searchText};
    newlist.push(newobj);
    setIdNum(idNum + 1);
    setdoList(newlist);
  };

  const renderList = ({item}) => (
    <TodoList title={item.title} state={counter} useState={setCounter} />
  );
  const handleSearch = text => {
    if (!text) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      setSearchedText(text);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upper_container}>
        <Text style={styles.title}>YAPILACAKLAR</Text>
        <Text style={styles.counter}>{counter}</Text>
      </View>
      <View style={styles.middle_container}>
        <FlatList
          data={doList}
          renderItem={renderList}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.input_container}>
        <SearchBar onSearch={handleSearch} />
        <TodoCard handleFunction={onPress} empty={isEmpty} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#04211c'},
  upper_container: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f28c38',
  },
  counter: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f28c38',
  },
  middle_container: {flex: 1},
  input_container: {
    flex: 0.15,
    justifyContent: 'flex-end',
    margin: 10,
    marginBottom: 30,
    backgroundColor: '#d0d6d440',
    borderRadius: 10,
  },
});

export default App;
