import {useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import CartData from '../../data/CartData';
import CartProduct from '../../components/cards/CartProduct';
import Button from '../../components/buttons/Button';
import HorizontalDivider from '../../components/dividers/HorizontalDivider';
import styles from './styles';
import {STANDARD_FLEX} from '../../config/Constants';

// Functional component
const Cart = ({navigation}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.primary}]}>
      {/* Scroll View */}
      <Animatable.View
        animation="fadeInUp"
        delay={100}
        style={{flex: STANDARD_FLEX}}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          {CartData.map((item, index) => (
            <View key={item.id}>
              {/* Cart product component */}
              <CartProduct
                productImage={item.productImage}
                productTitle={item.productTitle}
                productPrice={item.productPrice}
                productQuantity={item.productQuantity}
              />
            </View>
          ))}
        </ScrollView>
      </Animatable.View>

      {/* Cart total wrapper */}
      <Animatable.View
        animation="fadeInUp"
        delay={300}
        style={styles.cartTotalWrapper}>
        <Text style={[styles.cartTotalLabel, {color: theme.textHighContrast}]}>
          Cart total
        </Text>
        <Text style={[styles.cartTotal, {color: theme.textHighContrast}]}>
          $60.57
        </Text>
      </Animatable.View>

      {/* Horizontal divider component */}
      <Animatable.View animation="fadeInUp" delay={500}>
        <HorizontalDivider />
      </Animatable.View>

      {/* Button component */}
      <Animatable.View animation="fadeInUp" delay={700}>
        <Button
          label="Checkout"
          onPress={() => navigation.navigate('Checkout')}
        />
      </Animatable.View>
    </View>
  );
};

// Exporting
export default Cart;
