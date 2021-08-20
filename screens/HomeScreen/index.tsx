import * as React from 'react';

import styles from './styles'
import { ScrollView, FlatList } from 'react-native'
import categories from '../../assets/data/categories'
import HomeCategory from '../../components/HomeCategory';




const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/**List of categories */}
      <FlatList
        data={categories.items}
        renderItem={({ item }) => (
          <HomeCategory category={item} />
        )}
      />

    </ScrollView>
  );
}



export default HomeScreen;