import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './ContentCard.style';

const ContentCard = ({content}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: content.imgURL}} />
      <Text style={styles.title}>{content.title}</Text>
      <View style={styles.innerContainer}>
        {content.inStock === true ? (
          <Text style={styles.price}>{content.price}</Text>
        ) : (
          <Text style={styles.price}>
            {content.price}
            <Text style={styles.stokyok}>{'\n'}STOKTA YOK</Text>
          </Text>
        )}
      </View>
    </View>
  );
};
export default ContentCard;
