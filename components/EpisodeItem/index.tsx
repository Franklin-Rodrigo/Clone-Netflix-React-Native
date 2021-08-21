import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
interface Props {
    props: Item
}
interface Item {
    id: string,
    title: string,
    poster: string,
    duration: string,
    plot: string,
    video: string,
}
const EpisodeItem = ({ props }: Props) => {
    return (
        <View style={{ margin: 10 }}>
            <View style={styles.row}>
                <Image style={styles.img} source={{ uri: props.poster }} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.duration}>{props.duration}</Text>
                </View>
                <AntDesign name="download" size={24} color="white" />
            </View>
            <Text style={styles.plot}>{props.plot}</Text>
        </View>
    );
}

export default EpisodeItem;