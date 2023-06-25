import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, Pressable, ScrollView, FlatList, Animated, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import {  useSelector } from 'react-redux';

import styles from './styles'
const viewConfigRef = {viewAreaCoveragePercentThreshold: 95}
import likeLogo from "../../assets/likebtn.png"
import likeLogoWhite from "../../assets/likebtnwhite.png"
import Swiper from 'react-native-swiper';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Swipeable from 'react-native-gesture-handler/Swipeable';
const width= Dimensions.get('window').width
const anchoContenedor = width * 0.9

export default function Card({ otherStyles, bookingUbication, cardDescription, cardImages,onHandleAdd, onHandleRemove,id, item, navigation }) {
  let flatListRef = useRef()
  const scrollXdata = React.useRef(new Animated.Value(0)).current
  const [isFavourite, setIsFavourite] = useState(false)
  const favourites = useSelector((state) => state.favourites.data)
  const [images, setImages] = useState(null)
  const [dotQty, setDotQty] = useState(0)
  const [bigDot, setBigDot] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const onViewRef = useRef(({changed}) => {
    if(changed[0].isViewable){
      setCurrentIndex(changed[0].index)
    }
  })

  useEffect(() => {
    setDotQty(cardImages.length)
    setImages(cardImages)
    if (favourites == undefined){
    } else {
      let conditionFav = favourites.includes(id) 
      if (conditionFav) {
        setIsFavourite(true)
      } else {
        setIsFavourite(false)
      }
    }
  },[favourites, cardImages, images])


  const Dot = (props) => {
    return (
      <View
            key={props.thekey}
              style={{
                backgroundColor: props.isBig ?'rgba(0,0,0,.7)' :'rgba(0,0,0,.2)',
                width: props.isBig ? 8 :5,
                height: props.isBig ? 8 :5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
             />
    )
  }

  const activeDot = (props) => {

    return (
      <View
      key={props.index}
      style={{
        backgroundColor: '#000',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
      }}
    >
        <Text>
          •
        </Text>
      </View>
    )
  }
  const ComponentDot = (props) => {
    const components = [...Array(props.qty)].map((e, i) => <Dot thekey={i} isBig={props.currentDot == i ? true : false} />)

    return (
    <View style={{ position: 'absolute', bottom: -20, zIndex:99, flexDirection: 'row', alignItems:'center', alignSelf: 'flex-end', paddingRight:10 }}>
      {components}
    </View>
    )
  }
  return (
    <Pressable onPress={() => navigation.navigate('ItemDetail', { item: item })} unstable_pressDelay={100} style={{ ...styles.container, ...otherStyles }}  >
      <View style={styles.imageContainer}>
        <View style={{ position: 'absolute', zIndex: 99, top:0, right:0 }}>
          {isFavourite ? <TouchableOpacity
            style={styles.addLikeBtn}
            onPress={() => onHandleRemove(id)}>
            <Image
              source={likeLogoWhite}
              style={styles.likedImage}
            />
          </TouchableOpacity> : <TouchableOpacity
            onPress={() => onHandleAdd(id)}
            style={styles.addLikeBtn}
          >
            <Image
              source={likeLogo}
              style={styles.likeImage}

            />
          </TouchableOpacity>
          }

        </View>
        {
          images &&
          <>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            
            nestedScrollEnabled={true}
            decelerationRate={'fast'}
            pagingEnabled={true}
            scrollEventThrottle={16}
            data={images}
            keyExtractor={item => item.idImg.toString()}
            ref={(ref) => {
              flatListRef.current = ref
            }}
            viewabilityConfig={viewConfigRef}
            onViewableItemsChanged={onViewRef.current}
            onScroll={data => {
              const offset = data.nativeEvent.contentOffset.x
              const hasDecimal = offset - Math.floor(offset) !== 1
              if(!hasDecimal) {
                setBigDot(offset)
              }
            }}
            renderItem={({ item }) => {
              if (!item.url) return <View style={{ width: 0 }} />

              return (
                <>
                  <View style={{ width: anchoContenedor, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: item.url }} style={{ width: '100%', aspectRatio: 1, resizeMode: 'cover', borderRadius: 10 }} />
                    <LinearGradient
                      colors={["#00000000", "rgba(0, 0, 0, 0.52)"]}
                      style={{ height: "100%", width: "100%", position:'absolute' }}
                      start={{ x: 0.5, y: 0.1 }}
                      end={{ x: 0.5, y: 1 }}
                      locations={[0.8, 2]}
                    >
                      
                    </LinearGradient>
                  </View>
                </>
              )
            }} />
            <View style={{ position: 'absolute', bottom: -20, zIndex:99, flexDirection: 'row', alignItems:'center', alignSelf: 'flex-end', paddingRight:10 }}>
              {images.map(({}, index) => (
                <View
                key={index.toString()}
                  style={{
                    backgroundColor: index == currentIndex ?'rgba(0,0,0,.7)' :'rgba(0,0,0,.2)',
                    width: index == currentIndex ? 8 :5,
                    height: index == currentIndex ? 8 :5,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3
                  }}
                 />
              ))}
            </View>
          {/* <ComponentDot qty={dotQty} currentDot={bigDot}/> */}
            </>
          }
      </View>


      <View style={styles.itemBody}>
        <View style={styles.itemBodyInfo}>
          <View style={styles.ubicationContainer}>
            <Text style={{ fontSize: 29, fontFamily: 'lost-ages' }}>{bookingUbication}</Text>
          </View>
          <View style={styles.firstdescriptionContainer}>
            <Text style={{ fontSize: 17, fontFamily: 'lost-ages', opacity: 0.7 }}>
              {cardDescription}
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={{ fontSize: 14, fontFamily: 'WickedGrit' }}>$20.000</Text>
            <Text style={{ fontSize: 18, fontFamily: 'lost-ages' }}>per night</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
