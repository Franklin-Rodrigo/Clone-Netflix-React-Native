
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    img: {
        height: 75,
        width: 160,
        resizeMode: 'cover',
        borderRadius: 3
    },
    title: {
        color: 'white',
    },
    duration: {
        color: 'darkgrey',
        fontSize: 10,

    },
    plot: {
        color: 'darkgrey',
        
    },
    titleContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    }
});
export default styles;