import {memo, useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import SvgPhoneDarkGreen from '../../../assets/icons/svg/ic_phone_dark_green.svg';
import SvgChatDarkGreen from '../../../assets/icons/svg/ic_chat_dark_green.svg';
import {
  STANDARD_SPACING,
  STANDARD_VECTOR_ICON_SIZE,
} from '../../../config/Constants';
import styles from './styles';

// Functional component
const ContactCard = ({
  avatar,
  badgeBackgroundColor,
  badgeCharacter,
  contactName,
  contactNumber,
  borderBottomWidth,
}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Getting theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View
      style={[
        styles.contactWrapper,
        {borderBottomWidth, borderBottomColor: theme.secondary},
      ]}>
      {/* Left content wrapper */}
      <View style={styles.leftContentWrapper}>
        {/* Avatar wrapper */}
        <View style={styles.avatarWrapper}>
          {/* Avatar image wrapper */}
          <View style={styles.avatarImageWrapper}>
            {/* Avatar image */}
            <Image source={avatar} style={styles.avatarImage} />
          </View>

          {/* Avatar badge container */}
          <View
            style={[
              styles.avatarImageBadgeWrapper,
              {
                backgroundColor: badgeBackgroundColor,
                borderColor: theme.primary,
              },
            ]}>
            {/* Badge character */}
            <Text style={styles.avatarImageBadgeCharacter}>
              {badgeCharacter}
            </Text>
          </View>
        </View>

        {/* Name & number wrapper */}
        <View style={styles.nameAndNumberWrapper}>
          {/* Name */}
          <Text style={[styles.name, {color: theme.textHighContrast}]}>
            {contactName}
          </Text>

          {/* Number */}
          <Text style={[styles.number, {color: theme.textLowContrast}]}>
            {contactNumber}
          </Text>
        </View>
      </View>

      {/* Right content wrapper */}
      <View style={styles.rightContentWrapper}>
        {/* Call icon wrapper */}
        <TouchableOpacity
          style={[
            styles.actionIconWrapper,
            {
              backgroundColor: theme.secondary,
              marginEnd: STANDARD_SPACING * 2,
            },
          ]}
          onPress={() => alert('You have just clicked on Call icon.')}>
          <SvgPhoneDarkGreen
            width={STANDARD_VECTOR_ICON_SIZE}
            height={STANDARD_VECTOR_ICON_SIZE}
          />
        </TouchableOpacity>

        {/* Message icon wrapper */}
        <TouchableOpacity
          style={[styles.actionIconWrapper, {backgroundColor: theme.secondary}]}
          onPress={() => alert('You have just clicked on Message icon.')}>
          <SvgChatDarkGreen
            width={STANDARD_VECTOR_ICON_SIZE}
            height={STANDARD_VECTOR_ICON_SIZE}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Exporting
export default memo(ContactCard);
