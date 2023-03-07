import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Recommended from './Recommended';
import New from './New';

const Tabs = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <Tabs.Navigator
    initialRouteName="Feed"
    screenOptions={{
      tabBarActiveTintColor: 'black',
      tabBarLabelStyle: { fontSize: 17, fontWeight: "bold" },
      tabBarStyle: { backgroundColor: 'white' },
    }}
  >
    <Tabs.Screen
      name="Recommended"
      component={Recommended}
      options={{ tabBarLabel: 'Recommended' }}
      />
      <Tabs.Screen
      name="New"
      component={New}
      options={{ tabBarLabel: 'New' }}
      />
  </Tabs.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})