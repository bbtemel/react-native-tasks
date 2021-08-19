import React from 'react';
import {ScrollView, Image} from 'react-native';
import news_banner from '../../news_banner_data.json';
import styles from './NewsBanner.style';

const NewsBanner = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {news_banner.map(bannerNews => (
        <Image
          style={styles.banner_image}
          source={{uri: bannerNews.imageUrl}}
        />
      ))}
    </ScrollView>
  );
};

export default NewsBanner;
