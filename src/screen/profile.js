import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const Profile = () => {
    const navigation = useNavigation();
    return(
        <View style={{justifyContent: 'center', alignItems: 'center', flex:1}}>
            <Text>
                Đây là màng hình Profile
            </Text>
        </View>
    )
}

export default Profile