import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import insta from './screens/Instagram.js'
import faceb from './screens/Facebook.js'

export default class App extends React.Component{
  render(){
  return (
    <AppContainer></AppContainer>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
var TabNavigator = createBottomTabNavigator({
  Facebook : faceb,
  Instagram : insta
})

const AppContainer = createAppContainer(TabNavigator)