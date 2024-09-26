import React from 'react'
import { Text , StyleSheet, Image, View, TouchableOpacity} from 'react-native'
import assets from '../assets/index'

const Login_method = ({navigation}) => {
    return(
        <View style={style.viewMain}>
            <Image style={style.iconMain}
             source={require('../assets/iconMain.png')}/>
             <Text style={style.textLabel}>
                Let's your in
             </Text>
            <TouchableOpacity style={style.buttonChoise}>
                <Image style={{height: 30, width: 30}}
                 source={require('../assets/facebook.png')}/>
                 <Text style={style.textSocial}>
                    Continue with Facebook
                 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonChoise}>
                <Image style={{height: 30, width: 30}}
                 source={require('../assets/google.png')}/>
                 <Text style={style.textSocial}>
                    Continue with Google
                 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonChoise}>
                <Image style={{height: 30, width: 30}}
                 source={require('../assets/apple-logo.png')}/>
                 <Text style={style.textSocial}>
                    Continue with Apple
                 </Text>
            </TouchableOpacity>
            <View style={[style.viewRow, {paddingTop: 40}]}>
                <View style={style.line}></View>
                <Text style={{fontSize: 18}}>or</Text>
                <View style={style.line}></View>
            </View>
            <TouchableOpacity style={[style.butonSignin]}
            onPress={() => navigation.navigate('Login')}>
                <Text style={{color: 'white', fontWeight: '700'}}>
                    Sign in with password
                </Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', 
            paddingTop: 30}}>
                <Text>
                    Don’t have an account?
                </Text>
                <TouchableOpacity onPress={() =>{
                    navigation.navigate('login')
                }}>
                    <Text style={{color: assets.color.mainColor,
                    fontWeight: '600',
                    marginLeft: 5}}
                    onPress={ () => navigation.navigate('SignUp')}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    viewMain:{
        flex: 1,
        alignItems: 'center'
    },
    iconMain:{
        height: 180,
        width: 180,
        marginTop: 80
    },
    textLabel:{
        marginTop: 20,
        fontSize: 35,
        fontWeight: '600'
    },
    buttonChoise:{
        marginTop: 20,
        width: '80%',
        height: 50,
        flexDirection: 'row',
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 10,
        marginHorizontal: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSocial:{
        marginLeft: 10,
        fontWeight: '500'
    },
    line:{
        height: 1,
        width: '42%',
        borderWidth: 0.3
    },
    viewRow:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '80%'
    },
    butonSignin:{
        width: '80%',
        height:50,
        backgroundColor: assets.color.mainColor,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
})

export default Login_method