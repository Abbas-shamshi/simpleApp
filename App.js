import 'react-native-gesture-handler';
import React, { Fragment } from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import DistanceVC from './components/distance';
import SpeedVC from './components/speed';
import TemperatureVC from './components/temperature';
import VolumeVC from './components/volume';
import WeightVC from './components/weight';
import Currency from './components/currency';
import AgeChecker from './components/ageChecker';
import HomeScreen from './components/homeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />


      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: true}} initialRouteName="Home">
          <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
          <Stack.Screen name="Currency" component={Currency} />
          <Stack.Screen name="Distance" component={DistanceVC} />
          <Stack.Screen name="Volume" component={VolumeVC} />
          <Stack.Screen name="Speed" component={SpeedVC} />
          <Stack.Screen name="Temperature" component={TemperatureVC} />
          <Stack.Screen name="Weight" component={WeightVC} />
          <Stack.Screen name="Age" component={AgeChecker} />

        </Stack.Navigator>
      </NavigationContainer>

    </Fragment >
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
