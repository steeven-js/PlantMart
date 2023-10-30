import {memo, useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import SvgStar from '../../../assets/icons/svg/ic_star.svg';
import SvgBagWhite from '../../../assets/icons/svg/ic_bag_white.svg';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import styles from './styles';

// Functional component
const GridViewProduct = ({
  productImage,
  productTitle,
  productPrice,
  rating,
  onPress,
}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <TouchableOpacity
      style={[styles.productCard, {backgroundColor: theme.secondary}]}
      onPress={onPress}>
      {/* Rotated background */}
      <View
        style={[styles.rotatedBackground, {borderColor: theme.secondary}]}
      />
      {/* Product image */}
      <Image source={productImage} style={styles.productImage} />

      {/* Product title */}
      <Text
        style={[styles.productTitle, {color: theme.textHighContrast}]}
        numberOfLines={1}
        ellipsizeMode="tail">
        {productTitle}
      </Text>

      {/* Price & rating wrapper */}
      <View style={styles.productPriceAndRatingWrapper}>
        <Text style={[styles.productPrice, {color: theme.accent}]}>
          {productPrice}
        </Text>
        <View style={styles.starAndRatingWrapper}>
          <SvgStar
            width={STANDARD_VECTOR_ICON_SIZE * 0.75}
            height={STANDARD_VECTOR_ICON_SIZE * 0.75}
          />
          <Text style={[styles.rating, {color: theme.accent}]}>{rating}</Text>
        </View>
      </View>

      {/* Bag icon wrapper */}
      <TouchableOpacity
        style={[styles.bagIconWrapper, {backgroundColor: theme.accent}]}>
        <SvgBagWhite
          width={STANDARD_VECTOR_ICON_SIZE}
          height={STANDARD_VECTOR_ICON_SIZE}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

// Exporting
export default memo(GridViewProduct);
