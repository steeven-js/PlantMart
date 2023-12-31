import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_MD,
  POPPINS_MEDIUM,
  STANDARD_BORDER_RADIUS,
  STANDARD_BUTTON_HEIGHT,
} from '../../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  button: {
    height: STANDARD_BUTTON_HEIGHT,
    borderRadius: STANDARD_BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_MD,
  },
});
