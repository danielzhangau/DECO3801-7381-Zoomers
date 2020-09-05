import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const RewardScreen = ({navigation}) => {
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
                                    fontSize: 30}}>92km</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* the top reward purchased switch buttons */}
            <View style={{height: 65, backgroundColor: '#068D3C', flexDirection: 'row', justifyContent: 'space-between'}} >
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 50, width: 170, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style = {{color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 20}}>Your Rewards</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 50, width: 170, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style = {{color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 20}}>Purchased(0)</Text>
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
                        <Text style = {{color: 'black', fontFamily: 'Roboto', fontSize: 17}}>Expiry</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* display the cards */}
            <View style={{backgroundColor: '#DFECDC', alignItems: 'center', justifyContent: 'center'}} >
                <Text style={styles.text}>ONLINE</Text>
                <ImageBackground source={require("../img/Coles-supermarket.jpg")} style={{width: '97.5%', height: 220, marginLeft: 10}} >
                    <Image
                        source={{uri: "https://raw.githubusercontent.com/danielzhangau/DECO3801-7381-Zoomers/master/img/coles%20gift%20card.png"}}
                        style={{width: '60%', height: 130, borderRadius: 20, 
                                marginLeft: 115, marginTop: 70}}
                    />
                </ImageBackground>
                <View style={{width: '95%', height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={styles.textSmall}>Coles $5 egift card</Text>
                </View>
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 50, width: 200, backgroundColor: '#068D3C', 
                                    alignItems: 'center', justifyContent: 'center', 
                                    borderRadius: 40, marginVertical: 10}}>
                        <Text style = {{color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 22}}>Redeem for 5km</Text>
                    </View>
                </TouchableOpacity>
                <Text>{"\n"}</Text>

                <ImageBackground source={{uri: "https://raw.githubusercontent.com/danielzhangau/DECO3801-7381-Zoomers/master/img/HOYTS-Frankston-Recliner.jpg"}} style={{width: '97.5%', height: 220, marginLeft: 10}} >
                    <Image
                        source={{uri: "https://raw.githubusercontent.com/danielzhangau/DECO3801-7381-Zoomers/master/img/hotys.png"}}
                        style={{width: '60%', height: 130, borderRadius: 20, 
                                marginLeft: 115, marginTop: 70}}
                    />
                </ImageBackground>
                <View style={{width: '95%', height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={styles.textSmall}>HOYTS $15 egift card</Text>
                </View>
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 50, width: 200, backgroundColor: '#068D3C', 
                                    alignItems: 'center', justifyContent: 'center', 
                                    borderRadius: 40, marginVertical: 10}}>
                        <Text style = {{color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 22}}>Redeem for 15km</Text>
                    </View>
                </TouchableOpacity>
                <Text>{"\n"}</Text>

                <ImageBackground source={{uri: "https://raw.githubusercontent.com/danielzhangau/DECO3801-7381-Zoomers/master/img/airbnb%20p.jpg"}} style={{width: '97.5%', height: 220, marginLeft: 10}} >
                    <Image
                        source={{uri: "https://raw.githubusercontent.com/danielzhangau/DECO3801-7381-Zoomers/master/img/airbnb.png"}}
                        style={{width: '60%', height: 130, borderRadius: 20, 
                                marginLeft: 115, marginTop: 70}}
                    />
                </ImageBackground>
                <View style={{width: '95%', height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={styles.textSmall}>Airbnb $15 egift card</Text>
                </View>
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 50, width: 200, backgroundColor: '#068D3C', 
                                    alignItems: 'center', justifyContent: 'center', 
                                    borderRadius: 40, marginVertical: 10}}>
                        <Text style = {{color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 22}}>Redeem for 30km</Text>
                    </View>
                </TouchableOpacity>
                <Text>{"\n"}</Text>

                <ImageBackground source={{uri: "https://raw.githubusercontent.com/danielzhangau/DECO3801-7381-Zoomers/master/img/Coles-supermarket.jpg"}} style={{width: '97.5%', height: 220, marginLeft: 10}} >
                    <Image
                        source={{uri: "https://raw.githubusercontent.com/danielzhangau/DECO3801-7381-Zoomers/master/img/coles%20gift%20card.png"}}
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
    textSmall: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: 'black',
    },
  })

export default RewardScreen;