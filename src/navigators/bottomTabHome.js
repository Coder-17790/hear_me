import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import FlowHome from './flowHome';
import Explore from '../screen/explore';
import Library from '../screen/library';
import Profile from '../screen/profile';
import color from '../assets/color'
// import Home from '../screen/home';

const TabBottom = createBottomTabNavigator();

const TabBottomHome = () => {
  return (
    <TabBottom.Navigator 
      screenOptions={({route}) => ({
        tabBarIcon: ({ color }) => {
          let sourceImage;
          if (route.name === "FlowHome") {
            sourceImage = require('../assets/home_ic.png');
          } else if (route.name === "Explore") {
            sourceImage = require('../assets/explore_ic.png');
          } else if (route.name === "Library") { // Thay "Libary" thành "Library"
            sourceImage = require('../assets/library_ic.png');
          } else if (route.name === "Profile") {
            sourceImage = require('../assets/profile_ic.png');
          } else {
            // Xử lý trường hợp tên route không xác định
            sourceImage = require('../assets/profile_ic.png');
          }
          // return <Icon name='lock' style={{ width: size, height: size, tintColor: color }} />; // Trả về một React Element
          return <Image source={sourceImage} style={{ width: 24, height: 27, tintColor: color }} />;
        },
        tabBarActiveTintColor: color.mainColor,
        tabBarInactiveTintColor: color.textInput,
        headerShown: false,        
      })}
    >
      <TabBottom.Screen name="FlowHome"
        component={FlowHome}
        options={{tabBarStyle: 'none'}}></TabBottom.Screen>
      <TabBottom.Screen name="Explore"
        component={Explore}></TabBottom.Screen>
      <TabBottom.Screen name="Library"
        component={Library}></TabBottom.Screen>
      <TabBottom.Screen name="Profile"
        component={Profile}></TabBottom.Screen>
    </TabBottom.Navigator>
  );
}

export default TabBottomHome;
