import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    marginTop: 3,
    margin: 10,
    borderRadius: 10,
    height: Dimensions.get('window').height / 5 + 90,
    width: Dimensions.get('window').width / 3 + 50,
    flex: 10,
  },
  image: {
    height: Dimensions.get('window').height / 10,
    width: Dimensions.get('window').width / 3 + 25,
    borderRadius: 5,
    alignSelf: 'center',
    resizeMode: 'stretch',
    aspectRatio: 1,
    flex: 8,
    margin: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  price: {
    marginTop: 3,
    color: 'gray',
  },
  innerContainer: {
    padding: 5,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flex: 2,
  },
  stokyok: {
    color: 'red',
    fontWeight: 'bold',
  },
});
