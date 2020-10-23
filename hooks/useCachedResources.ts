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
          require('../img/airbnb_p.jpg'),
          require('../img/airbnb.png'),
          require('../img/Coles-supermarket.jpg'),
          require('../img/colesCard.png'),
          require('../img/google-play.png'),
          require('../img/green_miles.png'),
          require('../img/lvgu.jpg'),
          require('../img/reward.png'),
          require('../img/tree_of_life.jpg'),
          require('../img/tree.png'),
          require('../img/small_green.jpg'),
          require('../img/small_green2.jpg'),
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
