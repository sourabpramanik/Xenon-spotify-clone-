import React, { useContext } from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from './styles';
import {Song} from "../../types";
import {AppContext} from '../../AppContext'

export type SongListItemProps = {
    song: Song
}


const SongListItem= (props: SongListItemProps) => {
    const {setSongId}= useContext(AppContext)
    const {song} = props;
    const onPlay= () =>{
        setSongId(song.id)
    };

    return(
        <TouchableOpacity onPress={onPlay}>
            <View style={styles.container}>
                <Image source={{ uri: song.imageUri }} style={styles.image} />
                <View style={styles.rightcontainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
            </View>
        </TouchableOpacity>
        
    )
}
export default SongListItem;