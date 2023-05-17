import React from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, Pressable, SafeAreaView, StatusBar, ScrollView } from 'react-native'

import Images from '../components/ItemDetail/Images'
import colors from '../theme/colors'
import Characteristics from '../components/ItemDetail/Characteristics'

const ItemDetail = ({route}) => {

  return (
    <SafeAreaView styles={styles.container}>
      <ScrollView styles={styles.detailDataContainer}>
          <Images cardImages={route.params.item.cardImages}/>
          <View style={styles.titleContainer}>
            <Text style={{fontFamily:'lost-ages', fontSize:32}}>{route.params.item.card_description}</Text>
          </View>
          <Characteristics host={route.params.item.host} />
          <View style={styles.descriptionContainer}>
            <Text style={{fontFamily:'lost-ages', fontSize:24}}>About this place</Text>
            <Text>{route.params.item.detail_description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab labore repellat fugit consequatur deleniti ducimus aperiam, optio omnis enim maiores voluptatibus eos, molestias, alias ex. Assumenda voluptate earum ea eum optio. Cum fugiat facere, repellendus laboriosam ratione nobis tenetur numquam sequi pariatur iusto, dicta tempora perferendis nesciunt, non consequuntur expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, expedita illo quod corrupti laudantium maxime pariatur natus reprehenderit architecto vel a porro inventore voluptate cum. Voluptatum enim veritatis accusamus quos iure quasi cupiditate animi debitis! Odit earum ipsam accusamus nisi mollitia voluptatem. Laudantium beatae exercitationem ipsa quo tempore, consequuntur aliquid voluptatem cupiditate unde est, facilis sint possimus odio officia molestiae quidem iure deleniti inventore reiciendis id eum nobis fugit. Debitis sequi modi fugiat illum. Nihil harum quaerat quisquam quibusdam ea at numquam et, perspiciatis quidem. Fugit, perspiciatis optio velit dolor aut laudantium dolorem asperiores, perferendis quia quidem nulla et eum maiores. Aliquid, quibusdam assumenda? Consequatur nobis at, sed exercitationem iure corporis obcaecati magni quidem porro facilis pariatur autem nisi numquam, magnam sequi? Error doloremque perferendis magnam delectus voluptatum quos, iste magni ipsam dolor, quas sed nam temporibus accusantium nesciunt iusto deserunt hic labore quo sunt assumenda veritatis! Nemo, quis velit.</Text>
          </View>
          <View style={styles.hostDataContainer}>
            <Text style={{fontFamily:'lost-ages', fontSize:24}}>Meet your host</Text>
            <Text>{route.params.item.host}</Text>
          </View>
          <View style={{width:'100%', aspectRatio:5}}>
          </View>
      </ScrollView>
      <View style={styles.reserveContainer}>
        <View style={{flexDirection:'row', gap:10}}>
          <Text>Precio</Text>
          <Text>$20.000</Text>
        </View>
        <Pressable style={{backgroundColor:colors.red_a, padding:10, borderRadius:10}}>
          <Text>Reserve</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default ItemDetail


const styles = StyleSheet.create({
  reserveContainer: {
    position:'absolute',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:colors.white,
    width:'100%',
    aspectRatio:6,
    bottom:0
  },
  titleContainer:{
    borderWidth: 0,
    padding:10
  },
  descriptionContainer:{
    marginTop:20,
    borderWidth: 0,
  },
  hostDataContainer: {
    marginTop:20,
    borderWidth: 0,
  }
})