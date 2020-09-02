import styled from 'styled-components/native';
import {deviceRespectedSize} from '../../../utils/calcaulation';

const OutlineButton = styled.TouchableOpacity`
  position: relative;
  height: ${deviceRespectedSize(50)}px;
  border: 1px solid #222222;
  border-radius: 6px;
`;

export default OutlineButton;
