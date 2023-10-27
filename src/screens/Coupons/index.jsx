import {useContext} from 'react';
import {View} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import * as Animatable from 'react-native-animatable';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import CouponsData from '../../data/CouponsData';
import {STANDARD_SPACING} from '../../config/Constants';
import Coupon from '../../components/cards/Coupon';
import styles from './styles';

// Functional components
const Coupons = ({navigation}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.primary}]}>
      <Animatable.View
        animation="fadeInUp"
        delay={100}
        style={styles.flatListWrapper}>
        {/* FlatGrid */}
        <FlatGrid
          data={CouponsData}
          style={styles.flatGrid}
          bounces={false}
          spacing={STANDARD_SPACING * 3}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Coupon offer={item.offer} code={item.code} logo={item.logo} />
          )}
        />
      </Animatable.View>
    </View>
  );
};

// Exporting
export default Coupons;
