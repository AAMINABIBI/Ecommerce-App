import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const ProductCard = ({ item, handleLiked }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('PRODUCT_DETAILS', { item })}
        >
            <Image
                source={{ uri: item.image }}
                style={styles.coverImage}
            />

            <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>

            <View style={styles.LikeContainer}>
                <TouchableOpacity onPress={() => handleLiked(item)}>
                    {item?.isLiked ? (
                        <AntaDesign name="heart" size={20} color="#E55B5B" />

                    ) : (
                        <AntDesign name="hearto" size={20} color="#E55B5B" />

                    )}
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },
    contentContainer: {
        padding: 10,
    }
})

export default ProductCard
