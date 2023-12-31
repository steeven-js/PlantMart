import {useContext} from 'react';
import {View, Text} from 'react-native';
import Lottie from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import styles from './styles';
import Button from '../../components/buttons/Button';
import ScreenTitle from '../../components/headings/ScreenTitle';

// Functional component
const ScanAndPay = () => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <Animatable.View
      animation="fadeInUp"
      delay={100}
      style={[styles.mainWrapper, {backgroundColor: theme.primary}]}>
      {/* Screen header component */}
      <Animatable.View animation="fadeInUp" delay={300}>
        <ScreenHeader />
      </Animatable.View>

      {/* Screen title component */}
      <Animatable.View animation="fadeInUp" delay={500}>
        <ScreenTitle title="Scan & pay" />
      </Animatable.View>

      {/* Vertical spacer */}
      <View style={styles.verticalSpacer} />

      {/* Scanner wrapper */}
      <Animatable.View
        animation="fadeInUp"
        delay={700}
        style={styles.scannerWrapper}>
        {/* Lottie view */}
        <Lottie
          source={require('../../assets/lottie/qr_scanner.json')}
          autoPlay
          loop
          style={styles.lottieFile}
        />

        {/* Qr code scan info */}
        <Animatable.Text
          animation="fadeInUp"
          delay={900}
          style={[styles.scanInfo, {color: theme.textLowContrast}]}>
          Click on the button below to start scanning the QR Code to pay.
        </Animatable.Text>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />
        <View style={styles.verticalSpacer} />

        {/* Button component */}
        <Animatable.View animation="fadeInUp" delay={1100}>
          <Button label="Scan QR code" />
        </Animatable.View>
      </Animatable.View>
    </Animatable.View>
  );
};

// Exporting
export default ScanAndPay;
