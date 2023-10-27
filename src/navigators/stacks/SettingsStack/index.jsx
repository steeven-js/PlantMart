import {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Settings from '../../../screens/Settings';
import Languages from '../../../screens/Languages';
import styles from '../styles';
import {IndependentColors} from '../../../config/Colors';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import EditProfile from '../../../screens/EditProfile';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import ArrowLeftWhiteSvg from '../../../assets/icons/svg/ic_arrow_left_white.svg';
import NotificationSettings from '../../../screens/NotificationSettings';
import ResetPassword from '../../../screens/ResetPassword';

// Creating stack navigator
const Stack = createStackNavigator();

// Settings stack
const SettingsStack = () => {
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
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Edit Profile" component={EditProfile} />
      <Stack.Screen name="Reset Password" component={ResetPassword} />
      <Stack.Screen
        name="Notification Settings"
        component={NotificationSettings}
      />
      <Stack.Screen name="Languages" component={Languages} />
    </Stack.Navigator>
  );
};

// Exporting
export default SettingsStack;
