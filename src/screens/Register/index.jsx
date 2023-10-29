import { useContext } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Button from '../../components/buttons/Button';
import TextInput from '../../components/inputs/TextInput';
import Link from '../../components/links/Link';
import Question from '../../components/paragraphs/Question';
import ScreenInfo from '../../components/paragraphs/ScreenInfo';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';
import ScreenTitle from '../../components/headings/ScreenTitle';

// Functional component
const Register = ({ navigation }) => {
  // Using context
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.mainWrapper, { backgroundColor: theme.accent }]}>
      {/* Form wrapper */}
      <Animatable.View
        animation="fadeInUp"
        delay={100}
        style={[styles.formWrapper, { backgroundColor: theme.primary }]}>
        {/* Screen title component */}
        <Animatable.View animation="fadeInUp" delay={300}>
          <ScreenTitle title="Inscription" />
        </Animatable.View>

        {/* Screen info component */}
        <Animatable.View animation="fadeInUp" delay={500}>
          <ScreenInfo info="Salut, saisissez vos informations de compte pour créer un nouveau compte client chez Plant Mart." />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />
        <View style={styles.verticalSpacer} />

        {/* Text input component */}
        <Animatable.View animation="fadeInUp" delay={700}>
          <TextInput
            label="Name"
            placeholder="Enter your name"
          />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Text input component */}
        <Animatable.View animation="fadeInUp" delay={900}>
          <TextInput
            label="Email"
            placeholder="Enter your email address" />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Text input component */}
        <Animatable.View animation="fadeInUp" delay={1100}>
          <TextInput
            label="Password"
            placeholder="Enter your password"
          />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Button component */}
        <Animatable.View animation="fadeInUp" delay={1300}>
          <Button
            label="Inscription"
            onPress={() => ''}
          />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Question & link component wrapper */}
        <Animatable.View
          animation="fadeInUp"
          delay={1500}
          style={styles.questionAndLinkWrapper}>
          {/* Question component */}
          <Question question="Vous avez déjà un compte ?" />

          {/* Login component */}
          <Link label="Login" onPress={() => navigation.goBack()} />
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

// Exporting
export default Register;
