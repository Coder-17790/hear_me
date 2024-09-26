import React, {useState, useEffect, useContext, createContext} from 'react'
import { View } from 'react-native'
import { SceneMap, TabView, TabBar } from 'react-native-tab-view'
import Songs from '../screen/songs'
import Podcasts from '../screen/podcasts'
import { Dimensions } from 'react-native' // Thêm import này
import color from '../assets/color'


export default function Notifications(props){
    useEffect(() => {
        props.navigation.getParent().setOptions({
            tabBarStyle: {display: 'none'}
        });
      });

    const initialLayout = { width: Dimensions.get('window').width}; // Sửa thành width
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 'first', title: 'Songs'},
        {key: 'second', title: 'Podcasts'}
    ])
    const renderScene = SceneMap({
        first: Songs,
        second: Podcasts
    })



    return(
        <View style={{paddingHorizontal: 15,flex: 1, backgroundColor: 'white'}}>
            <TabView
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={props => <TabBar {...props}
                 style={{backgroundColor: 'white'}}
                 activeColor= {color.mainColor}
                 inactiveColor= {color.textInput}
                 indicatorStyle={{borderColor: color.mainColor, borderWidth: 2}}
                 labelStyle={{ fontWeight: '600', fontSize: 15, textTransform:'none' }}
                 />} // <-- add this line
                />
        </View>
    )
}