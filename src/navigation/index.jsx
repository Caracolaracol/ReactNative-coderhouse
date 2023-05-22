import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Explore from '../pages/Explore';
import Favourites from '../pages/Favourites';
import Notfications from '../pages/Notifications';
import Profile from '../pages/Profile';
import NavBar from '../components/NavBar';
import Login from '../pages/Login';
import ItemDetail from '../pages/ItemDetail'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

export function MyStack(){
  
  return (
    <Stack.Navigator
    initialRouteName='HomeScreen'
    screenOptions={{
      headerShown:false,
    }}>
      <Stack.Screen name='HomeScreen' component={MyTabs} />
      <Stack.Screen name='ItemDetail' component={ItemDetail} />
      <Stack.Screen name='logIn' component={Login} />
    </Stack.Navigator>
  )
}

export function MyTabs(){

  return(
    <Tab.Navigator 
    tabBar={(props) => <NavBar {...props}/>}
    screenOptions={{
      headerShown:false
    }}
    >
      <Tab.Screen name='Explore' component={Explore} />
      <Tab.Screen name='Favourites' component={Favourites} />
      <Tab.Screen name='Notifications' component={Notfications} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
      )
}


export default function Navigator() {


  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}
