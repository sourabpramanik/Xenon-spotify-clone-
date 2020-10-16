import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    image: {
        width: 75,
        height: 75,
    },
    artist:{
        color: 'lightgray',
        fontSize: 20
    },
    title:{
        color: 'white',
        fontSize: 24,
    },
    container: {
        flexDirection: 'row',
        margin: 10
    },
    rightcontainer:{
        justifyContent: 'space-around',
        marginLeft: 15,
    }
})
export default styles;