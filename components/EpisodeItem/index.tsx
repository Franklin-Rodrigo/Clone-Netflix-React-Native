import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Episode } from '../../types';

import styles from './styles';
interface Props {
    props: Episode
    onPress: (episode: Episode) => void
}

const EpisodeItem = ({ props, onPress }: Props) => {
    return (
        <Pressable style={{ margin: 10 }} onPress={() => onPress(props)}>
            <View style={styles.row}>
                <Image style={styles.img} source={{ uri: props.poster }} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.duration}>{props.duration}</Text>
                </View>
                <AntDesign name="download" size={24} color="white" />
            </View>
            <Text style={styles.plot}>{props.plot}</Text>
        </Pressable>
    );
}

export default EpisodeItem;