import * as React from 'react';
import styles from './styles'
import { Text, View } from '../../components/Themed';

import { Image, FlatList, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
interface Props {
    category: CategoryProps
}
interface CategoryProps {
    id: string,
    title: string,
    movies: Movies[]
}

interface Movies {
    id: string,
    poster: string
}
const HomeCategory = ({ category }: Props) => {

    const navigation = useNavigation()
    const onMoviePress = (movie: Movies) => {
        navigation.navigate('MovieDetailsScrean', {id: movie.id})
    }
    return (
        <>
            <Text style={styles.title}> {category.title}</Text>
            <FlatList
                data={category.movies}
                renderItem={({ item }) => (
                    <Pressable onPress={() => onMoviePress(item)} >
                        <Image style={styles.img} source={{ uri: item.poster }} />
                    </Pressable>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </>
    );
}



export default HomeCategory;