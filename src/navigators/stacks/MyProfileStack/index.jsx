import {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import MyProfile from '../../../screens/MyProfile';
import Orders from '../../../screens/Orders';
import Order from '../../../screens/Order';
import Wishlist from '../../../screens/Wishlist';
import Coupons from '../../../screens/Coupons';
import Wallet from '../../../screens/Wallet';
import Notifications from '../../../screens/Notifications';
import Invoice from '../../../screens/Invoice';
import Addresses from '../../../screens/Addresses';
import Messages from '../../../screens/Messages';
import {IndependentColors} from '../../../config/Colors';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import ArrowLeftWhiteSvg from '../../../assets/icons/svg/ic_arrow_left_white.svg';
import styles from '../styles';

// Creating stack navigator
const Stack = createStackNavigator();

// My profile stack
const MyProfileStack = () => {
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
      <Stack.Screen name="My Profile" component={MyProfile} />
      <Stack.Screen name="Addresses" component={Addresses} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Invoice" component={Invoice} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="Coupons" component={Coupons} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
};

// Exporting
export default MyProfileStack;
