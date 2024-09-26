import React from 'react'
import { moduleName } from 'react-native'

export default{
    today
}

var toDay = new Date()
function today(day){
    return (day.toDateString() == toDay.toDateString())
}