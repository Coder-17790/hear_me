import React, { useContext } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default CardAlbum = (props) =>{
    // const {lstAlbum, setListAlbum} = useContext
    return(
        <TouchableOpacity style={{height: 218, width: 150, marginRight: 10}}>
            <Image source={props.album.Img} style={styles.imgPic}></Image>
            <Text style={{fontSize: 18, fontWeight: '600', textAlign: 'center'}}>
                {props.album.name}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  imgPic:{
    width: '100%',
    height: '65%',
    borderRadius: 100,
    marginBottom: 10
  }, 
})
