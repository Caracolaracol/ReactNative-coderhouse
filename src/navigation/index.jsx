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
import ReserveBook from '../pages/ReserveBook/ReserveBook';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator()
const Authstack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

export function MyAuthStack(){
  
  return (
    <Authstack.Navigator
    initialRouteName='login'
    screenOptions={{
      headerShown:false,
    }}>
      <Authstack.Screen name='login' component={Login} />
    </Authstack.Navigator>
  )
}

export function MyStack(){
  
  return (
    <Stack.Navigator
    initialRouteName='HomeScreen'
    screenOptions={{
      headerShown:false,
    }}>
      <Stack.Screen name='HomeScreen' component={MyTabs} />
      <Stack.Screen name='ItemDetail' component={ItemDetail} />
      <Stack.Screen name='ReserveBook' component={ReserveBook} />
    </Stack.Navigator>
  )
}

export function MyTabs({route}){
  console.log(route)

  return(
    <Tab.Navigator 
    tabBar={(props) => <NavBar {...props}/>}
    screenOptions={{
      headerShown:false,
      tabBarHideOnKeyboard:true
    }}
    >
      <Tab.Screen name='Explore' component={Explore} options={{title:'Explore'}} initialParams={{ name: 'Explore' }}/>
      <Tab.Screen name='Favourites' component={Favourites} options={{title:'Favourites'}} initialParams={{ name: 'Favourites' }}/>
      <Tab.Screen name='Notifications' component={Notfications} options={{title:'Notifications'}} initialParams={{ name: 'Notifications' }}/>
      <Tab.Screen name='Profile' component={Profile} options={{title:'Profile'}} initialParams={{ name: 'Profile' }}/>
    </Tab.Navigator>
      )
}


export default function Navigator() {
  const userId = useSelector(state => state.auth.userId)
  const token = useSelector(state => state.auth.token) 
  return (
    <NavigationContainer>
      { (userId && token) ? <MyStack/> : <MyAuthStack />}
    </NavigationContainer>
  )
}
