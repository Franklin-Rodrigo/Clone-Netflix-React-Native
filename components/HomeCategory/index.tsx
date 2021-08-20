import * as React from 'react';
import styles from './styles'
import { Text, View } from '../../components/Themed';

import { Image, FlatList } from 'react-native'

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
    return (
        <>
            <Text style={styles.title}> {category.title}</Text>
            <FlatList
                data={category.movies}
                renderItem={({ item }) => (
                    <Image style={styles.img} source={{ uri: item.poster }} />

                )}
                horizontal
            />
        </>
    );
}



export default HomeCategory;