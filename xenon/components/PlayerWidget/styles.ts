import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    image: {
        width: 75,
        height: 75,
        marginRight: 10,
    },
    artist: {
        color: 'lightgray',
        fontSize: 18,

    },
    title: {
        color: 'white',
        fontSize: 18,
        margin: 10,
        fontWeight: 'bold',
    },
    container: {
        
        position: 'absolute',
        bottom: 64,
        backgroundColor: '#131313',
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'column',

    },
    rightContainer: {
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'space-between' 
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around',
    },
    progress: {
        height: 3,
            backgroundColor: '#bcbcbc'

    },
    row: {
        flexDirection: 'row',

    }
})
export default styles;