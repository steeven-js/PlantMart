import { useContext, useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import Button from '../../components/buttons/Button';
import TextInput from '../../components/inputs/TextInput';
import Link from '../../components/links/Link';
import ScreenInfo from '../../components/paragraphs/ScreenInfo';
import OrDivider from '../../components/dividers/OrDivider';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import FacebookSvg from '../../assets/icons/svg/ic_facebook.svg';
import TwitterSvg from '../../assets/icons/svg/ic_twitter.svg';
import GoogleSvg from '../../assets/icons/svg/ic_google.svg';
import CloseSvg from '../../assets/icons/svg/ic_close_dark_green.svg';
import {
  STANDARD_SOCIAL_ICON_SIZE,
  STANDARD_VECTOR_ICON_SIZE,
} from '../../config/Constants';
import Question from '../../components/paragraphs/Question';
import PasswordTextInput from '../../components/inputs/PasswordTextInput';
import ScreenTitle from '../../components/headings/ScreenTitle';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  webClientId: '952998531433-8fg72jtgatve7746f12papsgj75m31ab.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: '', // specifies a hosted domain restriction
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: '', // [Android] specifies an account name on the device that should be used
  iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

// Functional component
const Login = ({ navigation }) => {
  // Using context
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Local states
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Toggling call request modal
  const toggleModal = () => {
    // Updating states
    setIsModalVisible(prevState => !prevState);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigation = useNavigation()

  const goToHome = () => {
    navigation.navigate('Home')
  }

  // console.log('email', email, 'password', password);

  const connexion = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password)
      // console.log('email', email, 'password', password);
      setEmail('');
      setPassword('');
      // Redirection
      goToHome();
    } catch (error) {
      console.log('error', error)
    }
  };

  const isSignedIn = async () => {
    const isSignedInState = await GoogleSignin.isSignedIn();
    console.log('isSignedIn :', isSignedInState);
    // setState({ isLoginScreenPresented: !isSignedIn });
  };

  const onGoogleButtonPress = async () => {
    try {
      console.log('Vérification des services Google Play...');
      await GoogleSignin.hasPlayServices();
      console.log('Services Google Play disponibles.');

      console.log('Lancement de la connexion Google...');
      const userInfo = await GoogleSignin.signIn();
      // console.log('Connexion Google réussie. UserInfo :', userInfo, "GoogleSignin : ", GoogleSignin.getTokens());

      // const token = await GoogleSignin.getTokens();
      // console.log('token :', token.idToken)

      // Obtenir le jeton d'identification de l'utilisateur
      const { idToken } = userInfo;

      // Créer une authentification Google avec le jeton
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // console.log('googleCredential :', googleCredential);

      console.log('Connexion à Firebase avec l\'authentification Google...');
      // Connecter l'utilisateur avec l'authentification
      await auth().signInWithCredential(googleCredential);

      console.log('Connexion réussie !');
    } catch (error) {
      console.error('Erreur lors de la connexion avec Google :', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('L\'utilisateur a annulé le flux de connexion.');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('L\'opération (par exemple, la connexion) est déjà en cours.');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Les services Google Play ne sont pas disponibles ou obsolètes.');
      } else {
        console.error('Une autre erreur s\'est produite.', error);
      }
    }

    goToHome();
  };

  signOut = async () => {
    try {
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    isSignedIn();
  }, [])

  // Returning
  return (
    <View style={[styles.mainWrapper, { backgroundColor: theme.accent }]}>
      {/* Form wrapper */}
      <Animatable.View
        animation="fadeInUp"
        delay={100}
        style={[styles.formWrapper, { backgroundColor: theme.primary }]}>
        {/* Screen title */}
        <Animatable.View animation="fadeInUp" delay={300}>
          <ScreenTitle title="Login" />
        </Animatable.View>

        {/* Screen info component */}
        <Animatable.View animation="fadeInUp" delay={500}>
          <ScreenInfo info="hey, enter your account details to get log in to your account." />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />
        <View style={styles.verticalSpacer} />

        {/* Text input component */}
        <Animatable.View animation="fadeInUp" delay={700}>
          <TextInput
            label="Email"
            placeholder="Enter your email"
            onChangeText={setEmail}
            value={email}
          />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Password text input component */}
        <Animatable.View animation="fadeInUp" delay={900}>
          <PasswordTextInput
            label="Password"
            placeholder="Enter your password"
            onChangeText={setPassword}
            value={password}
          />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Link component */}
        <Animatable.View animation="fadeInUp" delay={1100}>
          <Link label="Forgot password?" onPress={toggleModal} />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Button component */}
        <Animatable.View animation="fadeInUp" delay={1300}>
          <Button
            label="Login"
            onPress={connexion}
          />
        </Animatable.View>

        {/* Or divider component */}
        <Animatable.View animation="fadeInUp" delay={1500}>
          <OrDivider label="or login with" />
        </Animatable.View>

        {/* Social media icons wrapper */}
        <View style={styles.socialMediaIconsWrapper}>
          <Animatable.View animation="bounceIn" delay={1700}>
            <TouchableOpacity>
              <FacebookSvg
                width={STANDARD_SOCIAL_ICON_SIZE}
                height={STANDARD_SOCIAL_ICON_SIZE}
              />
            </TouchableOpacity>
          </Animatable.View>

          <Animatable.View animation="bounceIn" delay={1900}>
            <TouchableOpacity>
              <TwitterSvg
                width={STANDARD_SOCIAL_ICON_SIZE}
                height={STANDARD_SOCIAL_ICON_SIZE}
              />
            </TouchableOpacity>
          </Animatable.View>

          <Animatable.View animation="bounceIn" delay={2100}>
            <TouchableOpacity>
              <GoogleSvg
                width={STANDARD_SOCIAL_ICON_SIZE}
                height={STANDARD_SOCIAL_ICON_SIZE}
                onPress={onGoogleButtonPress}
              />
            </TouchableOpacity>
          </Animatable.View>
        </View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Question & link component wrapper */}
        <Animatable.View
          animation="fadeInUp"
          delay={2300}
          style={styles.questionAndLinkWrapper}>
          {/* Question component */}
          <Question question="Don't have an account?" />

          {/* Link component */}
          <Link
            label="Register"
            onPress={() => navigation.navigate('Register')}
          />
        </Animatable.View>
      </Animatable.View>

      {/* Forgot password modal */}
      {isModalVisible ? (
        <Modal
          isVisible={isModalVisible}
          animationIn="slideInDown"
          animationOut="slideOutDown"
          backdropColor={theme.accent}
          backdropOpacity={0.9}
          style={styles.modal}>
          <View style={[styles.modalBody, { backgroundColor: theme.primary }]}>
            {/* Text input */}
            <TextInput label="Email" placeholder="Enter your email" />

            {/* Button */}
            <View style={styles.modalSubmitButtonWrapper}>
              <Button label="Recover Password" />
            </View>
            {/* Modal close icon */}
            <View
              style={[
                styles.modalCloseIconWrapper,
                { backgroundColor: theme.secondary },
              ]}>
              <TouchableOpacity activeOpacity={1} onPress={toggleModal}>
                <CloseSvg
                  width={STANDARD_VECTOR_ICON_SIZE}
                  height={STANDARD_VECTOR_ICON_SIZE}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      ) : null}
    </View>
  );
};

// Exporting
export default Login;
