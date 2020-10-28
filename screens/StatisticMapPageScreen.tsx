import React, { useState } from 'react';
import { FlatList, Image, Dimensions, ImageBackground, Text, View } from 'react-native';

export default function StatisticNewsScreen() {

  const screenWidth = Dimensions.get("window").width;

  const [images, setimages] = useState([
    require('../assets/images/new1.png'),
    require('../assets/images/new2.png'),
    require('../assets/images/new3.png'),
    require('../assets/images/new4.png'),
    require('../assets/images/new5.png')
  ]);

  return (
    <ImageBackground blurRadius={40} source={require('./../assets/images/tree_of_life.jpg')} style={{ flex: 1 }}>
      <View>
        <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 30, color: 'white', alignSelf: 'center', marginVertical: 10 }}>News</Text>
      </View>

      <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        data={images}
        renderItem={({ item, index }) => (
          <Image source={item} // Use item to set the image source
            key={index} // Important to set a key for list items
            style={{
              width: screenWidth - 16,
              height: 178,
              borderWidth: 2,
              borderColor: 'black',
              resizeMode: 'contain',
              margin: 8
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </ImageBackground>
  );
}