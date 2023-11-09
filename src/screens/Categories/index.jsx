import {useContext, useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable';
import CategoriesData from '../../data/CategoriesData';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import { categoryApiUrl } from '../../common/const';
import Category from '../../components/cards/Category';
import styles from './styles';

// Functional component
const Categories = ({navigation}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  const [category, setCategory] = useState([]);

  // Fetching data
  const getCategories = async () => {
    try {
      const response = await fetch(categoryApiUrl);
      const json = await response.json();
      setCategory(json);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    getCategories();
  }, [])
  

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.primary}]}>
      {/* Flatlist */}
      <Animatable.View
        animation="fadeInUp"
        delay={100}
        style={styles.flatListWrapper}>
        <FlatList
          data={category}
          bounces={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flatListContentContainerStyle}
          renderItem={({item}) => (
            <Category
              id={item.id}
              categoryImage={require('../../assets/images/products/300_x_400.png')}
              categoryName={item.name}
              onPress={() => navigation.navigate('List View plants By Categories', {id: item.id})}
            />
          )}
        />
      </Animatable.View>
    </View>
  );
};

// Exporting
export default Categories;
