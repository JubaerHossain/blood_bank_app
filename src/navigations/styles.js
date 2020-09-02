import {StyleSheet, Dimensions} from 'react-native';
import {OFFBLACK} from '../styles/colors';
export default StyleSheet.create({
  headerStyle: {
    backgroundColor: OFFBLACK,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  headerTitleStyle: {
    alignSelf: 'center',
    color: 'white',
  },
  modal: {
    height: Dimensions.get('window').height * 1,
    overflow: 'scroll',
    backgroundColor: 'black',
  },
  closeButton: {
    position: 'absolute',
    fontSize: 10,
    zIndex: 99,
    height: 20,
  },
  back_text: {
    color: 'white',
    fontSize: 18,
    top: -Dimensions.get('window').height * 0.005,
    marginLeft: Dimensions.get('window').width * 0.01,
  },
  make_inline: {
    display: 'flex',
    flexDirection: 'row',
  },
});
