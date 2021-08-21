import React from 'react';
import { View, Image, Text } from 'react-native';
import { MaterialIcons, Entypo, AntDesign, Feather, Ionicons, FontAwesome } from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'
import styles from './styles';

import movie from '../../assets/data/movie'
import { Pressable } from 'react-native';
import EpisodeItem from '../../components/EpisodeItem';
import { FlatList } from 'react-native'
import { useState } from 'react';
import VideoPlayer from '../../components/VideoPlayer';

interface Movies {
    id: string,
    title: string,
    year: number,
    numberOfSeasons: number,
    plot: string,
    cast: string,
    creator: string,
    seasons: Seasons
}
interface Seasons {
    items: Temp[]
}
interface Temp {
    id: string,
    name: string,
    episodes: Episode
}
interface Episode {
    items: Item[]
}
interface Item {
    id: string,
    title: string,
    poster: string,
    duration: string,
    plot: string,
    video: string,
}
const MovieDetailsScreen: React.FC = () => {

    const fisrtSeason = movie.seasons.items[0]
    const [currentSeason, setCurrentSeason] = useState(fisrtSeason)
    const fisrtEpisode = fisrtSeason.episodes.items[0]
    const [currentEpisode, setcurrentEpisode] = useState(fisrtEpisode)

    const seasonsName = movie.seasons.items.map(season => season.name)
    return (
        <View style={{ flex: 1 }}>
            <VideoPlayer episode={currentEpisode} />
            <FlatList
                data={currentSeason.episodes.items}
                renderItem={({ item }) => (
                    <EpisodeItem props={item}
                        onPress={setcurrentEpisode}
                    />
                )}
                // style={{ marginBottom: 250 }}

                ListHeaderComponent={(
                    <View style={{ padding: 12 }}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.match}>98% match</Text>
                            <Text style={styles.year}>{movie.year}</Text>
                            <View style={styles.ageContainer}>
                                <Text style={styles.age}>12</Text>
                            </View>
                            <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                            <MaterialIcons name="hd" size={24} color="white" />
                        </View>
                        <Pressable onPress={() => console.warn('Plage')} style={styles.playButton}>
                            <Text style={styles.playButtonText}>
                                <Entypo name="controller-play" size={16} color="black" />
                                Play
                            </Text>
                        </Pressable>

                        <Pressable onPress={() => console.warn('Download')} style={styles.downloadButton}>
                            <Text style={styles.downloadButtonText}>
                                <AntDesign name="download" size={16} color="white" />
                                {' '}
                                Download!
                            </Text>
                        </Pressable>

                        <Text style={{ color: 'white', marginVertical: 10 }}>{movie.plot}</Text>
                        <Text style={styles.year}>Cast: {movie.cast}</Text>
                        <Text style={styles.year}>Creator: {movie.creator}</Text>

                        {/**Row with icon buttons */}
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <AntDesign name="plus" size={24} color="white" />
                                <Text style={{ color: 'darkgrey', marginTop: 5 }} > My List</Text>
                            </View>
                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <Feather name="thumbs-up" size={24} color="white" />
                                <Text style={{ color: 'darkgrey', marginTop: 5 }} > Rate</Text>
                            </View>
                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <FontAwesome name="send-o" size={24} color="white" />
                                <Text style={{ color: 'darkgrey', marginTop: 5 }} > Share</Text>
                            </View>
                        </View>

                        <Picker
                            selectedValue={currentSeason.name}
                            onValueChange={(itemValue, itemIndex) => {
                                setCurrentSeason(movie.seasons.items[itemIndex])
                            }}
                            style={{ color: 'white', backgroundColor: 'black', padding: 5, marginTop: 5, width: 130, borderColor: 'black' }}
                            dropdownIconColor={'white'}
                        >
                            {seasonsName.map(seasonName => (
                                <Picker.Item label={seasonName} value={seasonName} key={seasonName} />

                            ))}
                        </Picker>
                    </View>
                )}
            />
        </View>
    );
}

export default MovieDetailsScreen;