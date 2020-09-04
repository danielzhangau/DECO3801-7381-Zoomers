import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const LoadingScreen = () => {
    const loading_text = "Get Rewarded for All Your Public Transport Travel"
    return (
        <View style={styles.container}>
            <Image
                source={{uri: "https://raw.githubusercontent.com/danielzhangau/DECO3801-7381-Zoomers/master/img/green%20miles.png"}}
                style={{width: 250, height: 250}}
            />
            <Text style={styles.text}>{loading_text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DFECDC',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto',
    },
    text: {
        width: 282, 
        height: 64,
        fontSize: 25,
        // fontStyle: medium,
        color: '#309200',
    }
})
export default LoadingScreen;