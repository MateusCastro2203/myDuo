import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import {HomeScreen} from '../modules/home/HomeScreen';
import {ListScreen} from '../modules/list/ListScreen';
import {MovieDetails} from '../modules/movie/MovieDetailScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeIcon = () => <Icon name="home" size={20} color="#FFFFFF" />;
const ListIcon = () => <Icon name="list" size={20} color="#FFFFFF" />;

const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#242e34', paddingTop: 10},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeIcon,
          tabBarLabelStyle: {fontSize: 16},
          headerShown: false,
          tabBarLabel: 'Início',
        }}
      />
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarIcon: ListIcon,
          headerShown: false,
          tabBarLabel: 'Lista',
          tabBarLabelStyle: {fontSize: 16},
        }}
      />
    </Tab.Navigator>
  );
};

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{headerShown: false}}
        initialParams={{movieId: 0, lastScreen: ''}}
      />
    </Stack.Navigator>
  );
};
