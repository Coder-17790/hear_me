import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Login from '../screen/login'
import Login_method from '../screen/login_method'
import SignUp from '../screen/signUp'
import TabBottomHome from './bottomTabHome'
import {Provider} from 'react-redux'
import {store} from '../redux/store'



const Stack = createStackNavigator();

const flowLogin = () =>{
    return(
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator  initialRouteName="ChoiseMethod">
                    <Stack.Screen name='ChoiseMethod'
                     component={Login_method}
                     options={{ title: true }} />
                    <Stack.Screen name='Login'
                     component={Login}
                     options={{ title: true }}/>
                    <Stack.Screen name='SignUp'
                    component={SignUp}
                    options={{title : true}}/>
                    <Stack.Screen name='TabBottomHome'
                    component={TabBottomHome}
                    options={{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
export default flowLogin