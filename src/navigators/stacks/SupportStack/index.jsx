import {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {IndependentColors} from '../../../config/Colors';
import ArrowLeftWhiteSvg from '../../../assets/icons/svg/ic_arrow_left_white.svg';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import Support from '../../../screens/Support';
import Chats from '../../../screens/Chats';
import ContactUs from '../../../screens/ContactUs';
import Faqs from '../../../screens/Faqs';
import styles from '../styles';

// Creating stack navigator
const Stack = createStackNavigator();

// Support stack
const SupportStack = () => {
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
      <Stack.Screen name="Help & Support" component={Support} />
      <Stack.Screen
        name="Chats"
        component={Chats}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="Faqs" component={Faqs} />
    </Stack.Navigator>
  );
};

// Exporting
export default SupportStack;
