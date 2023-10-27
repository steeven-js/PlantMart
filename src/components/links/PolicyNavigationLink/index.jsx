import {memo, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import FileSvg from '../../../assets/icons/svg/ic_file_dark_green.svg';
import ArrowRightSvg from '../../../assets/icons/svg/ic_arrow_right_dark_green.svg';
import styles from './styles';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';

// Functional component
const NavigationLink = ({label, borderBottomColor, onPress}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Getting theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <TouchableOpacity
      style={[styles.link, {borderBottomColor}]}
      onPress={onPress}>
      <View style={styles.leftIconAndLinkLabelWrapper}>
        <View
          style={[styles.leftIconWrapper, {backgroundColor: theme.primary}]}>
          <FileSvg
            width={STANDARD_VECTOR_ICON_SIZE}
            height={STANDARD_VECTOR_ICON_SIZE}
          />
        </View>
        <Text style={[styles.linkLabel, {color: theme.textHighContrast}]}>
          {label}
        </Text>
      </View>
      <ArrowRightSvg
        width={STANDARD_VECTOR_ICON_SIZE}
        height={STANDARD_VECTOR_ICON_SIZE}
      />
    </TouchableOpacity>
  );
};

// Exporting
export default memo(NavigationLink);
