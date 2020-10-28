import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Text, Alert, ImageBackground } from 'react-native';
// import Icon from 'react-native-ionicons'
import Icon from 'react-native-vector-icons/Ionicons'

export default function TripScreen({ navigation }) {
    const [addS, setAddStart] = useState('53 Albert St, Brisbane city');
    const [addE, setAddEnd] = useState('13 Riverview Drive, St Lucia');

    function handleButtonClickS(address) {
        setAddStart(address)
    }
    function handleButtonClickE(address) {
        setAddEnd(address)
    }

    // use to handle correct button tap change source address state
    const promptAddressStart = () => {
        Alert.prompt(
            "Enter destination",
            "Enter the correct start destination",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: address => handleButtonClickS(address)
                }
            ],
        );
    }

    const promptAddressEnd = () => {
        Alert.prompt(
            "Enter destination",
            "Enter the correct start destination",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: address => handleButtonClickE(address)
                }
            ],
        );
    }


    return (
        <ImageBackground blurRadius={30} source={require('./../assets/images/tree_of_life.jpg')} style={{}}>
            <ScrollView>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                }}>
                    {/* month and km number */}
                    <View style={{ height: 110, backgroundColor: '#068D3C', flexDirection: 'row', justifyContent: 'space-between' }} >
                        <TouchableOpacity onPress={() => { navigation.navigate('Reward') }}>
                            <View style={{
                                height: 50, width: 170, alignItems: 'center',
                                backgroundColor: 'white', justifyContent: 'center',
                                borderRadius: 40, marginVertical: 30
                            }}>
                                <Text style={{ color: 'green', fontFamily: 'Roboto-Bold', fontSize: 20 }}>October</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('Home', { screen: 'HomeScreen' }) }}>
                            <View style={{
                                height: 50, width: 170, alignItems: 'center',
                                backgroundColor: 'white', justifyContent: 'center',
                                borderRadius: 40, marginVertical: 30
                            }}>
                                <Text style={{ color: 'green', fontFamily: 'Roboto-Bold', fontSize: 20 }}>92km</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* the date of today */}
                    <View style={{ height: 76, flexDirection: 'row', justifyContent: 'center' }} >
                        <TouchableOpacity onPress={() => { navigation.navigate('Reward') }}>
                            <View style={{
                                height: 35, width: 200, alignItems: 'center', justifyContent: 'center',
                                backgroundColor: 'white', borderRadius: 30, marginVertical: 18, borderWidth: 1, borderColor: 'grey'
                            }}>
                                <Text style={{ color: 'green', fontFamily: 'Roboto-Bold', fontSize: 18 }}>THU, 29TH</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* display the cards */}
                    <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                        <View style={{ width: '95%', height: 180, backgroundColor: 'white', borderRadius: 30 }} >
                            <View style={{ height: 60, flexDirection: 'row', marginTop: 20, justifyContent: 'space-evenly', marginRight: '34%' }} >
                                <Icon name="md-bus" size={50} />
                                <Text style={{ color: 'green', fontFamily: 'Roboto-Bold', fontSize: 30, marginTop: 10, marginLeft: 50 }}>3km</Text>
                            </View>
                            <View style={{ height: 40, flexDirection: 'row', justifyContent: 'space-evenly' }} >
                                <Icon name="md-arrow-dropright-circle" size={30} />
                                <Text style={{ color: 'green', fontFamily: 'Roboto-Bold', fontSize: 23 }}>------------------</Text>
                                <Icon name="md-checkmark-circle" size={30} />
                            </View>
                            <View style={{ height: 20, flexDirection: 'row', justifyContent: "space-evenly" }} >
                                <Text style={styles.textSmall}>{addS} </Text>
                                <Text>    </Text>
                                <Text style={styles.textSmall}>{addE} </Text>
                            </View>
                            <View style={{ height: 20, flexDirection: 'row', justifyContent: "space-evenly" }} >
                                <Text style={styles.textSmall}>11:20am </Text>
                                <Text>                                  </Text>
                                <Text style={styles.textSmall}>12:35pm </Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <TouchableOpacity onPress={promptAddressStart}>
                                <Text style={{ color: 'white', fontFamily: 'Roboto-Bold', fontSize: 20, marginRight: 90 }}>Not Correct?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={promptAddressEnd}>
                                <Text style={{ color: 'white', fontFamily: 'Roboto-Bold', fontSize: 20 }}>Not Correct?</Text>
                            </TouchableOpacity>
                        </View>
                        <Text>{"\n"}</Text>

                        <View style={{ width: '95%', height: 180, backgroundColor: 'white', borderRadius: 30 }} >
                            <View style={{ height: 60, flexDirection: 'row', marginTop: 20, justifyContent: 'space-evenly', marginRight: '34%' }} >
                                <Icon name="md-bus" size={50} />
                                <Text style={{
                                    color: 'green', fontFamily: 'Roboto-Bold', fontSize: 30,
                                    marginTop: 10, marginLeft: 50
                                }}>5km</Text>
                            </View>
                            <View style={{ height: 40, flexDirection: 'row', justifyContent: 'space-evenly' }} >
                                <Icon name="md-arrow-dropright-circle" size={30} />
                                <Text style={{ color: 'green', fontFamily: 'Roboto-Bold', fontSize: 23 }}>------------------</Text>
                                <Icon name="md-checkmark-circle" size={30} />
                            </View>
                            <View style={{ height: 20, flexDirection: 'row', justifyContent: "space-evenly" }} >
                                <Text style={styles.textSmall}>Indooroopilly </Text>
                                <Text>                              </Text>
                                <Text style={styles.textSmall}>Roma Street </Text>
                            </View>
                            <View style={{ height: 20, flexDirection: 'row', justifyContent: "space-evenly" }} >
                                <Text style={styles.textSmall}>1:50om </Text>
                                <Text>                                  </Text>
                                <Text style={styles.textSmall}>2:20pm </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <TouchableOpacity onPress={promptAddressStart}>
                                <Text style={{ color: 'white', fontFamily: 'Roboto-Bold', fontSize: 20, marginRight: 90 }}>Not Correct?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={promptAddressEnd}>
                                <Text style={{ color: 'white', fontFamily: 'Roboto-Bold', fontSize: 20 }}>Not Correct?</Text>
                            </TouchableOpacity>
                        </View>
                        <Text>{"\n"}</Text>

                        <View style={{ width: '95%', height: 180, backgroundColor: 'white', borderRadius: 30 }} >
                            <View style={{ height: 60, flexDirection: 'row', marginTop: 20, justifyContent: 'space-evenly', marginRight: '34%' }} >
                                <Icon name="md-bus" size={50} />
                                <Text style={{ color: 'green', fontFamily: 'Roboto-Bold', fontSize: 30, marginTop: 10, marginLeft: 50 }}>1km</Text>
                            </View>
                            <View style={{ height: 40, flexDirection: 'row', justifyContent: 'space-evenly' }} >
                                <Icon name="md-arrow-dropright-circle" size={30} />
                                <Text style={{ color: 'green', fontFamily: 'Roboto-Bold', fontSize: 23 }}>------------------</Text>
                                <Icon name="md-checkmark-circle" size={30} />
                            </View>
                            <View style={{ height: 20, flexDirection: 'row', justifyContent: "space-evenly" }} >
                                <Text style={styles.textSmall}>2 Man St, Brisbane city </Text>
                                <Text>       </Text>
                                <Text style={styles.textSmall}>3 Sun Terrace, Spring Hill </Text>
                            </View>
                            <View style={{ height: 20, flexDirection: 'row', justifyContent: "space-evenly" }} >
                                <Text style={styles.textSmall}>4:56am </Text>
                                <Text>                                  </Text>
                                <Text style={styles.textSmall}>6:40pm </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <TouchableOpacity onPress={promptAddressStart}>
                                <Text style={{ color: 'white', fontFamily: 'Roboto-Bold', fontSize: 20, marginRight: 90 }}>Not Correct?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={promptAddressEnd}>
                                <Text style={{ color: 'white', fontFamily: 'Roboto-Bold', fontSize: 20 }}>Not Correct?</Text>
                            </TouchableOpacity>
                        </View>
                        <Text>{"\n"}</Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
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
        fontFamily: 'Roboto-Bold',
        fontSize: 13,
        color: '#008F26',
    },
})