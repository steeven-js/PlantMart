import {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../../screens/Home';
import Categories from '../../../screens/Categories';
import ListViewProducts from '../../../screens/ListViewProducts';
import GridViewProducts from '../../../screens/GridViewProducts';
import Product from '../../../screens/Product';
import ProductReviews from '../../../screens/ProductReviews';
import {IndependentColors} from '../../../config/Colors';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import ArrowLeftWhiteSvg from '../../../assets/icons/svg/ic_arrow_left_white.svg';
import styles from '../styles';

// Creating stack navigator
const Stack = createStackNavigator();

// Home stack
const HomeStack = () => {
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
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="List View Products" component={ListViewProducts} />
      <Stack.Screen name="Grid View Products" component={GridViewProducts} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Product Reviews" component={ProductReviews} />
    </Stack.Navigator>
  );
};

// Exporting
export default HomeStack;
