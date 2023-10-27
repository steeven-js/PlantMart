import {useContext, useState} from 'react';
import {View} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import * as Animatable from 'react-native-animatable';
import Button from '../../components/buttons/Button';
import TextInput from '../../components/inputs/TextInput';
import Link from '../../components/links/Link';
import ScreenInfo from '../../components/paragraphs/ScreenInfo';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import styles from './styles';
import Question from '../../components/paragraphs/Question';
import ScreenTitle from '../../components/headings/ScreenTitle';

// Functional component
const EmailVerification = ({navigation}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Local states
  const [otpText, setOtpText] = useState('');

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.accent}]}>
      {/* Form wrapper */}
      <Animatable.View
        animation="fadeInUp"
        delay={100}
        style={[styles.formWrapper, {backgroundColor: theme.primary}]}>
        {/* Screen title */}
        <Animatable.View animation="fadeInUp" delay={300}>
          <ScreenTitle title="Email verification" />
        </Animatable.View>

        {/* Screen info component */}
        <Animatable.View animation="fadeInUp" delay={500}>
          <ScreenInfo info="hey, enter your email to get verified. We'll send 5 digits One-Time-Password." />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />
        <View style={styles.verticalSpacer} />

        {/* Text input component */}
        <Animatable.View animation="fadeInUp" delay={700}>
          <TextInput label="Email" placeholder="Enter your email" />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* OTP TextView */}
        <Animatable.View animation="fadeInUp" delay={900}>
          <OTPTextView
            textInputStyle={[
              styles.otpTextView,
              {backgroundColor: theme.secondary},
            ]}
            tintColor={theme.accent}
            inputCount={4}
            handleTextChange={text => setOtpText(text)}
          />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Question & link component wrapper */}
        <Animatable.View
          animation="fadeInUp"
          delay={1100}
          style={styles.questionAndLinkWrapper1}>
          {/* Question component */}
          <Question question="Didn't get OTP?" />

          {/* Link component */}
          <Link label="Resend" />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Button component */}
        <Animatable.View animation="fadeInUp" delay={1300}>
          <Button label="Get OTP" />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Question & link component wrapper */}
        <Animatable.View
          animation="fadeInUp"
          delay={1500}
          style={styles.questionAndLinkWrapper2}>
          {/* Question component */}
          <Question question="Already have an account?" />

          {/* Link component */}
          <Link label="Login" onPress={() => navigation.navigate('Login')} />
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

// Exporting
export default EmailVerification;
