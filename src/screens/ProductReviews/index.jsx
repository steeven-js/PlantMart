import {useContext, useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Modal from 'react-native-modal';
import StarRating from 'react-native-star-rating-widget';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import StarSvg from '../../assets/icons/svg/ic_star.svg';
import ChatSvg from '../../assets/icons/svg/ic_chat_dark_green.svg';
import CloseSvg from '../../assets/icons/svg/ic_close_dark_green.svg';
import BuyerReviewsData from '../../data/BuyerReviewsData';
import BuyerReview from '../../components/cards/BuyerReview';
import {STANDARD_VECTOR_ICON_SIZE} from '../../config/Constants';
import TextArea from '../../components/inputs/TextArea';
import Button from '../../components/buttons/Button';
import {scale} from 'react-native-size-matters';
import styles from './styles';

// Functional component
const ProductReviews = ({navigation}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Local states
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [rating, setRating] = useState(0);

  // Toggling call request modal
  const toggleModal = () => {
    setIsModalVisible(prevState => !prevState);
  };

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.primary}]}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContentContainerStyle}>
        {/* Product details wrapper */}
        <View style={styles.productDetailsWrapper}>
          {/* Product image wrapper */}
          <Animatable.View
            animation="fadeInUp"
            delay={100}
            style={styles.productImageWrapper}>
            {/* Product image */}
            <Animatable.Image
              animation="fadeInUp"
              delay={300}
              source={require('../../assets/images/products/300_x_400.png')}
              style={styles.productImage}
            />

            {/* Circled background */}
            <View
              style={[
                styles.productImageCircledBackground,
                {
                  backgroundColor: theme.secondary,
                  borderColor: theme.secondaryDark,
                },
              ]}
            />
          </Animatable.View>

          {/* Product title */}
          <Animatable.Text
            animation="fadeInUp"
            delay={900}
            style={[styles.productTitle, {color: theme.textHighContrast}]}>
            Bird's Nest Fern
          </Animatable.Text>

          {/* Product subtitle */}
          <Animatable.Text
            animation="fadeInUp"
            delay={1100}
            style={[styles.productSubTitle, {color: theme.textLowContrast}]}>
            Indoor & Outdoor Plant
          </Animatable.Text>

          {/* Rating count wrapper */}
          <Animatable.View
            animation="fadeInUp"
            delay={1300}
            style={[styles.ratingCountWrapper, {borderColor: theme.secondary}]}>
            <Text style={[styles.ratingCount, {color: theme.accent}]}>
              4000+ Ratings
            </Text>
          </Animatable.View>

          {/* Rating */}
          <Animatable.View
            animation="fadeInUp"
            delay={1500}
            style={styles.ratingWrapper}>
            <Text style={[styles.rating, {color: theme.textLowContrast}]}>
              4.9
            </Text>
            <View style={styles.ratingStarsWrapper}>
              <StarSvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
              <StarSvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
              <StarSvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
              <StarSvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
              <StarSvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            </View>
          </Animatable.View>
        </View>

        {/* Give rating & review */}
        <Animatable.View animation="fadeInUp" delay={1700}>
          <TouchableOpacity
            style={[
              styles.giveRatingAndReviewLink,
              {
                borderTopColor: theme.secondary,
                borderBottomColor: theme.secondary,
              },
            ]}
            onPress={toggleModal}>
            <ChatSvg />
            <Text
              style={[
                styles.giveRatingAndReviewLinkTitle,
                {color: theme.textLowContrast},
              ]}>
              Give a rating and review
            </Text>
          </TouchableOpacity>
        </Animatable.View>

        {/* Title */}
        <Animatable.Text
          animation="fadeInUp"
          delay={1900}
          style={[styles.buyersReviewsTitle, {color: theme.accent}]}>
          Buyers reviews
        </Animatable.Text>

        <Animatable.View animation="fadeInUp" delay={2100}>
          {BuyerReviewsData.map((item, index) => (
            <BuyerReview
              key={item.id}
              buyerAvatarSvg={item.buyerAvatarSvg}
              buyerName={item.buyerName}
              reviewAge={item.reviewAge}
              rating={item.rating}
              review={item.review}
              isLastItem={BuyerReviewsData.length === index + 1 ? true : false}
            />
          ))}
        </Animatable.View>
      </ScrollView>

      {/* Rating & review modal */}
      {isModalVisible ? (
        <Modal
          isVisible={isModalVisible}
          animationIn="slideInDown"
          animationOut="slideOutDown"
          backdropColor={theme.accent}
          backdropOpacity={0.9}
          style={styles.modal}>
          <View style={[styles.modalBody, {backgroundColor: theme.primary}]}>
            {/* Text area */}
            <View style={styles.textAreaComponentWrapper}>
              <TextArea label="Honest Review" placeholder="Enter your review" />
            </View>

            {/* Rating stars */}
            <StarRating
              rating={rating}
              maxStars={5}
              starSize={scale(30)}
              color={theme.accent}
              onChange={rating => setRating(rating)}
            />

            {/* Button */}
            <View style={styles.modalSubmitButtonWrapper}>
              <Button label="Submit Review" />
            </View>
            {/* Modal close icon */}
            <View
              style={[
                styles.modalCloseIconWrapper,
                {backgroundColor: theme.secondary},
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
export default ProductReviews;
