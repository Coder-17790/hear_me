import React, {useEffect, useState} from 'react'
import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import styleGB from '../theme/theme';
import color from '../assets/color';
import {trend, album, popular} from '../model'
import CardAlbum from '../components/cardAlbum'
import CardTrend from '../components/cardTrend';
import CardChart from '../components/cardChart';



const Home = (props) => {
    const [trendLst, setTrendLst] = useState([])
    const [albumLst, setAlbumLst] = useState([])
    const [popularLst, setPopularLst] = useState([])

    useEffect(() =>{
        setTrendLst(trend.getTrend())
        setAlbumLst(album.getAlbum())
        setPopularLst(popular.getPopular())
    }, [])
    useFocusEffect(
        React.useCallback(() => {
            props.navigation.getParent().setOptions({
                        tabBarStyle: { display: 'flex' }
        }, [])}
    ));
    return(
        <View style={styleGB.mainContainer}>
            <SafeAreaView style={{flex: 1}}>
                <ScrollView style={{ flex: 1, paddingLeft: 20}}>
                    <View style={style.boxAvatar}>
                        <Image style={[styleGB.imageCircle, { width: 40, height: 40 }]}
                            source={require('../assets/avatar.png')} />
                        <View style={{flexDirection: 'column', marginLeft: 10}}>
                            <View style={{flexDirection: 'column', paddingRight: 120}}>
                                <Text style={{marginBottom:5}}>Good Morning 👋</Text>
                                <Text style={{fontWeight: '600', fontSize: 20}}>Tuấn Hoàng</Text>
                            </View>
                        </View>
                        <Image source={require('../assets/search_ic.png')}
                         style={{width:25, height:25, marginRight: 10}}></Image>
                         <TouchableOpacity onPress={() => 
                            {props.navigation.navigate('Notification')
                            // navigation.setOptions({tabBarVisible: false})
                            }}>
                             <Image source={require('../assets/bell_ic.png')}
                             style={{width:30, height:30}}></Image>
                         </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 25}}>
                        <View style={[{flexDirection: 'row', justifyContent: 'space-between'}]}>
                            <Text style={[style.titleList]}>Trending now</Text>
                            <Text style={[style.textSeenAll]}>Seen all</Text>
                        </View>
                        <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{marginTop: 15}}>
                            {trendLst.map((items, index)=>(
                                <CardTrend key={index} trend={items}/>
                            ))}
                        </ScrollView>
                        <View style={{marginTop: 25}}>
                            <View style={[{flexDirection: 'row', justifyContent: 'space-between'}]}>
                                <Text style={[style.titleList]}>Popular Artists</Text>
                                <Text style={[style.textSeenAll]}>Seen all</Text>
                            </View>
                            <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{marginTop: 15}}>
                                {albumLst.map((items, index)=>(
                                    <CardAlbum key={index} album={items}/>
                                ))}
                            </ScrollView>
                        </View>
                        <View style={{marginTop: 25}}>
                            <View style={[{flexDirection: 'row', justifyContent: 'space-between'}]}>
                                <Text style={[style.titleList]}>Popular Artists</Text>
                                <Text style={[style.textSeenAll]} >Seen all</Text>
                            </View>
                            <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{marginTop: 15}}>
                                {popularLst.map((items, index)=>(
                                    <CardChart key={index} popular={items}/>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    ) 
}
const style = StyleSheet.create({
    boxAvatar:{
        flexDirection: 'row',
        paddingTop: 20,
        alignItems: 'center'
    },
    
    titleList:{
        fontSize: 25,
        fontWeight: '600'
    },
    textSeenAll:{
        fontSize: 18,
        marginBottom: 10,
        color: color.mainColor,
        marginRight:10
    }
})

export default Home