import { FlatList, StyleSheet, Text, View } from "react-native"

let favouriteBookings = [
    {key:'Valaki', ubication:'Valaki', address:'Casa cerca de la iglesia', host:'Blinsky'}, 
    {key:'Minas Tirith', ubication:'Minas Tirith', address:'Segundo Nivel de la ciudadela', host:'Guardia de Gondor'}, 
    {key:'Narshe', ubication:'Narshe', address:'En las minas abandondas', host: 'Moogle'}, 
    {key:'Medina Village', ubication:'Medina Village', address:'Casa del anciano', host:'Descendiente de Vinnie'},
    {key:'Valakiasd', ubication:'Valaki', address:'Casa cerca de la iglesia', host:'Blinsky'}, 
    {key:'Minas Tiritasdh', ubication:'Minas Tirith', address:'Segundo Nivel de la ciudadela', host:'Guardia de Gondor'}, 
    {key:'Narsasvhe', ubication:'Narshe', address:'En las minas abandondas', host: 'Moogle'}, 
    {key:'Medizxcvgna Village', ubication:'Medina Village', address:'Casa del anciano', host:'Descendiente de Vinnie'},
    {key:'Vanfsnlaki', ubication:'Valaki', address:'Casa cerca de la iglesia', host:'Blinsky'}, 
    {key:'Mighsnas Tirith', ubication:'Minas Tirith', address:'Segundo Nivel de la ciudadela', host:'Guardia de Gondor'}, 
    {key:'Nats5rshe', ubication:'Narshe', address:'En las minas abandondas', host: 'Moogle'}, 
    {key:'Mehshdina Village', ubication:'Medina Village', address:'Casa del anciano', host:'Descendiente de Vinnie'},
    {key:'Vagfnlaki', ubication:'Valaki', address:'Casa cerca de la iglesia', host:'Blinsky'}, 
    {key:'Mind4ghhnas Tirith', ubication:'Minas Tirith', address:'Segundo Nivel de la ciudadela', host:'Guardia de Gondor'}, 
    {key:'Nar53she', ubication:'Narshe', address:'En las minas abandondas', host: 'Moogle'}, 
    {key:'Medj5ina Village', ubication:'Medina Village', address:'Casa del anciano', host:'Descendiente de Vinnie'}
]

const Item = ({ubication, address, key}) => (
    <View style={styles.itemContainer}>
        <View>
            <Text>{ubication}</Text> 
        </View>
        <View>
            <Text>{address}</Text>
        </View>
    </View>
)


function FavouriteBookingsList() {


    return(
        <View >
            <Text style={styles.favoriteBookingsTitle}>My Favorite Bookings</Text>
            <FlatList 
                data={favouriteBookings}
                renderItem={({item, index}) => <Item ubication={item.ubication} address={item.address}/>}
                keyExtractor={item => item.key}
                horizontal={false}
                numColumns={2}
                ListFooterComponent={<View></View>}
                />
        </View>
    )
}

export default FavouriteBookingsList

const styles = StyleSheet.create({
    favoriteBookingsTitle:{
        fontSize:24,
        paddingTop:4,
    },
    itemContainer: {
        flex:1,
        height: 170,
        padding:12,
        backgroundColor:'#58CCB1',
        margin:12,
        borderRadius:10
    }
})