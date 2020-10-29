import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  function cacheImages(images: any) {
    return images.map((image: any) => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Preload images
        await cacheImages([
          require('../assets/images/airbnb_background.jpg'),
          require('../assets/images/airbnb.png'),
          require('../assets/images/Coles_background.jpg'),
          require('../assets/images/colesCard.png'),
          require('../assets/images/green_miles.png'),
          require('../assets/images/hotel_voucher.jpg'),
          require('../assets/images/hotel.jpg'),
          require('../assets/images/hotys.png'),
          require('../assets/images/hoyts_background.jpg'),
          require('../assets/images/lvgu.jpg'),
          require('../assets/images/pizza_voucher.jpg'),
          require('../assets/images/pizza.jpg'),
          require('../assets/images/qr_bar.png'),
          require('../assets/images/lvgu.jpg'),
          require('../assets/images/small_green.jpg'),
          require('../assets/images/small_green2.jpg'),
          require('../assets/images/tree_of_life.jpg'),
          require('../assets/images/tree.png'),
          require('../assets/images/new1.png'),
          require('../assets/images/new2.png'),
          require('../assets/images/new3.png'),
          require('../assets/images/new4.png'),
          require('../assets/images/new5.png')
        ]);

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          'Roboto': require('../assets/fonts/Roboto-Regular.ttf'),
          'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
          'Roboto-Italic': require('../assets/fonts/Roboto-Italic.ttf'),
          'Roboto-BoldItalic': require('../assets/fonts/Roboto-BoldItalic.ttf')
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
