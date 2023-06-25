import { View, StyleSheet, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'


import likeLogo from '../../assets/likebtn.png'
import likeLogoWhite from "../../assets/likebtnwhite.png"
const viewConfigRef = {viewAreaCoveragePercentThreshold: 95}

const width= Dimensions.get('window').width

const Images = ({cardImages, onHandleRemove, isFavourite, id, onHandleAdd}) => {
    let flatListRef = useRef()
    const [images, setImages] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const onViewRef = useRef(({changed}) => {
        if(changed[0].isViewable){
          setCurrentIndex(changed[0].index)
        }
    })

    useEffect(() => {
        setImages(cardImages)
    }, [cardImages, images])

    return (
        <View style={styles.imageContainer}>
            <View style={{ flex: 1, position: 'absolute', zIndex: 99, top: 0, right: 0 }}>
                {
                    isFavourite ? (
                        <TouchableOpacity
                            onPress={() => onHandleRemove(id)}
                            style={styles.addLikeBtn}
                        >
                            <Image
                                source={likeLogoWhite}
                                style={styles.likeImage}
                            />
                        </TouchableOpacity>
                    ) : (<TouchableOpacity
                        onPress={() => onHandleAdd(id)}
                        style={styles.addLikeBtn}
                    >
                        <Image
                            source={likeLogo}
                            style={styles.likeImage}

                        />
                    </TouchableOpacity>)
                }

            </View>
            {
                images && (

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
                                if (!hasDecimal) {
                                    setBigDot(offset)
                                }
                            }}
                            renderItem={({ item }) => {
                                if (!item.url) return <View style={{ width: 0 }} />

                                return (
                                    <>

                                        <Image source={{ uri: item.url }} style={{ width: width, height: '100%', resizeMode: 'cover' }} />
                                        <LinearGradient
                                            colors={["#00000000", "rgba(0, 0, 0, 0.52)"]}
                                            style={{ height: "100%", width: "100%", position: 'absolute' }}
                                            start={{ x: 0.5, y: 0.1 }}
                                            end={{ x: 0.5, y: 1 }}
                                            locations={[0.8, 2]}
                                        >

                                        </LinearGradient>

                                    </>
                                )
                            }} />
                        <View style={{ position: 'absolute', bottom: -20, zIndex: 99, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', paddingRight: 10 }}>
                            {images.map(({ }, index) => (
                                <View
                                    key={index.toString()}
                                    style={{
                                        backgroundColor: index == currentIndex ? 'rgba(0,0,0,.7)' : 'rgba(0,0,0,.2)',
                                        width: index == currentIndex ? 8 : 5,
                                        height: index == currentIndex ? 8 : 5,
                                        borderRadius: 4,
                                        marginLeft: 3,
                                        marginRight: 3,
                                        marginTop: 3,
                                        marginBottom: 3
                                    }}
                                />
                            ))}
                        </View>
                    </>
                )
            }
        </View>
    )
}

export default Images

const styles = StyleSheet.create({
    imageContainer: {
        width:'100%',
        aspectRatio:1.4,
        borderWidth: 0,
      },
    
      
    likeImage:{
        width: 40,
        height: 40,
        resizeMode: 'cover',
        alignSelf:'flex-end',
        margin:35,
        marginHorizontal:12,
        opacity:0.9
    },

    addLikeBtn: {
        width: 30,
        height: 30,
        resizeMode: 'cover',
        alignSelf:'flex-end',
        margin:10,
        marginHorizontal:12,
        
    }
    
})