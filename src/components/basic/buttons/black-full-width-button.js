import styled from 'styled-components/native';
import {deviceRespectedSize} from '../../../utils/calcaulation';

const BlackFullWidthButton = styled.TouchableOpacity`
  height: ${deviceRespectedSize(50)}px;
  width: 100%;
  background: #222222;
  border-radius: 6px;
`;

export default BlackFullWidthButton;
