import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export const deviceRespectedSize = size => {
  const calculatedSize = size / 411;
  return width * calculatedSize.toFixed(3);
};
