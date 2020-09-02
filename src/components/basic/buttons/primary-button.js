import styled from 'styled-components/native';
import {deviceRespectedSize} from '../../../utils/calcaulation';

const PrimaryButton = styled.TouchableOpacity`
  position: relative;
  height: ${deviceRespectedSize(50)}px;
  background: #f22b55;
  border-radius: 6px;
`;

export default PrimaryButton;
