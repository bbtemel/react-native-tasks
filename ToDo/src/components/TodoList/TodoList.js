import React, {useState} from 'react';
import styles from './TodoList.style';
import {Pressable, View, Text} from 'react-native';

const TodoList = props => {
  const [isPressed, setIsPressed] = useState(false);
  const onClick = () => {
    setIsPressed(!isPressed);
    if (isPressed === true) {
      props.useState(props.state + 1);
    } else if (isPressed === false) {
      props.useState(props.state - 1);
    }
  };
  return (
    <View style={styles.card_container}>
      <Pressable
        onPress={onClick}
        style={isPressed ? styles.pressed : styles.pressable}>
        <Text style={isPressed ? styles.pressed_text : styles.pressable_text}>
          {props.title}
        </Text>
      </Pressable>
    </View>
  );
};

export default TodoList;
