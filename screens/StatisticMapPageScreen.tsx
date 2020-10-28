import React, {useState} from 'react';
import { FlatList, Image, Dimensions } from 'react-native';

export default function StatisticMapScreen() {

  const screenWidth = Dimensions.get("window").width;

  const [images, setimages] = useState([
    require('../img/new1.png'),
    require('../img/new2.png'),
    require('../img/new3.png'),
    require('../img/new4.png'),
    require('../img/new5.png')
  ]);

  return (
    <FlatList
      horizontal={false} 
      showsHorizontalScrollIndicator={false} 
      data={images}
      renderItem={ ({ item, index }) => (
        <Image source={item} // Use item to set the image source
          key={index} // Important to set a key for list items
          style={{
            width:screenWidth - 16,
            height:180,
            borderWidth:2,
            borderColor:'black',
            resizeMode:'contain',
            margin:8
          }}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}