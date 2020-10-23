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
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Profile: {
            screens: {
              ProfileScreen: 'profile',
            },
          },
          Reward: {
            screens: {
              RewardScreen: 'reward',
              RewardAvailableScreen: 'rewardAvailable',
            },
          },
          Statistic: {
            screens: {
              StatisticScreen: 'statistic',
              StatisticTreeScreen: 'statisticTree',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
