import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CardMusic from '../components/cardMusic';
import {songs} from '../container';
import {music} from '../model';

export default Songs = ({props}) => {
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    setMusicList(music.getMusic());
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View>
          <Text style={{fontWeight: '600', fontSize: 18, marginTop: 20}}>
            New Music Release Today
          </Text>
          <View style={{marginTop: 15}}>
            {musicList.map(items => {
              if (songs.today(items.day)) {
                return <CardMusic key={items.id} musics={items} />;
              }
              return null;
            })}
          </View>
        </View>
        <View>
          <Text style={{fontWeight: '600', fontSize: 18, marginTop: 20}}>
            Yesterday
          </Text>
          <View style={{marginTop: 15}}>
            {musicList.map(items => {
              if (!songs.today(items.day)) {
                return <CardMusic key={items.id} musics={items} />;
              }
              return null;
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
