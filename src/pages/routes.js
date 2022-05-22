import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home/index'
import Search from './Search/index'
import Message from './Message/index'
import Notifications from './Notifications/index'

import { Entypo, Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function TabsMenu() {
  return (
    <Tab.Navigator
    screenOptions={{ 
      headerStyle: { 
        backgroundColor: 'red' 
      },
      tabBarActiveTintColor: '#02A4D3',
    }}
    >
      <Tab.Screen 
      name="Home" 
      component={Home}
      options={{
        tabBarIcon: ({size, color}) => (
          <Entypo name="home" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen 
      name="Search" 
      component={Search}
      options={{
        tabBarIcon: ({size, color}) => (
          <Entypo name="magnifying-glass" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen 
      name="Message" 
      component={Message}
      options={{
        tabBarIcon: ({size, color}) => (
          <Entypo name="bell" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen 
      name="Notifications" 
      component={Notifications}
      options={{
        tabBarIcon: ({size, color}) => (
          <Entypo name="chat" size={size} color={color} />
        )
      }}
      />
    </Tab.Navigator>
  );
}

