import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textBig}>Welcome Back!</Text>
            <Text style={styles.text}>You've travelled</Text>
            <Text style={styles.number}>92km</Text>
            <Text style={styles.text}>this week</Text>
            <Text style={styles.text}>only</Text>
            <Text style={styles.number}>3</Text>
            <Text style={styles.text}>days left</Text>
            <Text style={styles.text}>to beat Dave</Text>

            <Text style={styles.textBig}>Leaderboard here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#068D3C',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto',
    },
    textBig: {
        fontFamily: 'Roboto-Bold',
        fontSize: 40,
        fontStyle: 'normal',
        textShadowColor: '#3B3A3A',
        textShadowOffset: {width: 0, height: 3},
        textShadowRadius: 4,
        color: 'white',
        marginBottom: 20
    },
    text: {
        fontSize: 20,
        color: 'white'
    },
    number: {
        fontFamily: 'Roboto-Bold',
        fontSize: 25,
        color: 'white'
    }
})
export default HomeScreen;