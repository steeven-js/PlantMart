import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useContext} from 'react';
import {scale} from 'react-native-size-matters';
import HomeStack from '../../stacks/HomeStack';
import CartStack from '../../stacks/CartStack';
import MyProfileStack from '../../stacks/MyProfileStack';
import SettingsStack from '../../stacks/SettingsStack';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import HomeLightGreenSvg from '../../../assets/icons/svg/ic_home_light_green.svg';
import HomeDarkGreenSvg from '../../../assets/icons/svg/ic_home_dark_green.svg';
import BagLightGreenSvg from '../../../assets/icons/svg/ic_bag_light_green.svg';
import BagDarkGreenSvg from '../../../assets/icons/svg/ic_bag_dark_green.svg';
import PersonLightGreenSvg from '../../../assets/icons/svg/ic_person_light_green.svg';
import PersonDarkGreenSvg from '../../../assets/icons/svg/ic_person_dark_green.svg';
import GearLightGreenSvg from '../../../assets/icons/svg/ic_gear_light_green.svg';
import GearDarkGreenSvg from '../../../assets/icons/svg/ic_gear_dark_green.svg';
import styles from './styles';

// Creating bottom tab navigator
const Tab = createBottomTabNavigator();

// Home bottom tab navigator
const HomeBottomTab = () => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Screen options
  const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      borderTopWidth: 0,
      backgroundColor: theme.primary,
      elevation: 0,
      height: scale(50),
    },
  };

  // Returning
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home Stack"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <HomeDarkGreenSvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ) : (
              <HomeLightGreenSvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Cart Stack"
        component={CartStack}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <BagDarkGreenSvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ) : (
              <BagLightGreenSvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ),
          tabBarBadge: 2,
          tabBarBadgeStyle: [
            styles.tabBarBadgeStyle,
            {backgroundColor: theme.accent},
          ],
        }}
      />
      <Tab.Screen
        name="My Profile Stack"
        component={MyProfileStack}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <PersonDarkGreenSvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ) : (
              <PersonLightGreenSvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Settings Stack"
        component={SettingsStack}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <GearDarkGreenSvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ) : (
              <GearLightGreenSvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

// Exporting
export default HomeBottomTab;
