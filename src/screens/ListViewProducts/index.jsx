import {useContext, useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import styles from './styles';
import ListViewProduct from '../../components/cards/ListViewProduct';
import ListViewProductsData from '../../data/ListViewProductsData';
import { getOneCategory } from '../../common/api';
import { useParams } from '@react-navigation/native';

const ListViewProducts = ({navigation, route}) => {
  // Using context
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // UseState
  const [category, setCategory] = useState(null);
  const [plantes, setPlantes] = useState(null);

  // UseParams
  const { id } = route.params;
  // console.log("useParams", id);

  const loadApiCat = async () => {
    if (id !== 0) {
      try {
        const response = await getOneCategory(id);
        setCategory(response.category);
        setPlantes(response.plantes);
        // console.log('response', response);
      } catch (error) {
        console.error('Error loading Category data:', error);
      }
    }
  }

  console.log('category', category)
  console.log('Plantes', plantes)

  // Call loadApiCat when the component mounts to load the category data
  useEffect(() => {
    loadApiCat();
  }, []);

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.primary}]}>
      {/* Scroll View */}
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContentContainerStyle}>
        <Animatable.View animation="fadeInUp" delay={100}>
          {plantes && plantes.map((item, index) => (
            <ListViewProduct
              key={index}
              id={item.id}
              productImage={require('../../assets/images/products/300_x_400.png')}
              productTitle={item.name}
              productPrice={item.price}
              onPress={() => navigation.navigate('Product Details', { id: item.id })}
            />
          ))}
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

// Exporting
export default ListViewProducts;
