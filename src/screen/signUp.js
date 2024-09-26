import React, { useState } from 'react'
import {Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity } from 'react-native'
import assets from '../assets/index'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {useSelector, useDispatch} from 'react-redux'



const SignUp = ({navigation}) =>{
    const [isCheck, setIsChech] = useState(false)
    const [isFoCus1, setFoCus1] = useState(false)
    const [isFoCus2, setFoCus2] = useState(false)
    const [hidePassword, setHightPassword] = useState(false)
    const info = useSelector((state) => state.persioninfo)
    console.log("info", info)
    console.log(alooooo)





    const handleToggleCheckBox = () => {
        setIsChech(!isCheck)
    }

    const handfocusInput = (set) => {
        set(true)
    }

    const handbluesInput = (set) => {
        set(false)
    }

    function isHigh(){
        setHightPassword(!hidePassword)
    }

    return(
        <View style={{flex: 1}}> 
            <View style ={[style.containerMain, {flex: 3.0}]}>
                <Image source={require('../assets/iconMain.png')}
                        style = {style.imageCenter} />
                <Text style = {style.textMain}>Create Your Account</Text>
            </View>
            <View style ={[style.containerSecond, {flex:3.5}]} >
                <View style={[style.viewInput, isFoCus1 && style.viewInputFocus, {width: '80%'}]}>
                    <Icon name='email-outline' color={assets.color.textInput}
                    size={25} style={{paddingStart:10}}></Icon>
                    <TextInput style={[style.buttonInput, isFoCus1 && style.buttonInputBluer]}
                    placeholder= 'Email'
                    placeholderTextColor='gray'
                    autoCorrect={false}
                    autoCapitalize='none'
                    onFocus={() => handfocusInput(setFoCus1)}
                    onBlur={() =>handbluesInput(setFoCus1)}/>
                </View>
                <View style={[style.viewInput, isFoCus2 && style.viewInputFocus, {width: '80%'}]}>
                    <Icon name='lock' color={assets.color.textInput}
                    size={25} style={{paddingStart:10}}></Icon>
                    <TextInput style={[style.buttonInput, isFoCus2 && style.buttonInputBluer,{width: '85%'}]}
                    placeholder= 'Password'
                    placeholderTextColor='gray'
                    autoCorrect={false}
                    autoCapitalize='none'
                    secureTextEntry={hidePassword ? false : true}
                    onFocus={() => handfocusInput(setFoCus2)}
                    onBlur={() =>handbluesInput(setFoCus2)}/>
                    <Icon name={hidePassword ? 'eye' :'eye-off'} color={assets.color.textInput}
                    size={20} style={{paddingEnd:5}}
                    onPress={isHigh}></Icon>
                </View>
                <View style={[{flexDirection: 'row'}]}>
                    <TouchableOpacity onPress={handleToggleCheckBox}
                                     style={style.checkBox}>
                        {isCheck && (
                            <Icon 
                                name='check-bold'
                                color={assets.color.mainColor}
                                size={17} />)
                        }
                    </TouchableOpacity>
                    <Text style={{paddingStart: 10, fontSize: 15}}>Remember me</Text>
                </View>
                <TouchableOpacity style={style.buton}>
                    <Text style={{color: 'white', fontWeight: '700'}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style ={{flex: 3, alignItems: 'center'}}>
                <View style={style.viewRow}>
                    <View style={style.line}></View>
                    <Text style={{paddingHorizontal: 5}}>or continue with</Text>
                    <View style={style.line}></View>
                </View>
                <View style={[style.viewRow, {paddingTop:70}]}>
                    <TouchableOpacity style={style.butonLink}>
                        <Image source={require('../assets/facebook.png')}
                        style={style.iconLink}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.butonLink}>
                    <Image source={require('../assets/google.png')}
                        style={style.iconLink}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.butonLink}>
                    <Image source={require('../assets/apple-logo.png')}
                        style={style.iconLink}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    paddingTop: 40
                }}>
                    <Text>
                        Don’t have an account?
                    </Text>
                    <TouchableOpacity>
                        <Text style={{
                            color: assets.color.mainColor,
                            fontWeight: '600',
                            marginLeft: 5
                        }}
                        onPress={() => navigation.navigate('Login')}
                        >
                            Sign in
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    containerMain:{
        paddingBottom:20,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    containerSecond:{
        paddingTop: 10,
        // backgroundColor: 'yellow',
        alignItems: 'center',
    },
    imageCenter: {
        marginBottom: 50,
        height: 70,
        width: 70
    },
    textMain:{
        fontSize: 28,
    },
    viewInput:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: assets.color.input,
        borderRadius: 20,
        marginBottom: 10
    },
    viewInputFocus:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: assets.color.mainColoermatte,
        borderRadius: 20,
        borderColor: assets.color.mainColor,
        borderWidth: 1,
        marginBottom: 10
    },
    buttonInput:{
        flex: 1,
        backgroundColor: assets.color.input,
        width: '80%',
        height: 50,
        color: 'gray',
        paddingStart: 10,
        borderRadius: 20,
    },
    buttonInputBluer:{
        flex: 1,
        backgroundColor: assets.color.mainColoermatte,
        width: '80%',
        height: 50,
        color: 'gray',
        paddingStart: 10,
        borderColor: assets.color.mainColor,
        borderRadius: 20,
    },
    icon:{
        resizeMode: 'stretch',
        alignItems: 'center'
    },
    checkBox:{
        borderRadius: 4,
        borderWidth:2,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: assets.color.mainColor
    },
    buton:{
        width: '80%',
        height:50,
        backgroundColor: assets.color.mainColor,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    line:{
        height: 1,
        width: '30%',
        borderWidth: 0.3
    },
    viewRow:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '80%'
    },
    butonLink:{
        width: 70,
        height: 50,
        borderRadius: 5,
        borderWidth: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconLink:{
        height: 30,
        width: 30
    }
})
export default SignUp