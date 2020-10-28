import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, Button, Alert, ImageBackground } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    return (
        <ImageBackground blurRadius={40} source={require('./../assets/images/tree_of_life.jpg')} style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.text}>Good day! HelloWorld</Text>
                <Image
                    source={require('./../assets/images/lvgu.jpg')}
                    style={{ width: 150, height: 150, marginVertical: 20, borderRadius: 400 / 2 }}
                />
                <Text style={styles.text}>You have travelled by using public transport </Text>
                <Text style={styles.number}>215km</Text>
                <Text style={styles.text}>Your available travel money</Text>
                <Text style={styles.number}>92km</Text>

                {/* redeem button */}
                <TouchableOpacity onPress={() => { navigation.navigate('Reward', { screen: 'RewardScreen' }) }}>
                    <View style={{
                        height: 50, width: 200, backgroundColor: 'white',
                        alignItems: 'center', justifyContent: 'center',
                        borderRadius: 40, marginVertical: 9
                    }}>
                        <Text style={{
                            color: '#30BB4C', fontFamily: 'Roboto-Bold',
                            fontSize: 22
                        }}>REDEEM NOW</Text>
                    </View>
                </TouchableOpacity>

                {/* link go card button */}
                <TouchableOpacity onPress={() => Alert.alert("Under Development")}>
                    <View style={{
                        height: 50, width: 200, backgroundColor: 'white',
                        alignItems: 'center', justifyContent: 'center',
                        borderRadius: 40, marginBottom: 9
                    }}>
                        <Text style={{
                            color: '#30BB4C', fontFamily: 'Roboto-Bold',
                            fontSize: 22
                        }}>LINK GO CARD</Text>
                    </View>
                </TouchableOpacity>

                {/* sign out button */}
                <TouchableOpacity onPress={() => { navigation.navigate('Home', { screen: 'LoginScreen' }) }}>
                    <View style={{
                        height: 50, width: 200, backgroundColor: 'white',
                        alignItems: 'center', justifyContent: 'center',
                        borderRadius: 40, marginVertical: 5
                    }}>
                        <Text style={{
                            color: '#30BB4C', fontFamily: 'Roboto-Bold',
                            fontSize: 22
                        }}>SIGN OUT</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto-Bold',
    },
    text: {
        fontSize: 23,
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