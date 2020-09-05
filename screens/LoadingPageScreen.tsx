import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const LoadingScreen = ({navigation}) => {
    const loading_text = "Get Rewarded for All Your Public Transport Travel"
    return (
        <TouchableOpacity onPress = {() => {navigation.navigate('Login')}} style={styles.container}>
            <Image
                source={require('../img/green_miles.png')}
                style={{width: 290, height: 290, marginTop: 80}}
            />
            <Text style={styles.text}>{loading_text}</Text>
        </TouchableOpacity>

        // <View style={styles.container}>
            // <Image
            //     source={{uri: "https://raw.githubusercontent.com/danielzhangau/DECO3801-7381-Zoomers/master/img/green%20miles.png"}}
            //     style={{width: 290, height: 290}}
            // />
            // <Text style={styles.text}>{loading_text}</Text>
        // </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D0ECC9',
        alignItems: 'center',
        
    },
    text: {
        width: 282, 
        height: 64,
        fontSize: 22,
        marginTop: 30,
        fontFamily: 'Roboto-Bold',
        textAlign: 'center', 
        color: '#3EA50B',
        textShadowColor: '#A8A6A6',
        textShadowOffset: {width: 0, height: 3},
        textShadowRadius: 4,
    }
})
export default LoadingScreen;