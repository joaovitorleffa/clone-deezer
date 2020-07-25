import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import util from '~/assets/util';

import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
Ionicons.loadFont();
SimpleLineIcons.loadFont();
AntDesign.loadFont();
// util.loadFonts();

import Main from '~/pages/Main';
import Shows from '~/pages/Shows';
import Search from '~/pages/Search';
import Favorites from '~/pages/Favorites';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: '#000' }}>
      <Tab.Screen 
        options={{ tabBarIcon: ({ color }) => (<Ionicons name='musical-notes-outline' size={20} color={color}></Ionicons>) }}
        name="Música" component={Main} 
      />
      <Tab.Screen  
        options={{ tabBarIcon: ({ color }) => (<SimpleLineIcons name='microphone' size={20} color={color}></SimpleLineIcons>) }}
        name="Shows" component={Shows}
      />
      <Tab.Screen  
        options={{ tabBarIcon: ({ color, focused }) => (<AntDesign name={focused ? 'heart' : 'hearto'} size={20} color={color}></AntDesign>) }}
        name="Favorites" component={Favorites} 
      />
      <Tab.Screen  
        options={{ tabBarIcon: ({ color }) => (<Ionicons name='search' size={20} color={color}></Ionicons>) }}
        name="Search" component={Search}
      />
    </Tab.Navigator>
  );
}

export default AppStack;