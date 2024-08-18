import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
        <View style={styles.appIconContainer}>
            <Image source={require("../componets/assets/apps.png") }
            style={styles.appIcon}/>
        </View>
        <View>
            <Image source={require('./assets/mee.png')}
            style={styles.DP}/>
        </View>
    </View>
  )
}

export default Header

const styles=StyleSheet.create({
    appIcon:{
        height:28,
        width:28,
    },
    appIconContainer:{
        backgroundcolor:'#ffff',
        height:44,
        width:44,
        borderRadius:22,
        justifyContent:'center',
        alignItems:'centers'
        
    },
    DP:{
        height:44,
        width:44,
        borderRadius:22,
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
})
