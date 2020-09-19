import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'white',
},
image: {
width: Dimensions.get('window').width * 1,
height: Dimensions.get('window').height * 0.3,
resizeMode: 'contain',
alignSelf: 'center',
marginTop: Dimensions.get('window').height * 0.3,
},
});