import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import LoadingScreen from '../screens/LoadingPageScreen';
import LoginScreen from '../screens/LoginPageScreen';
import SignupScreen from '../screens/SignupPageScreen';
import ProfileScreen from '../screens/ProfilePageScreen';
import HomeScreen from '../screens/HomePageScreen';
import RewardScreen from '../screens/RewardPageScreen';
import StatisticScreen from '../screens/StatisticPageScreen';
import StatisticTreeScreen from '../screens/StatisticTreePageScreen';
import StatisticMapScreen from '../screens/StatisticMapPageScreen';
import { BottomTabParamList, LoadingParamList, LoginParamList, SignupParamList, HomeParamList, ProfileParamList, RewardParamList, StatisticParamList, StatisticTreeParamList, StatisticMapParamList } from '../types';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Loading"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Loading"
        component={LoadingNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Login"
        component={LoginNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Signup"
        component={SignupNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Reward"
        component={RewardNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Statistic"
        component={StatisticNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="StatisticTree"
        component={StatisticTreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="StatisticMap"
        component={StatisticMapNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const LoadingStack = createStackNavigator<LoadingParamList>();

function LoadingNavigator() {
  return (
    <LoadingStack.Navigator>
      <LoadingStack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={{ headerTitle: 'Loading Page' }}
      />
    </LoadingStack.Navigator>
  );
}

const LoginStack = createStackNavigator<LoginParamList>();

function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerTitle: 'Login Page' }}
      />
    </LoginStack.Navigator>
  );
}

const SignupStack = createStackNavigator<SignupParamList>();

function SignupNavigator() {
  return (
    <SignupStack.Navigator>
      <SignupStack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{ headerTitle: 'Signup Page' }}
      />
    </SignupStack.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home Page' }}
      />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: 'Profile' }}
      />
    </ProfileStack.Navigator>
  );
}

const RewardStack = createStackNavigator<RewardParamList>();

function RewardNavigator() {
  return (
    <RewardStack.Navigator>
      <RewardStack.Screen
        name="RewardScreen"
        component={RewardScreen}
        options={{ headerTitle: 'Reward' }}
      />
    </RewardStack.Navigator>
  );
}

const StatisticStack = createStackNavigator<StatisticParamList>();

function StatisticNavigator() {
  return (
    <StatisticStack.Navigator>
      <StatisticStack.Screen
        name="StatisticScreen"
        component={StatisticScreen}
        options={{ headerTitle: 'Statistic' }}
      />
    </StatisticStack.Navigator>
  );
}

const StatisticTreeStack = createStackNavigator<StatisticTreeParamList>();

function StatisticTreeNavigator() {
  return (
    <StatisticTreeStack.Navigator>
      <StatisticTreeStack.Screen
        name="StatisticTreeScreen"
        component={StatisticTreeScreen}
        options={{ headerTitle: 'StatisticTree' }}
      />
    </StatisticTreeStack.Navigator>
  );
}

const StatisticMapStack = createStackNavigator<StatisticMapParamList>();

function StatisticMapNavigator() {
  return (
    <StatisticMapStack.Navigator>
      <StatisticMapStack.Screen
        name="StatisticMapScreen"
        component={StatisticMapScreen}
        options={{ headerTitle: 'StatisticMap' }}
      />
    </StatisticMapStack.Navigator>
  );
}