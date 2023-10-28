import { useContext, useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';
import ListViewProduct from '../../components/cards/ListViewProduct';
import ListViewProductsData from '../../data/ListViewProductsData';
import { getOneCategory } from '../../common/api';
import { useParams } from '@react-navigation/native';

const ListViewProducts = ({ navigation, route }) => {
  // Using context
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // UseState
  const [category, setCategory] = useState(null);
  const [plantes, setPlantes] = useState(null);

  // UseParams
  const { id } = route.params;
  // console.log("route.params", id);

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

  // console.log('category', category)
  // console.log('Plantes', plantes)

  // useEffect
  useEffect(() => {
    loadApiCat();
  }, []);

  // Returning
  return (
    <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
      {/* Scroll View */}
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContentContainerStyle}>
        {category && category.name ? <Text>{category.name}</Text> : null}
        <Animatable.View animation="fadeInUp" delay={100}>
          {plantes && plantes.length > 0 ? (
            plantes.map((item, index) => (
              <ListViewProduct
                key={index}
                id={item.id}
                productImage={require('../../assets/images/products/300_x_400.png')}
                productTitle={item.name}
                productPrice={item.price}
                onPress={() => navigation.navigate('Product', { id: item.id })}
              />
            ))
          ) : (
            <Text>Aucune plante liée à cette spécialité.</Text>
          )}
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

// Exporting
export default ListViewProducts;
