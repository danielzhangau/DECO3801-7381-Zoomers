import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, Button } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

const ProfileScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Good day! HelloWorld</Text>
            <Image
                source={require('./../img/lvgu.jpg')}
                style={{width: 190, height: 190, marginVertical: 20, borderRadius: 400/ 2}}
            />
            <Text style={styles.text}>You have travelled by using public transport </Text>
            <Text style={styles.number}>215km</Text>
            <Text style={styles.text}>Your available travel money</Text>
            <Text style={styles.number}>92km</Text>

            <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                <View style = {{height: 50, width: 200, backgroundColor: 'white', 
                                alignItems: 'center', justifyContent: 'center', 
                                borderRadius: 40, marginVertical: 30}}>
                    <Text style = {{color: '#30BB4C', fontFamily: 'Roboto-Bold',
                                fontSize: 22}}>REDEEM NOW</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => {navigation.navigate('Login')}}>
                <View style = {{height: 50, width: 200, backgroundColor: 'white', 
                                alignItems: 'center', justifyContent: 'center', 
                                borderRadius: 40, marginVertical: 5}}>
                    <Text style = {{color: '#30BB4C', fontFamily: 'Roboto-Bold',
                                fontSize: 22}}>SIGN OUT</Text>
                </View>
            </TouchableOpacity>
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
    text: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center', 
        marginHorizontal: 50
    },
    number: {
        fontFamily: 'Roboto-Bold',
        fontSize: 25,
        color: 'white',
        marginTop: 8,
        marginBottom: 8
    }
})
export default ProfileScreen;