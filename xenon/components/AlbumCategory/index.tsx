import React from 'react';
import {Text, View, FlatList} from 'react-native';
import { AlbumSection } from '../../types';
import Album from '../Album';
import styles from './styles'


export type AlbumCategoryProps={
    title:string;
    albums:[AlbumSection]
}

const AlbumCategory = (props: AlbumCategoryProps) => (
    <View>
        <Text style={styles.text}>{props.title}</Text>
        <FlatList 
        data={props.albums}
        renderItem={({ item }) => <Album album={item}/>}
        keyExtractor={(item) => item.id}
        horizontal
        />
    </View>
)
export default AlbumCategory;