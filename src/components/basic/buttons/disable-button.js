import styled from 'styled-components/native';
import {deviceRespectedSize} from '../../../utils/calcaulation';

const DisableButton = styled.TouchableOpacity`
  background: #dcdcdc;
  border-radius: 6px;
  height: ${deviceRespectedSize(50)}px;
`;

export default DisableButton;
