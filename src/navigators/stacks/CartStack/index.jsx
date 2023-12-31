import {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {IndependentColors} from '../../../config/Colors';
import Cart from '../../../screens/Cart';
import Checkout from '../../../screens/Checkout';
import ArrowLeftWhiteSvg from '../../../assets/icons/svg/ic_arrow_left_white.svg';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import styles from '../styles';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import PaymentStatus from '../../../screens/PaymentStatus';
import PaymentMethods from '../../../screens/PaymentMethods';

// Creating stack navigator
const Stack = createStackNavigator();

// Cart stack
const CartStack = () => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Screen options
  const screenOptions = ({navigation}) => ({
    headerTitleAlign: 'center',
    headerTitleStyle: [styles.headerTitle],
    headerTintColor: IndependentColors.white,
    headerStyle: [
      {
        backgroundColor: theme.accent,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
    ],
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.leftArrowIcon}>
        <ArrowLeftWhiteSvg
          name="arrow-left"
          width={STANDARD_VECTOR_ICON_SIZE}
          height={STANDARD_VECTOR_ICON_SIZE}
        />
      </TouchableOpacity>
    ),
  });

  // Returning
  return (
    <Stack.Navigator initialRouteName="Cart" screenOptions={screenOptions}>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Payment Methods" component={PaymentMethods} />
      <Stack.Screen name="Payment Status" component={PaymentStatus} />
    </Stack.Navigator>
  );
};

// Exporting
export default CartStack;
