import {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContextProvider} from './src/theming/context_providers/ThemeContextProvider';
import Statusbar from './src/components/others/Statusbar';
import HomeDrawer from './src/navigators/drawers/HomeDrawer';
import Splash from './src/screens/Splash';
import AppStyles from './AppStyles';

// Functional component
const App = () => {
  // Local states
  const [isStarting, setIsStarting] = useState(true);

  // Hooks
  useEffect(() => {
    // Updating state value after 2500 milliseconds(2.5 seconds) of delay.
    setTimeout(() => {
      // Updating states
      setIsStarting(false);
    }, 2500);
  }, []);

  // Checking
  if (isStarting) {
    // Returning
    return <Splash />;
  }

  // Returning
  return (
    <ThemeContextProvider>
      <NavigationContainer>
        <Statusbar backgroundColor="#588157" barStyle="light-content" />
        <SafeAreaView style={AppStyles.safeAreaView}>
          <HomeDrawer />
        </SafeAreaView>
      </NavigationContainer>
    </ThemeContextProvider>
  );
};

// Exporting
export default App;
