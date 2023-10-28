import {useContext, useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable';
import CategoriesData from '../../data/CategoriesData';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import Category from '../../components/cards/Category';
import { categoryApiUrl } from '../../common/const';
import styles from './styles';

// Functional component
const Categories = ({navigation}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // UseState
  const [data, setData] = useState([]);

  // Fetching data
  const getCategories = async () => {
    try {
      const response = await fetch(categoryApiUrl);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  console.log('data', data)

  // useEffect
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
          data={data}
          bounces={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flatListContentContainerStyle}
          renderItem={({item}) => (
            <Category
              id={item.id}
              categoryImage={require('../../assets/images/categories/465_x_218.png')}
              categoryName={item.name}
              onPress={() => navigation.navigate('List View Products')}
            />
          )}
        />
      </Animatable.View>
    </View>
  );
};

// Exporting
export default Categories;
