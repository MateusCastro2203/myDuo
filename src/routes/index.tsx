import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from '../modules/home/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListScreen} from '../modules/list/ListScreen';
import {MovieDetails} from '../modules/movie/MovieDetailScreen';

export const Navigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const Tabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: '#242e34', paddingTop: 10},
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <Icon name="home" size={20} color="#FFFFFF" />,
            tabBarLabelStyle: {fontSize: 16},
            headerShown: false,
            tabBarLabel: 'Início',
          }}
        />
        {/* <Tab.Screen
          name="List"
          component={ListScreen}
          options={{
            tabBarIcon: () => <Icon name="list" size={20} color="#FFFFFF" />,
            headerShown: false,
            tabBarLabel: 'Lista',
            tabBarLabelStyle: {fontSize: 16},
          }}
        /> */}
      </Tab.Navigator>
    );
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
