import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card_container: {
    flex: 1,
  },
  pressable: {
    backgroundColor: '#4e9100',
    opacity: 1,
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    marginTop: 3,
    margin: 10,
  },
  pressed: {
    backgroundColor: '#d6d6d640',
    opacity: 1,
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    marginTop: 3,
    margin: 10,
  },
  pressable_text: {
    color: 'white',
  },
  pressed_text: {
    textDecorationLine: 'line-through',
    color: 'white',
    opacity: 0.4,
  },
});
