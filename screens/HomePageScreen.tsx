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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DFECDC',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBig: {
        // fontFamily: Roboto,
        fontSize: 40,
        // fontStyle: medium,
    },
    text: {
        // fontFamily: Roboto,
        fontSize: 20,
        // fontStyle: medium,
    },
    number: {
        // fontFamily: Roboto,
        fontSize: 25,
        // fontStyle: medium,
    }
})
export default HomeScreen;