/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

// screens
import TabOneScreen from '../screens/TabOneScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import Main from '../screens/Main'
import Settings from '../screens/Settings'
import Search from '../screens/Search'
import Notifications from '../screens/Notifications'
import Lang from '../screens/Lang'
import Unit from '../screens/Unit'





// import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';


export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator headerMode="none" >
      {/* <Stack.Screen name="Root" component={TabOneScreen} /> */}
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="TabTwo" component={TabTwoScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Lang" component={Lang}/>
      <Stack.Screen name="Notifications" component={Notifications}/>
      <Stack.Screen name="Unit" component={Unit}/>



    </Stack.Navigator>
  );
}



// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal

