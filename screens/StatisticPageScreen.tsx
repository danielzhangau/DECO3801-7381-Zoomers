import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { LineChart, StackedBarChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ["MON", "TUS", "WED", "THUR", "FRI", "SAT", "SUN"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 80],
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
      strokeWidth: 5 // optional
    }
  ],
  legend: ["Mile Record over this week"] // optional
};

const chartConfig = {
  backgroundGradientFrom: "#b366ff",
  backgroundGradientFromOpacity: 0.4,
  backgroundGradientTo: "#6666ff",
  backgroundGradientToOpacity: 0.9,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const typeData = {
  labels: ["Bus Usage", "Train Usage"],
  legend: ["MON", "TUS", "WED", "THUR", "FRI", "SAT", "SUN"],
  data: [
    [12, 6, 5, 4, 1, 3],
    [3, 5, 1, 0, 1, 4]
  ],
  barColors: ["#000000", "#202020", "#404040", "#808080", "#A0A0A0", "#C0C0C0", "#FFFFFF"]
};

export default function StatisticScreen({ navigation }) {
  return (
    <ImageBackground blurRadius={40} source={require('./../assets/images/tree_of_life.jpg')} style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('./../assets/images/green_miles.png')}
            style={{
              width: 200, height: 100, backgroundColor: 'white', borderRadius: 40,
              alignItems: 'center', justifyContent: 'center', marginBottom: 20, marginTop: 30
            }}
          />
          <Text style={styles.title}>Public Transport Usage</Text>

          {/* chart start after this title */}
          <Text style={styles.barTitle}>Mile Record over this week</Text>
          <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
          />
          <Text >{"\n"}</Text>

          <Text style={styles.barTitle}>Bus and Train Usage</Text>
          <StackedBarChart
            data={typeData}
            width={screenWidth}
            height={430}
            chartConfig={chartConfig}
          />
          <Text >{"\n"}</Text>

          <TouchableOpacity onPress={() => { navigation.navigate('Statistic', { screen: 'StatisticTreeScreen' }) }}>
            <View style={{
              height: 50, width: 300, backgroundColor: 'white',
              alignItems: 'center', justifyContent: 'center',
              borderRadius: 40, marginVertical: 10
            }}>
              <Text style={{
                color: '#30BB4C', fontFamily: 'Roboto-Bold',
                fontSize: 19
              }}>See how much tree you saved</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { navigation.navigate('Statistic', { screen: 'StatisticNewsScreen' }) }}>
            <View style={{
              height: 50, width: 300, backgroundColor: 'white',
              alignItems: 'center', justifyContent: 'center',
              borderRadius: 40, marginVertical: 10
            }}>
              <Text style={{
                color: '#30BB4C', fontFamily: 'Roboto-Bold',
                fontSize: 19
              }}>How world change?</Text>
            </View>
          </TouchableOpacity>
          <Text >{"\n"}</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: 'white',
    marginVertical: 20
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    textShadowColor: '#3B3A3A',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 4,
    color: 'white',
    marginBottom: 20
  }
})