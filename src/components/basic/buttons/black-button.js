import styled from 'styled-components/native';
import {deviceRespectedSize} from '../../../utils/calcaulation';

const BlackButton = styled.TouchableOpacity`
  position: absolute;
  width: ${deviceRespectedSize(100)}px;
  height: ${deviceRespectedSize(50)}px;
  background: #222222;
  border-radius: 6px;
`;

export default BlackButton;
