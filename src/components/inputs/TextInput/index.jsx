import {memo, useContext} from 'react';
import {Text, TextInput as RNTextInput} from 'react-native';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const TextInput = ({label, placeholder, value, text}) => {
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
      {/* Text input */}
      <RNTextInput
        placeholder={placeholder}
        placeholderTextColor={theme.textLowContrast}
        value={value}
        onchangeText={text}
        style={[
          styles.textInput,
          {
            borderColor: theme.secondaryDark,
            backgroundColor: theme.secondary,
            color: theme.textHighContrast,
          },
        ]}
      />
    </>
  );
};

// Exporting
export default memo(TextInput);
