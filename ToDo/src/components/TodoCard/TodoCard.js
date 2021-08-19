import React from 'react';
import styles from './TodoCard.styles';
import {Pressable, View, Text} from 'react-native';

const TodoCard = props => {
  return (
    <View style={styles.card_container}>
      <Pressable
        onPress={props.handleFunction}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#fccf86' : '#f28c38',
          },
          props.empty ? styles.empty_pressable : styles.pressable,
        ]}
        disabled={props.empty}>
        {({pressed}) => <Text style={styles.pressable_text}>Kaydet</Text>}
      </Pressable>
    </View>
  );
};

export default TodoCard;
