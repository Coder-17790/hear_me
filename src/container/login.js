import React from 'react'
import { moduleName } from 'react-native'

export default{
    login_accect,
    changPassword
}

function login_accect(name, password){
    name ="Tuan";
    password= "2002";
    if(name == "Tuan" && password == "2002")
    {
        return true;
    }
    return false;
}

function changPassword(strings){
    console.log(strings)
    return strings.replace(/./g, '*')
}
