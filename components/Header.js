import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <SafeAreaView style={tw`items-center flex-row justify-between`}>
      <Icon style={tw`p-2`} name="today-outline" size={45}/> 
      <Text style={tw`text-xl font-bold justify-center pl-20`}>HappenIn</Text>
      <Icon style={tw`pl-12`} name="notifications-outline" size={25}/> 
      <Icon style={tw`p-2`} name="send-outline" size={25}/> 
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({})