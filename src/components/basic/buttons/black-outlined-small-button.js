import styled from 'styled-components/native';
import {deviceRespectedSize} from '../../../utils/calcaulation';

const BlackOutlinedSmallButton = styled.TouchableOpacity`
  position: absolute;
  width: ${deviceRespectedSize(100)}px;
  height: ${deviceRespectedSize(50)}px;
  border: 1px solid #222222;
  border-radius: 6px;
`;

export default BlackOutlinedSmallButton;
