import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar'

import Home from '../screens/Home'
import Appointments from '../screens/Appointments'
import Schedule from '../screens/Schedule'
import Profile from '../screens/Profile'

const Tab = createBottomTabNavigator();
// 

export default () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar  {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Schedule" component={Schedule} />
      <Tab.Screen name="Appointments" component={Appointments} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}