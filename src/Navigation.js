import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import Button from './components/Button';
import HomeScreen from './screens/Home'

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#000',
          borderTopColor: 'rgba(255, 2555, 255, 0.3)',
        },
        activeTintColor: '#FFF',
      }}
      >
        <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <EntypoIcon name="home" size={size} color={color}/>
        )
      }}
      />
      <Tab.Screen
      name="Discover"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <FeatherIcon name="search" size={size} color={color}/>
        )
      }}
      />
      <Tab.Screen
      name="New"
      component={HomeScreen}
      options={{
        title: '',
        tabBarIcon: ({ size, color }) => (
          <Button />
        )
      }}
      />
      <Tab.Screen
      name="Inbox"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <EntypoIcon name="chat" size={size} color={color}/>
        )
      }}
      />
      <Tab.Screen
      name="Profile"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <AntDesignIcon name="user" size={size} color={color}/>
        )
      }}
      />      
      
    </Tab.Navigator>
    </NavigationContainer>
  );
}
