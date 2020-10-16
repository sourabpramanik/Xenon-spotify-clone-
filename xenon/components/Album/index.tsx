import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles'
import { AlbumSection } from "../../types";
import { useNavigation } from "@react-navigation/native";
export type AlbumProps = {
    album: AlbumSection
}
const Album = (props: AlbumProps) => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('AlbumScreen', {id: props.album.id})
    }
    return(
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image source={{ uri: props.album.imageUri }} style={styles.image} />
                <Text style={styles.text}>{props.album.artistHeadLine}</Text>
            </View>
        </TouchableWithoutFeedback>
        
    )
}
export default Album;