import React from 'react';
import { Text, View, Image } from 'react-native';

const LoadingScreen = () => {
    const loading_text = "Get Rewarded for All Your Public Transport Travel"
    return (
        <View>
            <Image
                source={{uri: "https://raw.githubusercontent.com/danielzhangau/DECO3801-7381-Zoomers/master/img/green%20miles.png"}}
                style={{width: 200, height: 200}}
            />
            <Text>{loading_text}</Text>
        </View>
    )
}

export default LoadingScreen;