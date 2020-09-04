import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Loading: {
            screens: {
              LoadingScreen: 'loading',
            },
          },
          Login: {
            screens: {
              LoginScreen: 'login',
            },
          },
          Signup: {
            screens: {
              SignupScreen: 'signup',
            },
          },
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
