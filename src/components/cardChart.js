import React, { useContext } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default CardChart = (props) =>{
    // const {lstAlbum, setListAlbum} = useContext
    return(
        <TouchableOpacity style={{height: 218, width: 150, marginRight: 10}}>
            <View style={styles.vew}>
              <Image source={require('../assets/colors.png')} style={styles.imgPic}></Image>
              <Text style={styles.text}>
                {props.popular.name}
                </Text>
            </View>
            <Text style={{fontSize: 18, fontWeight: '600', textAlign: 'center'}}>
                {props.popular.name} - {props.popular.scope}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  vew:{
    width: '100%',
    height: '65%',
    marginBottom: 10,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  imgPic:{
    width: '100%',
    height: '100%',
    borderRadius: 20,
    position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
  }, 
  text:{
    fontSize: 18, fontWeight: '600'
  }
})
