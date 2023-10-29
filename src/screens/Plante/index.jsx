import { useContext, useRef, useState, useEffect } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import React from 'react';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import { SCREEN_WIDTH, STANDARD_VECTOR_ICON_SIZE } from '../../config/Constants';
import GridViewProductsData from '../../data/GridViewProductsData';
import HeartDarkGreenSvg from '../../assets/icons/svg/ic_heart_dark_green.svg';
import StarSvg from '../../assets/icons/svg/ic_star.svg';
import SvgPlus from '../../assets/icons/svg/ic_plus_dark_green.svg';
import SvgMinus from '../../assets/icons/svg/ic_minus_dark_green.svg';
import { getOnePlant } from '../../common/api';
import styles from './styles';

// Functional component
const Plante = ({ navigation, route }) => {
  // Using context
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

  // Getting theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Local states
  const [activeScrollIndex, setActiveScrollIndex] = useState(0);
  const [plante, setPlante] = useState(null);

  // UseParams
  const { id } = route.params;
  // console.log("route.params", id);

  const loadApiPlante = async () => {
    if (id !== 0) {
      try {
        const data = await getOnePlant(id);
        setPlante(data);
        // console.log('data', data);
      } catch (error) {
        console.error('Error loading Plant data:', error);
      }
    }
  }

  // console.log('plante', plante)

  // useEffect
  useEffect(() => {
    loadApiPlante();
  }, []);

  // useRef hooks
  const verticalFlatList = useRef(null);
  const horizontalFlatList = useRef(null);

  // Scrolling FlatLists
  const scrollToIndex = index => {
    // Updating state
    setActiveScrollIndex(index);

    // Scrolling active thumbnail image to the specified index
    verticalFlatList?.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5,
    });

    // Scrolling large image to specific offset based on active scroll index
    horizontalFlatList?.current?.scrollToOffset({
      offset: SCREEN_WIDTH * 0.5 * index,
      animated: true,
    });
  };

  // Method to render large image
  const _renderLargeImages = ({ item, index }) => (
    <View key={index} style={[styles.largeImageWrapper]}>
      <Image source={item.productImage} style={styles.largeImage} />
    </View>
  );

  // Method to render thumbnail image
  const _renderThumbnailImages = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => scrollToIndex(index)}
      key={index}
      style={[
        styles.thumbnailImageWrapper,
        {
          backgroundColor:
            activeScrollIndex === index ? theme.accentLightest : theme.primary,
          borderColor:
            activeScrollIndex === index ? theme.accent : theme.accentLightest,
        },
      ]}>
      <Image source={item.productImage} style={styles.thumbnailImage} />
    </TouchableOpacity>
  );

  // Returning
  return (
    <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
      {/* Product gallery */}
      <View style={styles.flatListsWrapper}>
        {/* Vertical FlatList */}
        <View
          style={[
            styles.verticalFlatListWrapper,
            { backgroundColor: theme.secondary },
          ]}>
          <FlatList
            ref={verticalFlatList}
            bounces={false}
            showsVerticalScrollIndicator={false}
            data={GridViewProductsData}
            keyExtractor={item => item.id}
            scrollEnabled
            renderItem={_renderThumbnailImages}
            style={styles.verticalFlatList}
            contentContainerStyle={styles.verticalFlatListContentContainerStyle}
          />
        </View>

        {/* Horizontal FlatList */}
        <View
          style={[
            styles.horizontalFlatListWrapper,
            { backgroundColor: theme.accentLightest },
          ]}>
          <FlatList
            ref={horizontalFlatList}
            bounces={false}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            data={GridViewProductsData}
            keyExtractor={item => item.id}
            horizontal
            scrollEnabled
            renderItem={_renderLargeImages}
            onMomentumScrollEnd={ev => {
              scrollToIndex(
                Math.round(
                  ev.nativeEvent.contentOffset.x / (SCREEN_WIDTH * 0.5),
                ),
              );
            }}
          />
        </View>
      </View>
      {/* Product details wrapper */}
      <View style={styles.productDetailsOuterWrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={[
            styles.productDetailsScrollView,
            { backgroundColor: theme.primary },
          ]}>
          <View style={styles.productTitleAndHeartIconWrapper}>
            <View style={styles.productTitleWrapper}>
              <Text
                style={[styles.productTitle, { color: theme.textHighContrast }]}
                numberOfLines={1}>
                {plante && plante.name ? <Text>{plante.name}</Text> : null}
              </Text>
            </View>
            <TouchableOpacity
              style={[
                styles.heartIconWrapper,
                { backgroundColor: theme.secondary },
              ]}>
              <HeartDarkGreenSvg
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            </TouchableOpacity>
          </View>

          {/* Plant care */}
          <Text style={[styles.sectionTitle, { color: theme.textHighContrast }]}>
            Usages recommandés
          </Text>

          {/* Horizontal ScrollView */}
          <View>
            <ScrollView
              horizontal
              bounces={false}
              showsHorizontalScrollIndicator={false}>
              {plante && plante.usages ? (
                plante.usages.map((usage, index) => (
                  <View
                    key={index}
                    style={[
                      styles.symptomeLabelWrapper,
                      { backgroundColor: theme.accent },
                    ]}
                  >
                    <Text style={{ padding: 10, color: 'white'}}>{usage.symptome_name}</Text>
                    {/* <Text>Notes : {usage.notes}</Text> */}
                  </View>
                ))
              ) : (
                <Text>Aucun usage recommandé disponible pour cette plante.</Text>
              )}
            </ScrollView>
          </View>

          {/* Description */}
          <Text style={[styles.sectionTitle, { color: theme.textHighContrast }]}>
            Description
          </Text>

          <Text style={[styles.description, { color: theme.textLowContrast }]}>
            {plante && plante.notes ? (<Text>{plante.notes}</Text>) : (<Text>Aucune description pour cette plante</Text>)}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

// Exporting
export default Plante;
