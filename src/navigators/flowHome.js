import React,{useEffect} from 'react'
import { View, Text, Image, TouchableOpacity, BackHandler } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screen/home'
import Notification from './notification'




const Stack = createStackNavigator();

const FlowHome = (props) =>{
   ;

    // useEffect(() => {
        
    //         console.log("========")
    //     }
    // );
    
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home'
                component={Home}
                options={{headerShown: false}} />
            <Stack.Screen name='Notification'
                component={Notification}
                options={{title: true,
                    
                    headerBackTitle: 'Notification',
                    headerBackTitleStyle:{color: 'black', fontSize: 20, fontWeight: '600'},
                    headerStyle: {height: 140},
                    headerBackImage: () => (
                        <Image source={require('../assets/back_ic.png')}
                        style={{height: 20, width: 25, marginHorizontal: 20}}></Image>
                    ),
                    headerRight: () => (
                        <Image source={require('../assets/optionHeader_ic.png')}
                        style={{height: 30, width: 30, marginRight: 10}}></Image>),
                    tabBarVisible: false,
                    
                }}/>
        </Stack.Navigator>
    )
}
export default FlowHome