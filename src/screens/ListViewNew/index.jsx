import {useContext, useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import styles from './styles';
import ListViewProduct from '../../components/cards/ListViewProduct';
import ListViewProductsData from '../../data/ListViewProductsData';
import {newArrivalsApiUrl} from '../../common/const';

// Functional component
const ListViewNew = ({navigation}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  const [newArrivals, setNewArrivals] = useState([]);

  // Fetching new arrivals
  const getNewArrivals = async () => {
    try {
      const response = await fetch(newArrivalsApiUrl);
      const json = await response.json();
      setNewArrivals(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNewArrivals();
  }, [])
  

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.primary}]}>
      {/* Scroll View */}
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContentContainerStyle}>
        <Animatable.View animation="fadeInUp" delay={100}>
          {newArrivals.map((item, index) => (
            <View key={item.id}>
              {/* newArrivals card component */}
              <ListViewProduct
                productImage={require('../../assets/images/products/300_x_400.png')}
                productTitle={item.name}
                isLastItem={
                  ListViewProductsData.length === index + 1 ? true : false
                }
                onPress={() => navigation.navigate('Product', { id: item.id })}
              />
            </View>
          ))}
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

// Exporting
export default ListViewNew;
