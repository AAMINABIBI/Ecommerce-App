import React from 'react'
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
const imageurl = 'https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/qichw3wrcioebkvzudib.png'
const CartCard = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageurl }}
                style={styles.coverImage} />
            <View style={styles.cardContaier}>
                <Text style={styles.title}>Jacket</Text>
                <Text style={styles.price}>$236782</Text>
                <View style={styles.circlesizecontainer}>
                    <View style={styles.circle} />
                    <View style={styles.sizeCircle}>
                        <Text style={styles.sizetext}>L</Text>
                    </View>
                </View>
            </View>
        
            <FontAwesome6 name={'trash'} color={"#F68CBC"}
                size={25} />
          
           


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row'
    },
    coverImage: {
        height: 125,
        width: "30%",
        borderRadius: 20
    },
    cardContaier: {
        flex: 1,
        marginHorizontal: 10
    },
    title: {
        fontSize: 20,
        color: 'black',
        fontWeight: '500'
    },
    price: {
        color: '#797979',
        marginVertical: 10,
        fontSize: 18,

    },
    circle: {
        height: 32,
        width: 32,
        borderRadius: 16,
        backgroundColor: '#7094C1'
    },
    circlesizecontainer: {
        flexDirection: 'row',
        marginHorizontal: 10
    },
    sizeCircle: {
        backgroundColor: 'white',
        height: 32,
        width: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10

    },
    sizetext: {
        fontSize: 18,
        fontWeight: '500',

    }
})

export default CartCard
