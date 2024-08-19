import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from 'react-native'
import { Image, StyleSheet, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const ProductCard = ({isLiked,setisLiked}) => {
    // const [isLiked, setIsLiked] = useState(false);

    // const toggleLike = () => {
    //     setIsLiked(!isLiked); // Toggle the liked state
    // };

    return (
        <View style={styles.container}>
            <Image source={require('./assets/girl1.jpeg')}
                style={styles.coverImage} />

            <View style={styles.content}>
                <Text style={styles.title}>Jacket</Text>
                <Text style={styles.price}>$99.99</Text>
            </View>

            <TouchableOpacity onPress={()=>{
                setisLiked(!isLiked)
            }} style={styles.LikeContainer}>
                {isLiked ? (
                    <AntDesign name="heart" size={20} color="#E55B5B" />
                ) : (
                    <AntDesign name="hearto" size={20} color="#E55B5B" />
                )}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: 'black'
    },
    coverImage: {
        height: 256,
        width: '90%',
        borderRadius: 20,
        marginVertical: 10,
        marginLeft: 10
    },
    title: {
        fontSize: 18,
        color: '#444444',
        fontWeight: '600'
    },
    price: {
        fontSize: 18,
        color: '#9C9C9C',
        fontWeight: '600'
    },
    content: {
        paddingLeft: 15
    },
    LikeContainer: {
        height: 34,
        width: 34,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 17,
        position: 'absolute',
        top: 20,
        right: 20
    }
})

export default ProductCard
