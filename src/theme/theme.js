import { StyleSheet } from 'react-native'
import font from '../assets/font'
import color from '../assets/color'

const styleGB = StyleSheet.create({
    mainContainer:{
        flex: 1,
        fontFamily: font.fontMain
    },
    mainButon:{
        backgroundColor: color.mainColor,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainInput:{
        backgroundColor: color.input,
        color: 'gray',
        borderRadius: 20,
    },
    imageCircle:{
        borderRadius: 900
    }
})

export default styleGB