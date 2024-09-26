import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux'
import { store } from '../redux/store';

import {ChangeEmail} from '../redux/actions'


const Library = () => {
    const dispatch = useDispatch()
    
    const info = useSelector((state) => state.persioninfo)

    console.log("store", store.getState())
    const navigation = useNavigation();

    function testStore(){
        dispatch(ChangeEmail("bò con"))
        console.log("hiiiiii")

    }

    function test(){
        dispatch({
            type: "CAP_NHAT_EMAIL",
            email: "con heo"
            
        })
        console.log("hiiiiii")

    }
    return(
        <View style={{justifyContent: 'center', alignItems: 'center', flex:1}}>
            <Text>
                Đây là màng hình Library
            </Text>
            <TouchableOpacity onPress={() => testStore()}>
                <Text>{info.email}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Library