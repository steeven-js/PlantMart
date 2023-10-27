import {memo, useContext} from 'react';
import {Text, TextInput as RNTextInput, View} from 'react-native';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import EyeOffSvg from '../../../assets/icons/svg/ic_eye_off.svg';
import styles from './styles';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';

// Functional component
const PasswordTextInput = ({label, placeholder}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <>
      {/* Text input label */}
      <Text style={[styles.textInputLabel, {color: theme.textHighContrast}]}>
        {label}
      </Text>

      <View style={styles.textInputWrapper}>
        {/* Text input */}
        <RNTextInput
          placeholder={placeholder}
          placeholderTextColor={theme.textLowContrast}
          style={[
            styles.textInput,
            {
              borderColor: theme.secondaryDark,
              backgroundColor: theme.secondary,
              color: theme.textHighContrast,
            },
          ]}
          secureTextEntry
        />

        {/* Eye icon wrapper */}
        <View style={styles.eyeIconWrapper}>
          <EyeOffSvg
            width={STANDARD_VECTOR_ICON_SIZE}
            height={STANDARD_VECTOR_ICON_SIZE}
          />
        </View>
      </View>
    </>
  );
};

// Exporting
export default memo(PasswordTextInput);
