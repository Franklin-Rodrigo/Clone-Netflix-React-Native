import { Video } from 'expo-av';
import { Playback } from 'expo-av/build/AV';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { View, Text } from 'react-native';
import { Episode } from '../../types';

import styles from './styles';

interface VideoPlayerProps {
    episode: Episode
}

const VideoPlayer = ({ episode }: VideoPlayerProps) => {

    const video = useRef<Video>(null)
    const [status, setStatus] = useState({});
    useEffect(() => {
        if (!video) {
            return;
        }
        (async () => {
            await video?.current?.unloadAsync();
            await video?.current?.loadAsync(
                { uri: episode.video },
                {},
                false
            );

        })()

    }, [episode])
    // const handleVideoRef = (component: Playback) => {
    //     const playbackObject = component;
    //     const source = {
    //         uri: episode.video
    //     }
    //     const initialStatus = {

    //     }
    //     playbackObject.loadAsync(source, initialStatus, false)
    // }
    return (
        <View>
            <Video
                ref={video}
                style={styles.video}
                source={{ uri: episode.video }}
                posterSource={{ uri: episode.poster }}
                posterStyle={{
                    resizeMode: 'cover'
                }}
                usePoster={true}
                useNativeControls
                resizeMode='contain'
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}

            />
        </View>
    )
}

export default VideoPlayer;