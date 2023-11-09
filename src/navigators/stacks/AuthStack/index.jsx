import {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../../screens/Login';
import Register from '../../../screens/Register';
import {IndependentColors} from '../../../config/Colors';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import ArrowLeftWhiteSvg from '../../../assets/icons/svg/ic_arrow_left_white.svg';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import styles from '../styles';
import EmailVerification from '../../../screens/EmailVerification';
import OtpVerification from '../../../screens/OtpVerification';

// Creating stack navigator
const Stack = createStackNavigator();

// Auth stack
const AuthStack = () => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Options
  const screenOptions = ({navigation}) => ({
    headerTitleAlign: 'center',
    headerTitleStyle: [styles.headerTitle],
    headerTintColor: IndependentColors.white,
    headerStyle: {
      backgroundColor: theme.accent,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
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
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OTP Verification" component={OtpVerification} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Email Verification" component={EmailVerification} />
    </Stack.Navigator>
  );
};

// Exporting
export default AuthStack;
