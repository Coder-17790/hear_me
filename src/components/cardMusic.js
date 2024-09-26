import React, { useContext } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import color from '../assets/color'
import font from '../assets/font'
import {songs} from '../container'

export default CardMusic = (props) =>{
    // const {lstAlbum, setListAlbum} = useContext
    
    return(
        <View style={styles.viewCard}>
            <TouchableOpacity style={{flexDirection: 'row'}}>
                <Image source={props.musics.img} style={styles.imgPic}></Image>
                <View>
                    <Text style={{color: color.textInput }}>
                        {songs.today(props.musics.day) ? 'To day' : 'Yesterday'}  |  {props.musics.time.minute}:{props.musics.time.second} mins</Text>
                    <Text style={{fontSize: 16, marginVertical: 5, fontWeight: '600'}}>
                        {props.musics.name}</Text>
                    <Text style={{color: color.textInput }}>
                        {props.musics.author}  |  {props.musics.type}</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.viewIcon}>
                <Image source={require('../assets/play_ic.png')}
                style={{width: 25, height: 25, marginRight: 30}}></Image>
                <Image source={require('../assets/optionMusic_ic.png')}
                style={{width: 5, height: 20, marginTop: 5, }}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewCard:{
        fontFamily: font.fontMain,
        width: '100%',
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },imgPic:{
        width: 70,
        height: 70,
        borderRadius: 15,
        marginRight: 18
    },viewIcon:{
        flexDirection: 'row',
        marginRight: 5,
    },
    
    
})
