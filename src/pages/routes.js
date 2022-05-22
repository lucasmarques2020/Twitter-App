import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home/index'
import Search from './Search/index'
import Message from './Message/index'
import Notifications from './Notifications/index'

const Tab = createBottomTabNavigator();
export default function TabsMenu() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Search" component={Search}/>
      <Tab.Screen name="Message" component={Message}/>
      <Tab.Screen name="Notifications" component={Notifications}/>
    </Tab.Navigator>
  );
}

