import React, { useContext, useState, useEffect } from 'react';
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

// Import Firebase and Firebase Auth
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

import app from '../../../firebase';

// Functional component
const Register = ({ navigation }) => {
  // Using context
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  const auth = getAuth(app); // Initialize Firebase Auth
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      if (email !== '' && password !== '') {
        const userAuth = await createUserWithEmailAndPassword(auth, email, password);
        console.log('userAuth', userAuth);
        const uid = userAuth.user.uid;

        const firestore = getFirestore(app);
        await setDoc(doc(firestore, 'user', uid), { name, email });
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  // Use useEffect to ensure Firebase is ready before registering
  useEffect(() => {
    register();
  }, []);

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
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Text input component */}
        <Animatable.View animation="fadeInUp" delay={900}>
          <TextInput
            label="Email"
            placeholder="Enter your email address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Text input component */}
        <Animatable.View animation="fadeInUp" delay={1100}>
          <TextInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Button component */}
        <Animatable.View animation="fadeInUp" delay={1300}>
          <Button label="Inscription" onPress={register} />
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
