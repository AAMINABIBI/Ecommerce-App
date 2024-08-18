import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Header from '../componets/Header';
import Catogory from '../componets/Catogory';
import { FlatList } from 'react-native';
import ProductCard from '../componets/ProductCard';

const catagories = ['Trending Now', 'All', 'New', 'Men', 'Women']
const HomeScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)

    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.matchText}>Match Your Style</Text>

            {/* input container */}
            <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                    <Fontisto name={"search"} size={26} color={'white'} />
                </View>
                <TextInput style={styles.ttextInput} placeholder='Search'></TextInput>
            </View>

            {/* category section */}
            <FlatList
                data={catagories}
                renderItem={({ item }) => (
                    <Catogory item={item}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory} />
                )}
                keyExtractor={(item) => item}
                horizontal={true}
                showsHorizontalScrollIndicator={false} />
            {/* <Catogory/> */}
            {/* Product list */}
            <View style={{
                flexDirection:'row'
            }}>
                <ProductCard/>
                <ProductCard/>

            </View>
            <View style={{
                flexDirection:'row'
            }}>
                <ProductCard/>
                <ProductCard/>

            </View>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "lightpink"
    },
    matchText: {
        fontSize: 32,
        color: "black",
        marginTop: 25,
    },
    inputContainer: {
        backgroundColor: 'lightgrey',
        height: 48,
        borderRadius: 12,
        alignitem: 'center',
        flexDirection: 'row',
        marginVertical: 20
    },
    ttextInput: {
        flex: 1
    },
    iconContainer: {
        marginHorizontal: 20,
        marginTop: 16
    }
})
