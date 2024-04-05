import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HomeScreen} from '../modules/home/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListScreen} from '../modules/list/ListScreen';

export const Navigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{tabBarStyle: {paddingTop: 5}}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon name="home" size={20} color="#900" />,
          tabBarLabelStyle: {fontSize: 16},
          headerShown: false,
          tabBarLabel: 'Início',
        }}
      />
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarIcon: () => <Icon name="list" size={20} color="#900" />,
          headerShown: false,
          tabBarLabel: 'Lista',
          tabBarLabelStyle: {fontSize: 16},
        }}
      />
    </Tab.Navigator>
  );
};
