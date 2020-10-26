import React , { useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';


export default function RewardScreen({navigation}){
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
            { text: 'YES', onPress: () => handleButtonClick(5, 1)},
            { text: 'NO', type: 'cancel'}
        ]
        Alert.alert(title, message, buttons)
    }

    const promptHoyt = () => {
        const title = 'Are You Sure?';
        const message = 'You want to redeem HOYT 15$ egift card for 15km?';
        const buttons = [
            { text: 'YES', onPress: () => handleButtonClick(15, 1)},
            { text: 'NO', type: 'cancel'}
        ]
        Alert.alert(title, message, buttons)
    }

    const promptAirbnb = () => {
        const title = 'Are You Sure?';
        const message = 'You want to redeem Airbnb 30$ egift card for 30km?';
        const buttons = [
            { text: 'YES', onPress: () => handleButtonClick(30, 1)},
            { text: 'NO', type: 'cancel'}
        ]
        Alert.alert(title, message, buttons)
    }

    return (
      <ScrollView>
        <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
            }}>
            {/* the top km number button */}
            <View style={{height: 100, backgroundColor: '#068D3C', alignItems: 'center', justifyContent: 'center' }} >
                <TouchableOpacity onPress = {() => {navigation.navigate('Home')}}>
                    <View style = {{height: 70, width: 250, backgroundColor: 'white', 
                                    alignItems: 'center', justifyContent: 'center', 
                                    borderRadius: 40, marginVertical: 30}}>
                        <Text style = {{color: 'black', fontFamily: 'Roboto-Bold',
                                    fontSize: 30}}>{miles}km</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* the top reward purchased switch buttons */}
            <View style={{height: 65, backgroundColor: '#068D3C', flexDirection: 'row', justifyContent: 'space-between'}} >
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 50, width: 170, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style = {{color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 20}}>Browse Rewards</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward', { screen: 'RewardAvailableScreen' })}}>
                    <View style = {{height: 50, width: 170, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style = {{color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 20}}>Available({available})</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* the four mode switch (online, instore and expiry) buttons */}
            <View style={{height: 56, backgroundColor: '#DFECDC', flexDirection: 'row', justifyContent: 'space-between'}} >
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 25, width: 90, alignItems: 'center', justifyContent: 'center', 
                                    backgroundColor: 'white', borderRadius: 40, marginVertical: 18, borderWidth: 1, borderColor: 'black' }}>
                        <Text style = {{color: 'black', fontFamily: 'Roboto', fontSize: 17}}>View All</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 25, width: 90, alignItems: 'center', justifyContent: 'center', 
                                    backgroundColor: 'white', borderRadius: 40, marginVertical: 18, borderWidth: 1, borderColor: 'black' }}>
                        <Text style = {{color: 'black', fontFamily: 'Roboto', fontSize: 17}}>Online</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 25, width: 90, alignItems: 'center', justifyContent: 'center', 
                                    backgroundColor: 'white', borderRadius: 40, marginVertical: 18, borderWidth: 1, borderColor: 'black' }}>
                        <Text style = {{color: 'black', fontFamily: 'Roboto', fontSize: 17}}>In-store</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 25, width: 90, alignItems: 'center', justifyContent: 'center', 
                                    backgroundColor: 'white', borderRadius: 40, marginVertical: 18, borderWidth: 1, borderColor: 'black' }}>
                        <Text style = {{color: 'black', fontFamily: 'Roboto', fontSize: 17}}>History</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* display the cards */}
            <View style={{backgroundColor: '#DFECDC', alignItems: 'center', justifyContent: 'center'}} >
                {/* online section */}
                <Text style={styles.text}>ONLINE</Text>
                <ImageBackground source={require("../img/Coles-supermarket.jpg")} style={{width: '97.5%', height: 220, marginLeft: 10}} >
                    <Image
                        source={require("../img/colesCard.png")}
                        style={{width: '60%', height: 130, borderRadius: 20, 
                                marginLeft: 115, marginTop: 70}}
                    />
                </ImageBackground>
                <View style={{width: '95%', height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={styles.textSmall}>Coles $5 egift card</Text>
                </View>
                <TouchableOpacity onPress = {promptColes}>
                    <View style = {{height: 50, width: 200, backgroundColor: '#068D3C', 
                                    alignItems: 'center', justifyContent: 'center', 
                                    borderRadius: 40, marginVertical: 10}}>
                        <Text style = {{color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 22}}>Redeem for 5km</Text>
                    </View>
                </TouchableOpacity>
                <Text>{"\n"}</Text>

                <ImageBackground source={require("../img/HOYTS-Frankston-Recliner.jpg")} style={{width: '97.5%', height: 220, marginLeft: 10}} >
                    <Image
                        source={require("../img/hotys.png")}
                        style={{width: '60%', height: 130, borderRadius: 20, 
                                marginLeft: 115, marginTop: 70}}
                    />
                </ImageBackground>
                <View style={{width: '95%', height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={styles.textSmall}>HOYTS $15 egift card</Text>
                </View>
                <TouchableOpacity onPress = {promptHoyt}>
                    <View style = {{height: 50, width: 200, backgroundColor: '#068D3C', 
                                    alignItems: 'center', justifyContent: 'center', 
                                    borderRadius: 40, marginVertical: 10}}>
                        <Text style = {{color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 22}}>Redeem for 15km</Text>
                    </View>
                </TouchableOpacity>
                <Text>{"\n"}</Text>

                <ImageBackground source={require("../img/airbnb_p.jpg")} style={{width: '97.5%', height: 220, marginLeft: 10}} >
                    <Image
                        source={require("../img/airbnb.png")}
                        style={{width: '60%', height: 130, borderRadius: 20, 
                                marginLeft: 115, marginTop: 70}}
                    />
                </ImageBackground>
                <View style={{width: '95%', height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={styles.textSmall}>Airbnb $15 egift card</Text>
                </View>
                <TouchableOpacity onPress = {promptAirbnb}>
                    <View style = {{height: 50, width: 200, backgroundColor: '#068D3C', 
                                    alignItems: 'center', justifyContent: 'center', 
                                    borderRadius: 40, marginVertical: 10}}>
                        <Text style = {{color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 22}}>Redeem for 30km</Text>
                    </View>
                </TouchableOpacity>
                <Text>{"\n"}</Text>

                <ImageBackground source={require("../img/Coles-supermarket.jpg")} style={{width: '97.5%', height: 220, marginLeft: 10}} >
                    <Image
                        source={require("../img/colesCard.png")}
                        style={{width: '60%', height: 130, borderRadius: 20, 
                                marginLeft: 115, marginTop: 70}}
                    />
                </ImageBackground>
                <View style={{width: '95%', height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={styles.textSmall}>Coles $30 egift card</Text>
                </View>
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 50, width: 200, backgroundColor: '#068D3C', 
                                    alignItems: 'center', justifyContent: 'center', 
                                    borderRadius: 40, marginVertical: 10}}>
                        <Text style = {{color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 22}}>Redeem for 25km</Text>
                    </View>
                </TouchableOpacity>
                <Text>{"\n"}</Text>
                <Text>{"\n"}</Text>

                {/* instore section */}
                <Text style={styles.text}>IN-STORE</Text>
                <ImageBackground source={require("../img/hotel.jpg")} style={{width: '97.5%', height: 220, marginLeft: 10}} >
                    <Image
                        source={require("../img/hotel_vou.jpg")}
                        style={{width: '60%', height: 130, borderRadius: 20, 
                                marginLeft: 115, marginTop: 70}}
                    />
                </ImageBackground>
                <View style={{width: '95%', height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={styles.textSmall}>Hotel $100 voucher</Text>
                </View>
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 50, width: 200, backgroundColor: '#068D3C', 
                                    alignItems: 'center', justifyContent: 'center', 
                                    borderRadius: 40, marginVertical: 10}}>
                        <Text style = {{color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 22}}>Redeem for 20km</Text>
                    </View>
                </TouchableOpacity>
                <Text>{"\n"}</Text>
                <Text>{"\n"}</Text>

                {/* history section */}
                <Text style={styles.text}>HISTORY</Text>
                <ImageBackground source={require("../img/pizza.jpg")} style={{width: '97.5%', height: 220, marginLeft: 10}} >
                    <Image
                        source={require("../img/pizza_vou.jpg")}
                        style={{width: '60%', height: 130, borderRadius: 20, 
                                marginLeft: 115, marginTop: 70}}
                    />
                </ImageBackground>
                <View style={{width: '95%', height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={styles.textSmall}>Pizza hut 50% voucher</Text>
                </View>
                <Text style={styles.textMiddle}>Expire 3 days ago</Text>
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 50, width: 300, backgroundColor: '#068D3C', 
                                    alignItems: 'center', justifyContent: 'center', 
                                    borderRadius: 40, marginVertical: 10}}>
                        <Text style = {{color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 22}}>Redeem another for 10km</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: 'black',
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginBottom: 10,
    },
    textMiddle: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: 'black',
        alignSelf: 'center',
        marginVertical: 10
    },
    textSmall: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: 'black',
    },
  })