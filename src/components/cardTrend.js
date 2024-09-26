import React, { useContext } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default CardTrend = (props) =>{
    // const {lstAlbum, setListAlbum} = useContext
    return(
        <TouchableOpacity style={{height: 218, width: 150, marginRight: 10}}>
            <Image source={props.trend.Img} style={styles.imgPic}></Image>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
                {props.trend.name} - {props.trend.author}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  imgPic:{
    width: '100%',
    height: '65%',
    borderRadius: 20,
    marginBottom: 10
  }, 
})
