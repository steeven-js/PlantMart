import {memo, useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import SvgPlus from '../../../assets/icons/svg/ic_plus_dark_green.svg';
import SvgMinus from '../../../assets/icons/svg/ic_minus_dark_green.svg';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const Language = ({
  productImage,
  productTitle,
  productPrice,
  productQuantity,
}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.productCard, {backgroundColor: theme.secondary}]}>
      <View
        style={[styles.productImageWrapper, {backgroundColor: theme.primary}]}>
        <Image source={productImage} style={styles.productImage} />
      </View>
      {/* Product details wrapper */}
      <View style={styles.productDetailsWrapper}>
        {/* Product title & price */}
        <View>
          <Text
            style={[styles.productTitle, {color: theme.textHighContrast}]}
            numberOfLines={1}>
            {productTitle}
          </Text>
          <Text style={[styles.productPrice, {color: theme.accent}]}>
            {productPrice}
          </Text>
        </View>
      </View>

      {/* Quantity wrapper */}
      <View
        style={[styles.productQuantityWrapper, {borderColor: theme.accent}]}>
        {/* Plus icon wrapper */}
        <TouchableOpacity
          style={[styles.plusIconWrapper, {backgroundColor: theme.primary}]}>
          <SvgPlus
            width={STANDARD_VECTOR_ICON_SIZE * 0.9}
            height={STANDARD_VECTOR_ICON_SIZE * 0.9}
          />
        </TouchableOpacity>

        {/* Quantity */}
        <Text style={[styles.productQuantity, {color: theme.textHighContrast}]}>
          {productQuantity}
        </Text>

        {/* Minus icon wrapper */}
        <TouchableOpacity
          style={[styles.minusIconWrapper, {backgroundColor: theme.primary}]}>
          <SvgMinus
            width={STANDARD_VECTOR_ICON_SIZE * 0.9}
            height={STANDARD_VECTOR_ICON_SIZE * 0.9}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Exporting
export default memo(Language);
