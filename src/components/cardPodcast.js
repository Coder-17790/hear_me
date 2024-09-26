import React, { useContext } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import color from '../assets/color'
import font from '../assets/font'
import {songs} from '../container'

export default CardMusic = ({podcast}) =>{
    
    return(
        <View style={styles.viewCard}>
            <TouchableOpacity style={{flexDirection: 'row', borderWidth: 1}}>
                <Image source={podcast.img} style={styles.imgPic}></Image>
                <View style={{flex: 1}}>
                    <Text style={styles.textName} numberOfLines={2} ellipsizeMode="tail">
                        {podcast.espisoda}: {podcast.author} | {podcast.name}</Text>
                    <Text style={{color: color.textInput}}>
                        {podcast.title}  |  {podcast.minute}:{podcast.second} mins</Text>
                    <View style={styles.viewIcon}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={require('../assets/play_ic.png')}
                                style={{ width: 25, height: 25, marginRight: 30 }}></Image>
                            <Image source={require('../assets/loveMusic.png')}
                                style={{ width: 20, height: 20, marginTop: 1, }}></Image>
                        </View>
                        <Image source={require('../assets/play_ic.png')}
                            style={{ width: 25, height: 25, marginRight: 10 }}></Image>
                            
                    </View>
                </View>
                
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewCard:{
        fontFamily: font.fontMain,
        width: '100%',
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center'
    },textName:{
        fontSize: 16,
        marginBottom: 5, 
        fontWeight: '600',
    },imgPic:{
        width: 90,
        height: 90,
        borderRadius: 15,
        marginRight: 18
    },viewIcon:{
        marginTop: 10,
        flexDirection: 'row',
        marginRight: 5,
        justifyContent: 'space-between'
    },
    
    
})
