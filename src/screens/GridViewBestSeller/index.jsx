import { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import { STANDARD_SPACING } from '../../config/Constants';
import { FlatGrid } from 'react-native-super-grid';
import { scale } from 'react-native-size-matters';
import GridViewProductsData from '../../data/GridViewProductsData';
import GridViewProduct from '../../components/cards/GridViewProduct';
import { bestSellerApiUrl } from '../../common/const'
import styles from './styles';

// Functional component
const GridViewBestSeller = ({ navigation }) => {
  // Using context
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  const [bestSeller, setBestSeller] = useState();

  // Fetching data
  const getBestSeller = async () => {
    try {
      const response = await fetch(bestSellerApiUrl);
      const json = await response.json();
      setBestSeller(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBestSeller();
  }, [])

  // Returning
  return (
    <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
      {/* Flatgrid wrapper */}
      <Animatable.View
        animation="fadeInUp"
        delay={100}
        style={styles.flatGridWrapper}>
        {/* Flatgrid */}
        <FlatGrid
          itemDimension={scale(130)}
          data={bestSeller}
          style={styles.flatGrid}
          spacing={STANDARD_SPACING * 3}
          bounces={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GridViewProduct
              productImage={require('../../assets/images/products/300_x_400.png')}
              productTitle={item.name}
            />
          )}
        />
      </Animatable.View>
    </View>
  );
};

// Exporting
export default GridViewBestSeller;
