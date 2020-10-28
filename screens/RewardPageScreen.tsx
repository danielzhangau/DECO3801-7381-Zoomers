import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';


export default function RewardScreen({ navigation }) {
    const [miles, setMiles] = useState(92);
    const [available, setAvailable] = useState(0);

    function handleButtonClick(points, avail) {
        setMiles(miles - points)
        setAvailable(available + avail)
    }

    const promptColes = () => {
        const title = 'Are You Sure?';
        const message = 'You want to redeem coles 5$ gift card for 5km?';
        const buttons = [
            { text: 'YES', onPress: () => handleButtonClick(5, 1) },
            { text: 'NO', type: 'cancel' }
        ]
        Alert.alert(title, message, buttons)
    }

    const promptHoyt = () => {
        const title = 'Are You Sure?';
        const message = 'You want to redeem HOYT 15$ egift card for 15km?';
        const buttons = [
            { text: 'YES', onPress: () => handleButtonClick(15, 1) },
            { text: 'NO', type: 'cancel' }
        ]
        Alert.alert(title, message, buttons)
    }

    const promptAirbnb = () => {
        const title = 'Are You Sure?';
        const message = 'You want to redeem Airbnb 30$ egift card for 30km?';
        const buttons = [
            { text: 'YES', onPress: () => handleButtonClick(30, 1) },
            { text: 'NO', type: 'cancel' }
        ]
        Alert.alert(title, message, buttons)
    }

    return (
        <ImageBackground blurRadius={30} source={require('./../assets/images/small_green2.jpg')} style={{}}>
            <ScrollView>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                }}>
                    {/* the top km number button */}
                    <View style={{ height: 100, backgroundColor: '#068D3C', alignItems: 'center', justifyContent: 'center' }} >
                        <TouchableOpacity onPress={() => { navigation.navigate('Home', { screen: 'HomeScreen' }) }}>
                            <View style={{
                                height: 70, width: 250, backgroundColor: 'white',
                                alignItems: 'center', justifyContent: 'center',
                                borderRadius: 40, marginVertical: 30
                            }}>
                                <Text style={{
                                    color: 'black', fontFamily: 'Roboto-Bold',
                                    fontSize: 30
                                }}>{miles}km</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* the top reward purchased switch buttons */}
                    <View style={{ height: 65, backgroundColor: '#068D3C', flexDirection: 'row', justifyContent: 'space-between' }} >
                        <TouchableOpacity onPress={() => { navigation.navigate('Reward') }}>
                            <View style={{ height: 50, width: 170, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{
                                    color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 20
                                }}>Browse Rewards</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('Reward', { screen: 'RewardAvailableScreen' }) }}>
                            <View style={{ height: 50, width: 170, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{
                                    color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 20
                                }}>Available({available})</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* the four mode switch (online, instore and expiry) buttons */}
                    <View style={{ height: 56, flexDirection: 'row', justifyContent: 'space-between' }} >
                        <TouchableOpacity onPress={() => { navigation.navigate('Reward') }}>
                            <View style={{
                                height: 25, width: 90, alignItems: 'center', justifyContent: 'center',
                                backgroundColor: 'white', borderRadius: 40, marginVertical: 18, borderWidth: 1, borderColor: 'black'
                            }}>
                                <Text style={{ color: 'black', fontFamily: 'Roboto', fontSize: 17 }}>View All</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('Reward') }}>
                            <View style={{
                                height: 25, width: 90, alignItems: 'center', justifyContent: 'center',
                                backgroundColor: 'white', borderRadius: 40, marginVertical: 18, borderWidth: 1, borderColor: 'black'
                            }}>
                                <Text style={{ color: 'black', fontFamily: 'Roboto', fontSize: 17 }}>Online</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('Reward') }}>
                            <View style={{
                                height: 25, width: 90, alignItems: 'center', justifyContent: 'center',
                                backgroundColor: 'white', borderRadius: 40, marginVertical: 18, borderWidth: 1, borderColor: 'black'
                            }}>
                                <Text style={{ color: 'black', fontFamily: 'Roboto', fontSize: 17 }}>In-store</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('Reward') }}>
                            <View style={{
                                height: 25, width: 90, alignItems: 'center', justifyContent: 'center',
                                backgroundColor: 'white', borderRadius: 40, marginVertical: 18, borderWidth: 1, borderColor: 'black'
                            }}>
                                <Text style={{ color: 'black', fontFamily: 'Roboto', fontSize: 17 }}>History</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* display the cards */}
                    <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                        {/* online section */}
                        <Text style={styles.text}>ONLINE</Text>
                        <ImageBackground source={require("../assets/images/Coles_background.jpg")} style={{ width: '97.5%', height: 220, marginLeft: 10 }} >
                            <Image
                                source={require("../assets/images/colesCard.png")}
                                style={{
                                    width: '60%', height: 130, borderRadius: 20,
                                    marginLeft: 115, marginTop: 70
                                }}
                            />
                        </ImageBackground>
                        <View style={{ width: '95%', height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={styles.textSmall}>Coles $5 egift card</Text>
                        </View>
                        <TouchableOpacity onPress={promptColes}>
                            <View style={{
                                height: 50, width: 200, backgroundColor: '#068D3C',
                                alignItems: 'center', justifyContent: 'center',
                                borderRadius: 40, marginVertical: 10
                            }}>
                                <Text style={{
                                    color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 22
                                }}>Redeem for 5km</Text>
                            </View>
                        </TouchableOpacity>
                        <Text>{"\n"}</Text>

                        <ImageBackground source={require("../assets/images/hoyts_background.jpg")} style={{ width: '97.5%', height: 220, marginLeft: 10 }} >
                            <Image
                                source={require("../assets/images/hotys.png")}
                                style={{
                                    width: '60%', height: 130, borderRadius: 20,
                                    marginLeft: 115, marginTop: 70
                                }}
                            />
                        </ImageBackground>
                        <View style={{ width: '95%', height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={styles.textSmall}>HOYTS $15 egift card</Text>
                        </View>
                        <TouchableOpacity onPress={promptHoyt}>
                            <View style={{
                                height: 50, width: 200, backgroundColor: '#068D3C',
                                alignItems: 'center', justifyContent: 'center',
                                borderRadius: 40, marginVertical: 10
                            }}>
                                <Text style={{
                                    color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 22
                                }}>Redeem for 15km</Text>
                            </View>
                        </TouchableOpacity>
                        <Text>{"\n"}</Text>

                        <ImageBackground source={require("../assets/images/airbnb_background.jpg")} style={{ width: '97.5%', height: 220, marginLeft: 10 }} >
                            <Image
                                source={require("../assets/images/airbnb.png")}
                                style={{
                                    width: '60%', height: 130, borderRadius: 20,
                                    marginLeft: 115, marginTop: 70
                                }}
                            />
                        </ImageBackground>
                        <View style={{ width: '95%', height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={styles.textSmall}>Airbnb $15 egift card</Text>
                        </View>
                        <TouchableOpacity onPress={promptAirbnb}>
                            <View style={{
                                height: 50, width: 200, backgroundColor: '#068D3C',
                                alignItems: 'center', justifyContent: 'center',
                                borderRadius: 40, marginVertical: 10
                            }}>
                                <Text style={{
                                    color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 22
                                }}>Redeem for 30km</Text>
                            </View>
                        </TouchableOpacity>
                        <Text>{"\n"}</Text>

                        <ImageBackground source={require("../assets/images/Coles_background.jpg")} style={{ width: '97.5%', height: 220, marginLeft: 10 }} >
                            <Image
                                source={require("../assets/images/colesCard.png")}
                                style={{
                                    width: '60%', height: 130, borderRadius: 20,
                                    marginLeft: 115, marginTop: 70
                                }}
                            />
                        </ImageBackground>
                        <View style={{ width: '95%', height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={styles.textSmall}>Coles $30 egift card</Text>
                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate('Reward') }}>
                            <View style={{
                                height: 50, width: 200, backgroundColor: '#068D3C',
                                alignItems: 'center', justifyContent: 'center',
                                borderRadius: 40, marginVertical: 10
                            }}>
                                <Text style={{
                                    color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 22
                                }}>Redeem for 25km</Text>
                            </View>
                        </TouchableOpacity>
                        <Text>{"\n"}</Text>
                        <Text>{"\n"}</Text>

                        {/* instore section */}
                        <Text style={styles.text}>IN-STORE</Text>
                        <ImageBackground source={require("../assets/images/hotel.jpg")} style={{ width: '97.5%', height: 220, marginLeft: 10 }} >
                            <Image
                                source={require("../assets/images/hotel_voucher.jpg")}
                                style={{
                                    width: '60%', height: 130, borderRadius: 20,
                                    marginLeft: 115, marginTop: 70
                                }}
                            />
                        </ImageBackground>
                        <View style={{ width: '95%', height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={styles.textSmall}>Hotel $100 voucher</Text>
                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate('Reward') }}>
                            <View style={{
                                height: 50, width: 200, backgroundColor: '#068D3C',
                                alignItems: 'center', justifyContent: 'center',
                                borderRadius: 40, marginVertical: 10
                            }}>
                                <Text style={{
                                    color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 22
                                }}>Redeem for 20km</Text>
                            </View>
                        </TouchableOpacity>
                        <Text>{"\n"}</Text>
                        <Text>{"\n"}</Text>

                        {/* history section */}
                        <Text style={styles.text}>HISTORY</Text>
                        <ImageBackground source={require("../assets/images/pizza.jpg")} style={{ width: '97.5%', height: 220, marginLeft: 10 }} >
                            <Image
                                source={require("../assets/images/pizza_voucher.jpg")}
                                style={{
                                    width: '60%', height: 130, borderRadius: 20,
                                    marginLeft: 115, marginTop: 70
                                }}
                            />
                        </ImageBackground>
                        <View style={{ width: '95%', height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={styles.textSmall}>Pizza hut 50% voucher</Text>
                        </View>
                        <Text style={styles.textMiddle}>Expire 3 days ago</Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('Reward') }}>
                            <View style={{
                                height: 50, width: 300, backgroundColor: '#068D3C',
                                alignItems: 'center', justifyContent: 'center',
                                borderRadius: 40, marginVertical: 10
                            }}>
                                <Text style={{
                                    color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 22
                                }}>Redeem another for 10km</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto-Bold',
        fontSize: 25,
        color: 'white',
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginVertical: 15,
        textShadowColor: '#3B3A3A',
        textShadowOffset: { width: 0, height: 3 },
        textShadowRadius: 4,
    },
    textMiddle: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
        marginVertical: 10,
        textShadowColor: '#3B3A3A',
        textShadowOffset: { width: 0, height: 3 },
        textShadowRadius: 4,
    },
    textSmall: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: 'black',
    },
})