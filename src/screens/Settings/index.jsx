import {useCallback, useContext, useState} from 'react';
import {ScrollView, View} from 'react-native';
import BellDarkGreen from '../../assets/icons/svg/ic_bell_dark_green.svg';
import ChatDarkGreen from '../../assets/icons/svg/ic_chat_dark_green.svg';
import LockDarkGreen from '../../assets/icons/svg/ic_lock_dark_green.svg';
import EditDarkGreen from '../../assets/icons/svg/ic_edit_dark_green.svg';
import SoundDarkGreen from '../../assets/icons/svg/ic_sound_dark_green.svg';
import MikeDarkGreen from '../../assets/icons/svg/ic_mike_dark_green.svg';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import SectionTitle from '../../components/headings/SectionTitle';
import {STANDARD_VECTOR_ICON_SIZE} from '../../config/Constants';
import NavigationLink from '../../components/links/NavigationLink';
import styles from './styles';
import SwitchList from '../../components/switches/SwitchList';
import {IndependentColors} from '../../config/Colors';

// Functional component
const Settings = ({navigation}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme, _toggleTheme} =
    useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Local states

  const [isThemeSwitchOn, setIsThemeSwitchOn] = useState(false);

  const _toggleThemeSwitch = useCallback(() => {
    // Updating local state value
    setIsThemeSwitchOn(previousState => !previousState);
    // Calling function to toggling theme mode(Light & Dark)
    _toggleTheme();
  }, [isThemeSwitchOn]);

  // Constants
  const Track_Active_Color = theme.accent;
  const Track_Inactive_Color = theme.accentLightest;
  const Thumb_Active_Color = IndependentColors.white;
  const Thumb_Inactive_Color = theme.secondary;

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.primary}]}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContentContainerStyle}>
        {/* Section title component */}
        <SectionTitle title="Account" />

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Navigation link component */}
        <NavigationLink
          leftIcon={
            <EditDarkGreen
              width={STANDARD_VECTOR_ICON_SIZE}
              height={STANDARD_VECTOR_ICON_SIZE}
            />
          }
          label="Edit profile"
          onPress={() => navigation.navigate('Edit Profile')}
        />

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Navigation link component */}
        <NavigationLink
          leftIcon={
            <LockDarkGreen
              width={STANDARD_VECTOR_ICON_SIZE}
              height={STANDARD_VECTOR_ICON_SIZE}
            />
          }
          label="Reset password"
          onPress={() => navigation.navigate('Reset Password')}
        />

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Navigation link component */}
        <NavigationLink
          leftIcon={
            <LockDarkGreen
              width={STANDARD_VECTOR_ICON_SIZE}
              height={STANDARD_VECTOR_ICON_SIZE}
            />
          }
          label="Languages"
          onPress={() => navigation.navigate('Languages')}
        />

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Section title component */}
        <SectionTitle title="Messaging" />

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Navigation link component */}
        <NavigationLink
          leftIcon={
            <BellDarkGreen
              width={STANDARD_VECTOR_ICON_SIZE}
              height={STANDARD_VECTOR_ICON_SIZE}
            />
          }
          label="Notifications"
          onPress={() => navigation.navigate('Notification Settings')}
        />

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Navigation link component */}
        <NavigationLink
          leftIcon={
            <ChatDarkGreen
              width={STANDARD_VECTOR_ICON_SIZE}
              height={STANDARD_VECTOR_ICON_SIZE}
            />
          }
          label="Chat"
        />

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Section title component */}
        <SectionTitle title="Media" />

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Navigation link component */}
        <NavigationLink
          leftIcon={
            <SoundDarkGreen
              width={STANDARD_VECTOR_ICON_SIZE}
              height={STANDARD_VECTOR_ICON_SIZE}
            />
          }
          label="Sound"
        />

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Navigation link component */}
        <NavigationLink
          leftIcon={
            <MikeDarkGreen
              width={STANDARD_VECTOR_ICON_SIZE}
              height={STANDARD_VECTOR_ICON_SIZE}
            />
          }
          label="Voice"
        />

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Section title component */}
        <SectionTitle title="Appearance" />

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Switch list */}
        <SwitchList
          label="App Theme"
          labelInfo={`Switch to ${isLightTheme ? 'dark' : 'light'} mode.`}
          trackActiveColor={Track_Active_Color}
          trackInactiveColor={Track_Inactive_Color}
          thumbActiveColor={Thumb_Active_Color}
          thumbInactiveColor={Thumb_Inactive_Color}
          onValueChange={_toggleThemeSwitch}
          value={isThemeSwitchOn}
        />
      </ScrollView>
    </View>
  );
};

// Exporting
export default Settings;
