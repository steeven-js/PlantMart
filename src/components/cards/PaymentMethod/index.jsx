import {memo, useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import SvgCheckmarkWhite from '../../../assets/icons/svg/ic_checkmark_white.svg';
import SvgCheckmarkBlack from '../../../assets/icons/svg/ic_checkmark_black.svg';
import styles from './styles';

// Functional component
const PaymentMethod = ({iconSvg, label, isChecked}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <TouchableOpacity
      style={[
        styles.paymentMethodCard,
        {
          backgroundColor: isChecked ? theme.accentLightest : theme.secondary,
          borderColor: isChecked ? theme.accent : theme.secondaryDark,
        },
      ]}>
      {/* Icon & label wrapper */}
      <View style={styles.iconSvgAndLabelWrapper}>
        <View style={styles.iconSvgWrapper}>{iconSvg}</View>
        <Text
          style={[
            styles.label,
            {color: isChecked ? theme.textHighContrast : theme.textLowContrast},
          ]}>
          {label}
        </Text>
      </View>

      {/* Checkbox */}
      <View
        style={[
          styles.checkedIconWrapper,
          {backgroundColor: isChecked ? theme.accent : theme.primary},
          {borderColor: isChecked ? theme.accent : theme.secondaryDark},
        ]}>
        {isLightTheme ? (
          <SvgCheckmarkWhite
            width={STANDARD_VECTOR_ICON_SIZE * 0.5}
            height={STANDARD_VECTOR_ICON_SIZE * 0.5}
          />
        ) : (
          <SvgCheckmarkBlack
            width={STANDARD_VECTOR_ICON_SIZE * 0.5}
            height={STANDARD_VECTOR_ICON_SIZE * 0.5}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

// Exporting
export default memo(PaymentMethod);
