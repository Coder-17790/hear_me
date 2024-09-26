import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';







const Explore = () => {    
    const [data, setData] = useState([])
    useEffect(()=>{
        fetchData()
    }, [])
    if(data.length > 0)
        console.log(data[0])


    const fetchData = async () => {
        const url = 'https://jsonplaceholder.typicode.com/photos';
        fetch(url)
        .then((res) => res.json())
        .then((jsonRes) => setData(jsonRes))
        .catch((error) => console.log("Error", error))
    }

    const render =({item, index})=>{
        return(
            <Text>
                {item.title.toString()}
            </Text>
        )
    }

    return(
        <View style={{justifyContent: 'center', alignItems: 'center', flex:1}}>
            <Text>
                Đây là màng hình Explore
            </Text>
            <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={render}>
            </FlatList>
        </View>
    )
}

export default Explore