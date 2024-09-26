import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CardPodcast from '../components/cardPodcast'
import {songs} from '../container'
import {podcast} from '../model'



export default Poscasts = ({props}) => {
    const [podcastList, setPodcastList] = useState([]);


    useEffect(() =>{
        setPodcastList(podcast.getPodcast())
    }, [])
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <View>
                    <Text style={{fontWeight: '600', fontSize: 18, marginTop: 20}}>
                        New Podcasts Release Today</Text>
                    <View style={{marginTop: 15}}>
                    {podcastList.map((items) =>
                        {
                            if(songs.today(items.day))
                            {
                                return <CardPodcast key={items.id} podcast = {items}/>
                            }
                            return null;
                        }
                    )}
                    </View>
                </View>
                <View>
                    <Text style={{fontWeight: '600', fontSize: 18, marginTop: 20}}>
                        Yesterday</Text>
                    <View style={{marginTop: 15}}>
                        {podcastList.map((items) =>
                        {
                            if(!songs.today(items.day))
                            {
                                return <CardPodcast key={items.id} podcast = {items}/>
                            }
                            return null;
                        }
                    )}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  
})
